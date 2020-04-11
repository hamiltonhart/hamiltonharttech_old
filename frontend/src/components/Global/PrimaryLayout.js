import React from "react";
import { Link } from "@reach/router";

import { makeStyles, Paper, Grid, Typography, Button } from "@material-ui/core";
import { HHTLogo } from "../../svg/HHTLogo";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(2),
    textTransform: "uppercase",
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: "600",
    color: theme.palette.primary.main,
  },
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
    margin: "10px 15px 25px 15px",
    borderRadius: "40px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.primary.main,
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
        {children}
      </Paper>
    </>
  );
};
