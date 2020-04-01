import React, { useState } from "react";
import { navigate } from "@reach/router";
import {
  makeStyles,
  Typography,
  Paper,
  Button,
  ClickAwayListener
} from "@material-ui/core";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { NOTE_QUERY, DELETE_NOTE, NOTES_QUERY } from "../gql";
import { useToggle } from "../utilities";
import { EditNote } from "../components/Notes";

const useStyles = makeStyles(theme => ({
  subheading: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  noteContainer: {
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export const NoteDetailPage = ({ noteId }) => {
  const [currentId, setCurrentId] = useState(noteId);
  const [deleteActive, setDeleteActive] = useState(false);

  const { data, loading, error } = useQuery(NOTE_QUERY, {
    variables: { id: currentId }
  });

  const [deleteNote, { error: deleteError }] = useMutation(DELETE_NOTE);

  const { on: editOn, toggle: editToggle } = useToggle();

  const ReactMarkdown = require("react-markdown");
  const classes = useStyles();

  const handleDelete = e => {
    e.preventDefault();
    deleteNote({
      variables: { id: currentId },
      refetchQueries: [{ query: NOTES_QUERY }],
      onCompleted: onDeleteCompleted()
    });
  };

  const onDeleteCompleted = () => {
    console.log("Delete Completed");
    navigate("/");
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h3>{error.message}</h3>}
      {data && (
        <>
          <Typography variant="h3" align="center" gutterBottom>
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
                  <ClickAwayListener onClickAway={() => setDeleteActive(false)}>
                    <Button
                      className={classes.button}
                      size="large"
                      color="warning"
                      variant="contained"
                      onClick={e => handleDelete(e)}
                    >
                      Delete
                    </Button>
                  </ClickAwayListener>
                )}
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  size="large"
                  onClick={editToggle}
                >
                  Edit
                </Button>
              </Paper>
            </>
          )}
          {editOn && (
            <>
              <EditNote note={data.note} toggle={editToggle} />
            </>
          )}
        </>
      )}
    </>
  );
};
