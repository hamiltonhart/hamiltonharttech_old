import React from "react";
import { Link } from "@reach/router";

import { makeStyles, Paper, Divider } from "@material-ui/core";
import { HHTLogo } from "../../svg/HHTLogo";

const useStyles = makeStyles((theme) => ({
  logo: {
    scale: "60%",
    "& *": {
      fill: theme.palette.primary.main,
    },
  },
  mainBg: {
    position: "relative",
    width: "100vw",
    borderRadius: "0",
    boxShadow: theme.shadows[0],
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: "0px 0px 15px 0px",
    padding: "10px 20px",
    backgroundColor: "transparent",
  },
  mainDiv: {
    maxWidth: theme.breakpoints.values.xl,
    marginLeft: "auto",
    marginRight: "auto",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const PrimaryLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.mainBg}>
        <div className={classes.appBar}>
          <Link to="/">
            <HHTLogo classes={classes.logo} />
          </Link>
        </div>
        <div className={classes.mainDiv}>{children}</div>
      </Paper>
    </>
  );
};
