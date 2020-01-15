import React, { useState, useCallback } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
require("es6-promise").polyfill();
import fetch from "isomorphic-fetch";

import Select from "./select";
import List from "./list";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(0)
    }
  })
);

export const errorMessage = "Cannot contact API at this time, please try later";
export const welcomeMessage = "Please select a Country.";

const fetchArticlesWith = async (country: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0852522f32884999b85fde10267fca5e&pageSize=5`
  );
  if (response.status >= 400) return [errorMessage];
  const json = await response.json();
  return json.articles;
};

const LatestNews = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [articles, setArticles] = useState([welcomeMessage]);
  const handleClick = useCallback(
    async country => {
      setCountry(country);
      setArticles([]);
      const articles = await fetchArticlesWith(country);
      setArticles(articles);
    },
    [country]
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Select handleClick={handleClick} selected={country} />
        </Grid>
        <Grid item md={9} xs={12}>
          <List articles={articles} />
        </Grid>
      </Grid>
    </div>
  );
};

export default LatestNews;
