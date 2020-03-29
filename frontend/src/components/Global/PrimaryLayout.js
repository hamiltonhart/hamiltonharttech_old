import React from "react";
import { Link } from "@reach/router";

import {
  makeStyles,
  Paper,
  AppBar,
  Grid,
  GridItem,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heading: {
    padding: theme.spacing(2),
    textTransform: "none"
  },
  mainBg: {
    position: "static",
    height: "100vh",
    width: "100vw",
    borderRadius: "0"
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
