import React from "react";
import { Link } from "@reach/router";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    textDecoration: "none"
  }
}));

// const ReactMarkdown = require("react-markdown");

export const NoteListItem = ({ note }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      elevation={6}
      component={Link}
      to={`/notes/${note.id}`}
    >
      <Typography variant="h4">{note.title}</Typography>
      <Typography>{note.summary}</Typography>
      {/* <ReactMarkdown source={note.bodyText} /> */}
    </Paper>
  );
};
