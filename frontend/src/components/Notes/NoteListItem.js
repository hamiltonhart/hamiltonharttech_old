import React from "react";
import { Link } from "@reach/router";
import {
  makeStyles,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "&:hover": {
      boxShadow: theme.shadows[9],
    },
  },
  title: {
    fontSize: "20px",
    marginBottom: theme.spacing(1),
    textDecoration: "none",
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
    // <Paper
    //   className={classes.root}
    //   elevation={6}
    //   component={Link}
    //   to={`/notes/${note.id}`}
    // >
    //   <Typography variant="h4">{note.title}</Typography>
    //   <Typography>{note.summary}</Typography>
    // </Paper>
    <Card className={classes.root} elevation={4}>
      <CardContent>
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
