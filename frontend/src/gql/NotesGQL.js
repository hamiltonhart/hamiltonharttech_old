import { gql } from "apollo-boost";

export const NOTES_QUERY = gql`
  {
    notes {
      id
      title
      summary
    }
  }
`;

export const NOTE_QUERY = gql`
  query($id: Int!) {
    note(id: $id) {
      id
      title
      summary
      bodyText
    }
  }
`;

// Mutations

export const CREATE_NOTE = gql`
  mutation($title: String!, $bodyText: String!, $summary: String) {
    createNote(title: $title, bodyText: $bodyText, summary: $summary) {
      note {
        id
        title
        summary
        bodyText
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation($id: Int!, $title: String, $bodyText: String, $summary: String) {
    updateNote(id: $id, title: $title, bodyText: $bodyText, summary: $summary) {
      note {
        id
        title
        summary
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
