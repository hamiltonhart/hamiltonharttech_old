import React from "react";

const ReactMarkdown = require("react-markdown");

export const NoteListItem = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <ReactMarkdown source={note.bodyText} />
    </div>
  );
};
