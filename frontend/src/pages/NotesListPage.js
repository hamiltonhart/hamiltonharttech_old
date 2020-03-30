import React from "react";
import { NoteListItem, CreateNote } from "../components/Notes";

import { NOTES_QUERY } from "../gql";
import { useQuery } from "@apollo/react-hooks";

export const NotesListPage = () => {
  const { data, loading, error } = useQuery(NOTES_QUERY);

  return (
    <div>
      Notes List Page
      <CreateNote />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data &&
        data.notes.map(note => <NoteListItem key={note.id} note={note} />)}
    </div>
  );
};
