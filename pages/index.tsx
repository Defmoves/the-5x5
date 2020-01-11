import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import LatestNews from "../src/latest-news";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    header: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
      textAlign: "center"
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          The 5x5
        </Typography>
      </AppBar>
      <Container fixed>
        <LatestNews />
      </Container>
    </div>
  );
}
