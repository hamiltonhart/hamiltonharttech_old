import React, { useState } from "react";
import { Link } from "@reach/router";
import { Error, Loading, SearchNotes } from "../components/Global";
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
    margin: "0px 0 20px 0",
  },
  listItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  sectionHeading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20px 20px 20px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "end",
    },
  },
  createButton: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0",
    },
  },
}));

export const NotesListPage = () => {
  const { data, loading, error } = useQuery(NOTES_QUERY);
  const { data: loggedInData, error: loggedInError } = useQuery(IS_LOGGED_IN);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
          <Grid className={classes.sectionHeading} item xs={12}>
            {loggedInData && loggedInData.isLoggedIn && (
              <Button
                className={classes.createButton}
                color="primary"
                variant="contained"
                size="large"
                component={Link}
                to="/notes/create"
                fullWidth={!isSmall}
              >
                Add Note
              </Button>
            )}
            <SearchNotes
              fullWidth={!isSmall}
              data={data}
              setSearchResults={setSearchResults}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Grid>

          {loading && (
            <Grid item xs={12}>
              <Loading />
            </Grid>
          )}
          {error && <Error errorMessage={error.message} />}
          {data && searchValue && searchResults.length < 1 && (
            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="center"
              >{`No results for '${searchValue}'...`}</Typography>
            </Grid>
          )}
          {data &&
            (searchResults.length > 0 && searchValue != ""
              ? searchResults.map((note) => (
                  <Grid key={note.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <NoteListItem note={note} className={classes.listItem} />
                  </Grid>
                ))
              : data.notes.map((note) => (
                  <Grid key={note.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <NoteListItem note={note} className={classes.listItem} />
                  </Grid>
                )))}
          {console.log(searchResults)}
        </Grid>
      </div>
    </>
  );
};
