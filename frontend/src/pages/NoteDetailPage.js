import React, { useState } from "react";
import { navigate } from "@reach/router";
import { IS_LOGGED_IN } from "../index";
import {
  makeStyles,
  Typography,
  Paper,
  Button,
  ClickAwayListener,
} from "@material-ui/core";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { NOTE_QUERY, DELETE_NOTE, NOTES_QUERY } from "../gql";
import { useToggle } from "../utilities";
import { EditNote } from "../components/Notes";
import { Error, Loading } from "../components/Global";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  subheading: {
    maxWidth: "600px",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: "2px",
    fontStyle: "italic",
    backgroundColor: theme.palette.primary.main,
  },
  noteContainer: {
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(6),
    padding: "8px 16px",
    "& pre": {
      backgroundColor: "black",
      padding: theme.spacing(2),
      overflow: "scroll",
      marginRight: theme.spacing(2),
      fontSize: ".85em",
    },
    "& a": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export const NoteDetailPage = ({ noteId }) => {
  const [currentId, setCurrentId] = useState(noteId);
  const [deleteActive, setDeleteActive] = useState(false);

  const { data, loading, error } = useQuery(NOTE_QUERY, {
    variables: { id: currentId },
  });

  const { data: loggedInData } = useQuery(IS_LOGGED_IN);

  const [deleteNote, { error: deleteError }] = useMutation(DELETE_NOTE);

  const { on: editOn, toggle: editToggle } = useToggle();

  const ReactMarkdown = require("react-markdown");
  const classes = useStyles();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote({
      variables: { id: currentId },
      refetchQueries: [{ query: NOTES_QUERY }],
      onCompleted: onDeleteCompleted(),
    });
  };

  const onDeleteCompleted = () => {
    console.log("Delete Completed");
    navigate("/");
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error errorMessage={error.message} />}
      {deleteError && <Error errorMessage={deleteError.message} />}
      {data && (
        <>
          <Typography
            className={classes.heading}
            variant="h4"
            align="center"
            gutterBottom
          >
            {`${data.note.title}`}
          </Typography>
          {!editOn && (
            <>
              <Typography
                className={classes.subheading}
                variant="subtitle1"
                align="center"
              >
                {data.note.summary}
              </Typography>
              <Paper className={classes.noteContainer} elevation={0}>
                <ReactMarkdown source={data.note.bodyText} />
                {loggedInData && loggedInData.isLoggedIn && (
                  <>
                    {!deleteActive && (
                      <Button
                        className={classes.button}
                        size="large"
                        variant="outlined"
                        color="error"
                        onClick={() => setDeleteActive(true)}
                      >
                        Delete
                      </Button>
                    )}
                    {deleteActive && (
                      <ClickAwayListener
                        onClickAway={() => setDeleteActive(false)}
                      >
                        <Button
                          className={classes.button}
                          size="large"
                          color="warning"
                          variant="contained"
                          onClick={(e) => handleDelete(e)}
                        >
                          Delete
                        </Button>
                      </ClickAwayListener>
                    )}
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={editToggle}
                      disabled={deleteActive}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Paper>
            </>
          )}
          {loggedInData && loggedInData.isLoggedIn && editOn && (
            <>
              <EditNote note={data.note} toggle={editToggle} />
            </>
          )}
        </>
      )}
    </>
  );
};
