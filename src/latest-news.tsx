import React, { FunctionComponent, useState, useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
require("es6-promise").polyfill();
import fetch from "isomorphic-fetch";

import Card from "./card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    listItem: {
      padding: theme.spacing(1)
    }
  })
);

interface buttonProps {
  onClick?: () => void;
  name?: string;
}

// TODO: replace this with a more elegant interface
const Button: FunctionComponent<buttonProps> = ({ onClick, name }) => (
  <button onClick={onClick}>{name}</button>
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
  const [country, setCountry] = useState("gb");
  const [articles, setArticles] = useState([]);
  const handleClick = useCallback(
    async country => {
      setCountry(country);
      const articles = await fetchArticlesWith(country);
      setArticles(articles);
    },
    [country]
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul>
            <li className={classes.listItem}>
              <Button name="United Kingdom" onClick={() => handleClick("gb")} />
            </li>
            <li className={classes.listItem}>
              <Button name="United States" onClick={() => handleClick("us")} />
            </li>
            <li className={classes.listItem} onClick={() => handleClick("fr")}>
              <Button name="France" />
            </li>
            <li className={classes.listItem} onClick={() => handleClick("au")}>
              <Button name="Australia" />
            </li>
            <li className={classes.listItem}>
              <Button name="India" onClick={() => handleClick("in")} />
            </li>
          </ul>
        </Grid>
        <Grid item xs={9}>
          <Grid container item>
            {articles.length &&
              articles.map((article, index) => (
                <Grid item xs={6} key={index}>
                  <Card article={article} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
