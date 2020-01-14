import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

import Card from "../card";

interface props {
  articles: (object | string)[];
}

export default function List({ articles }: props): JSX.Element {
  const internalMessage = typeof articles[0] === "string" ? articles[0] : null;
  const loading = !articles.length ? (
    <LinearProgress color="secondary" />
  ) : null;

  if (internalMessage || loading)
    return (
      <Grid item xs={12}>
        {internalMessage || loading}
      </Grid>
    );

  const lead = articles[0];
  const mainArticles = articles.filter(
    (article, index) => article && index !== 0
  );

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
