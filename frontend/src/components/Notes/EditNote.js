import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { UPDATE_NOTE } from "../../gql";

import {
  makeStyles,
  Container,
  TextField,
  FormControl,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  buttons: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

export const EditNote = ({ note, toggle }) => {
  const [title, setTitle] = useState(note.title);
  const [bodyText, setBodyText] = useState(note.bodyText);
  const [summary, setSummary] = useState(note.summary);

  const [updateNote, { error }] = useMutation(UPDATE_NOTE);

  const handleSubmit = e => {
    e.preventDefault();
    updateNote({
      variables: {
        id: note.id,
        title,
        bodyText,
        summary
      },
      onCompleted: updateCompleted()
    });
  };

  const updateCompleted = () => {
    toggle();
  };

  const classes = useStyles();

  return (
    <Container>
      <Grid
        component="form"
        container
        spacing={3}
        direction="column"
        onSubmit={e => handleSubmit(e)}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Note Title"
              variant="outlined"
              value={title}
              required
              onChange={e => setTitle(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Summary"
              variant="outlined"
              value={summary}
              required
              onChange={e => setSummary(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Note Body"
              variant="outlined"
              rows="20"
              multiline
              value={bodyText}
              required
              onChange={e => setBodyText(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.buttons}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Confirm Update
          </Button>
          <Button
            className={classes.buttons}
            variant="outlined"
            color="primary"
            size="large"
            onClick={toggle}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
