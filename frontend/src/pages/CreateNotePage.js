import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "../index.js";

import { Typography } from "@material-ui/core";

import { CreateNote } from "../components/Notes";
import { Error } from "../components/Global";

export const CreateNotePage = () => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Create Note
      </Typography>
      {error && <Error errorMessage={error.message} />}
      {data && data.isLoggedIn ? (
        <CreateNote />
      ) : (
        <div>
          <Typography variant="h4" align="center">
            George, you have to log in.
          </Typography>
          <Typography variant="h6" align="center">
            If you're not George, back off!
          </Typography>
        </div>
      )}
    </>
  );
};
