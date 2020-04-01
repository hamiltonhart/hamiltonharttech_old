import React from "react";

import { Typography, Paper } from "@material-ui/core";

import { CreateNote } from "../components/Notes";

export const CreateNotePage = () => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Create Note
      </Typography>
      <CreateNote />;
    </>
  );
};
