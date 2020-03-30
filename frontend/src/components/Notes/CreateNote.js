import React, { useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_NOTE, NOTES_QUERY } from "../../gql";

import {
  Container,
  TextField,
  FormControl,
  Button,
  Grid
} from "@material-ui/core";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");

  const [createNote, { error }] = useMutation(CREATE_NOTE);

  const handleSubmit = e => {
    e.preventDefault();
    createNote({
      variables: {
        title,
        bodyText
      },
      onCompleted: createCompleted()
    });
  };

  const createCompleted = () => {
    setTitle("");
    setBodyText("");
  };

  return (
    <Container>
      <Grid
        component="form"
        container
        spacing={6}
        direction="column"
        onSubmit={e => handleSubmit(e)}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Note Title"
              variant="outlined"
              value={title}
              onChange={e => setTitle(e.target.value)}
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
              onChange={e => setBodyText(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Create Note
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
