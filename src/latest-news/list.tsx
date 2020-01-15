import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

import Card from "../card";

type props = {
  articles: (object | string)[];
  width: Breakpoint;
};

const List = ({ articles, width }: props): JSX.Element => {
  const internalMessage = typeof articles[0] === "string" ? articles[0] : null;
  const loading = !articles.length ? (
    <LinearProgress color="secondary" />
  ) : null;

  if (loading)
    return (
      <Grid item xs={12}>
        {loading}
      </Grid>
    );

  if (internalMessage)
    return (
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h2"
          align={width === "xs" || width === "sm" ? "center" : "left"}
        >
          {internalMessage}
        </Typography>
      </Grid>
    );

  const lead = articles[0];
  const mainArticles = articles.filter(
    (article, index) => article && index !== 0
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} spacing={2}>
        <Card article={lead} type="lead" />
      </Grid>
      {mainArticles &&
        mainArticles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card article={article} type="main" />
          </Grid>
        ))}
    </Grid>
  );
};

export default withWidth()(List);
