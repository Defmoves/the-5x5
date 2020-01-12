import React, { useState, useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
require("es6-promise").polyfill();
import fetch from "isomorphic-fetch";

import Select from "./select";
import List from "./list";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    }
  })
);

const fetchArticlesWith = async (country: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0852522f32884999b85fde10267fca5e&pageSize=5`
  );
  if (response.status >= 400) return "error";
  const json = await response.json();
  return json.articles;
};

export default function LatestNews() {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [articles, setArticles] = useState("firstLoad");
  const handleClick = useCallback(
    async country => {
      setCountry(country);
      setArticles("loading");
      const articles = await fetchArticlesWith(country);
      setArticles(articles);
    },
    [country]
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Select handleClick={handleClick} />
        </Grid>
        <Grid item xs={9}>
          <List articles={articles} />
        </Grid>
      </Grid>
    </div>
  );
}
