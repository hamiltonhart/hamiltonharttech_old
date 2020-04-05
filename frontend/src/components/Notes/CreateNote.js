import React, { useState } from "react";
import { navigate } from "@reach/router";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_NOTE, NOTES_QUERY } from "../../gql";

import {
  Container,
  TextField,
  FormControl,
  Button,
  Grid,
} from "@material-ui/core";

export const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [summary, setSummary] = useState("");

  const [createNote, { error }] = useMutation(CREATE_NOTE);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote({
      variables: {
        title,
        bodyText,
        summary,
      },
      refetchQueries: [{ query: NOTES_QUERY }],
      onCompleted: createCompleted(),
    });
  };

  const createCompleted = () => {
    setTitle("");
    setBodyText("");
    setSummary("");
    navigate("/");
  };

  return (
    <Container>
      <Grid
        component="form"
        container
        spacing={3}
        direction="column"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Note Title"
              variant="outlined"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setSummary(e.target.value)}
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
              onChange={(e) => setBodyText(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Note
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
