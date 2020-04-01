import React from "react";
import { Link } from "@reach/router";
import { NoteListItem } from "../components/Notes";

import { makeStyles, Typography, Button, Paper } from "@material-ui/core";

import { NOTES_QUERY } from "../gql";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(theme => ({
  listContainer: {
    padding: theme.spacing(2)
  },
  listItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export const NotesListPage = () => {
  const { data, loading, error } = useQuery(NOTES_QUERY);

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" align="center">
        Notes
      </Typography>
      <Paper className={classes.listContainer} elevation={0}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component={Link}
          to="/notes/create"
        >
          Add Note
        </Button>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {data &&
          data.notes.map(note => (
            <NoteListItem
              key={note.id}
              note={note}
              className={classes.listItem}
            />
          ))}
      </Paper>
    </div>
  );
};
