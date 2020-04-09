import React from "react";
import { Link } from "@reach/router";
import { Error } from "../components/Global";
import { NoteListItem } from "../components/Notes";

import { makeStyles, Typography, Button, Paper, Grid } from "@material-ui/core";

import { NOTES_QUERY } from "../gql";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../index.js";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    padding: theme.spacing(3),
    flexGrow: "1",
  },
  listItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export const NotesListPage = () => {
  const { data, loading, error } = useQuery(NOTES_QUERY);
  const { data: loggedInData, error: loggedInError } = useQuery(IS_LOGGED_IN);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" align="center">
        Notes
      </Typography>
      <Grid container className={classes.listContainer} spacing={2}>
        {loggedInError && <Error errorMessage={loggedInError} />}
        {loggedInData && loggedInData.isLoggedIn && (
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              component={Link}
              to="/notes/create"
            >
              Add Note
            </Button>
          </Grid>
        )}
        {loading && <h1>Loading...</h1>}
        {error && <Error errorMessage={error} />}
        {data &&
          data.notes.map((note) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <NoteListItem
                key={note.id}
                note={note}
                className={classes.listItem}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
