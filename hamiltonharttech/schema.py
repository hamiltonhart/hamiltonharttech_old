import graphene
import graphql_jwt
from graphene_django import DjangoObjectType

# import app schemas
import users.schema
import notes.schema


class Query(
    users.schema.Query,
    notes.schema.Query,
    graphene.ObjectType
):
    pass


class Mutation(
    users.schema.Mutation,
    notes.schema.Mutation,
    graphene.ObjectType
):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
