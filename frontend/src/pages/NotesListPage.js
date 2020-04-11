import React from "react";
import { Link } from "@reach/router";
import { Error, Loading } from "../components/Global";
import { NoteListItem } from "../components/Notes";

import {
  makeStyles,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { NOTES_QUERY } from "../gql";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../index.js";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  heading: {
    margin: "20px 0 20px 0",
  },
  listItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  createButton: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 0 20px 0",
  },
}));

export const NotesListPage = () => {
  const { data, loading, error } = useQuery(NOTES_QUERY);
  const { data: loggedInData, error: loggedInError } = useQuery(IS_LOGGED_IN);

  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Typography className={classes.heading} variant="h3" align="center">
        Notes
      </Typography>
      <div className={classes.listContainer}>
        <Grid container spacing={2}>
          {loggedInError && <Error errorMessage={loggedInError.message} />}
          {loggedInData && loggedInData.isLoggedIn && (
            <Grid className={classes.createButton} item xs={12}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                component={Link}
                to="/notes/create"
                fullWidth={!isSmall}
              >
                Add Note
              </Button>
            </Grid>
          )}

          {loading && (
            <Grid item xs={12}>
              <Loading />
            </Grid>
          )}
          {error && <Error errorMessage={error.message} />}
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
      </div>
    </>
  );
};
