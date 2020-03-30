import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError
from graphql_jwt.decorators import login_required, superuser_required

from .models import Note

# Queries


class NoteType(DjangoObjectType):
    class Meta:
        model = Note


class Query(graphene.ObjectType):
    notes = graphene.List(NoteType)
    note = graphene.Field(NoteType, id=graphene.Int(required=True))

    def resolve_notes(self, info):
        return Note.objects.all()

    def resolve_note(self, info, id):
        try:
            return Note.objects.get(id=id)
        except:
            return GraphQLError("A valid Note ID was not provided.")

# Mutations


class CreateNote(graphene.Mutation):
    note = graphene.Field(NoteType)

    class Arguments:
        title = graphene.String(required=True)
        body_text = graphene.String(required=True)

    @login_required
    def mutate(self, info, title, body_text):
        note = Note(title=title, body_text=body_text)
        note.save()
        return CreateNote(note=note)


class UpdateNote(graphene.Mutation):
    note = graphene.Field(NoteType)

    class Arguments:
        id = graphene.Int(required=True)
        title = graphene.String()
        body_text = graphene.String()

    @login_required
    def mutate(self, info, id, title=None, body_text=None):
        try:
            note = Note.objects.get(id=id)
        except:
            raise GraphQLError("A valid Note ID was not provided.")

        if title:
            note.title = title
        if body_text:
            note.body_text = body_text

        note.save()
        return UpdateNote(note=note)


class DeleteNote(graphene.Mutation):
    note = graphene.Field(NoteType)

    class Arguments:
        id = graphene.Int(required=True)

    @login_required
    def mutate(self, info, id):
        try:
            note = Note.objects.get(id=id)
        except:
            raise GraphQLError("A valid Note ID was not provided.")

        note.delete()
        return note


class Mutation(graphene.ObjectType):
    create_note = CreateNote.Field()
    udpate_note = UpdateNote.Field()
    delete_note = DeleteNote.Field()
