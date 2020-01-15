import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import fetch from "isomorphic-fetch";

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

type props = {
  articles: object[];
};

const App = ({ articles }: props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header} color={"secondary"}>
        <h1 className={classes.title}>The 5x5</h1>
      </AppBar>
      <Container fixed>
        <LatestNews initialArticles={articles} />
      </Container>
    </div>
  );
};

App.getInitialProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&apiKey=0852522f32884999b85fde10267fca5e&pageSize=5`
  );
  const json = await res.json();
  return { articles: json.articles };
};

export default App;
