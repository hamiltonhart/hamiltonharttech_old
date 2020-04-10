import React, { useState } from "react";

import {
  makeStyles,
  Grid,
  Container,
  TextField,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";

import { LOGIN_MUT } from "../../gql";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { navigate } from "@reach/router";

import { Error } from "../Global";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    boxShadow: theme.shadows[3],
  },
  heading: {
    textTransform: "uppercase",
  },
}));

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [tokenAuth, { error }] = useMutation(LOGIN_MUT);
  const client = useApolloClient();

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await tokenAuth({
      variables: { username, password },
    });
    localStorage.setItem("authToken", res.data.tokenAuth.token);
    client.writeData({ data: { isLoggedIn: true } });
    navigate("/");
  };

  const loginCompleted = () => {
    setUsername("");
    setPassword("");
    navigate("/");
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Grid
        component="form"
        container
        spacing={1}
        direction="column"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Grid item>
          <Typography
            className={classes.heading}
            variant="h3"
            align="center"
            gutterBottom
          >
            Login
          </Typography>
        </Grid>
        {error && <Error errorMessage={error.message} />}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
