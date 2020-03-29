import React, { useState } from "react";

import { TextField, Button, FormControl } from "@material-ui/core";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <FormControl>
        <TextField label="Username" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField type="password" label="Password" variant="outlined" />
      </FormControl>
      <Button color="primary" variant="contained">
        Login
      </Button>
    </form>
  );
};
