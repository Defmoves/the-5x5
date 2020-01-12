import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "../card";

interface props {
  articles: string | object[];
}

export default function List({ articles }: props): JSX.Element {
  if (articles === "firstLoad")
    return (
      <Grid item xs={12}>
        Please select a Country
      </Grid>
    );
  if (articles === "loading")
    return (
      <Grid item xs={12}>
        Loading, please wait...
      </Grid>
    );
  if (articles === "error")
    return (
      <Grid item xs={12}>
        Cannot contact API at this time, please try later
      </Grid>
    );

  const lead = articles[0];
  const mainArticles =
    Array.isArray(articles) &&
    articles.filter((article, index) => article && index !== 0);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card article={lead} type="lead" />
      </Grid>
      {mainArticles &&
        mainArticles.map((article, index) => (
          <Grid item xs={6} key={index}>
            <Card article={article} type="main" />
          </Grid>
        ))}
    </Grid>
  );
}
