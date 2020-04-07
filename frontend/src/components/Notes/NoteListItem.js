import React from "react";
import { Link } from "@reach/router";
import {
  makeStyles,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "175px",
    "&:hover": {
      boxShadow: theme.shadows[9],
    },
  },
  title: {
    fontSize: "20px",
    marginBottom: theme.spacing(1),
    textDecoration: "none",
  },
  content: {
    height: "100px",
    overflow: "hidden",
  },
  cardBody: {
    fontSize: "14px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

// const ReactMarkdown = require("react-markdown");

export const NoteListItem = ({ note }) => {
  const classes = useStyles();

  return (
    <Card item className={classes.root} elevation={4}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="primary"
          component={Link}
          to={`/notes/${note.id}`}
        >
          {note.title}
        </Typography>
        <Typography className={classes.cardBody} color="textSecondary">
          {note.summary}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" component={Link} to={`/notes/${note.id}`}>
          See Note <ArrowForwardIosIcon fontSize="inherit" color="primary" />
        </Button>
      </CardActions>
    </Card>
  );
};
