import { gql } from "apollo-boost";

export const NOTES_QUERY = gql`
  {
    notes {
      id
      title
      bodyText
    }
  }
`;

export const NOTE_QUERY = gql`
  query($id: Int!) {
    note(id: $id) {
      id
      title
      bodyText
    }
  }
`;

// Mutations

export const CREATE_NOTE = gql`
  mutation($title: String!, $bodyText: String!) {
    createNote(title: $title, bodyText: $bodyText) {
      note {
        id
        title
        bodyText
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation($id: Int!, $title: String, $bodyText: String) {
    updateNote(id: $id, title: $title, bodyText: $bodyText) {
      note {
        id
        title
        bodyText
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation($id: Int!) {
    deleteNote(id: $id) {
      id
    }
  }
`;
