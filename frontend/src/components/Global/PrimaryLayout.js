import React from "react";
import { Link } from "@reach/router";

import { makeStyles, Paper, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heading: {
    padding: theme.spacing(2),
    textTransform: "none"
  },
  mainBg: {
    position: "relative",
    width: "100vw",
    borderRadius: "0",
    boxShadow: theme.shadows[0]
  },
  appBar: {
    position: "relative"
  }
}));

export const PrimaryLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.mainBg}>
        <Grid className={classes.appBar}>
          <Button className={classes.heading} component={Link} to="/">
            <Typography variant="h5">Hamilton Hart</Typography>
          </Button>
        </Grid>
        {children}
      </Paper>
    </>
  );
};
