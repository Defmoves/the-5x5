import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";

import LatestNews from "../src/latest-news/";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    header: {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2)
      },
      textAlign: "center",
      fontFamily: "'Playfair Display SC', serif",
      fontWeight: 700
    },
    title: {
      fontSize: 28,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20
      },
      flexGrow: 1
    }
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header} color={"secondary"}>
        <h1 className={classes.title}>The 5x5</h1>
      </AppBar>
      <Container fixed>
        <LatestNews />
      </Container>
    </div>
  );
}
