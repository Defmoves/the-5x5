import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: { borderRadius: 0, borderBottom: "1px solid #000" },
  lead: {
    height: 280,
    backgroundPosition: "top"
  },
  main: {
    height: 140,
    backgroundPosition: "top"
  }
});

type articleType = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

interface props {
  article: articleType | any;
  type: string;
}

export default function MediaCard({
  article: { title, description, urlToImage, url },
  type
}: props) {
  const classes = useStyles();
  const mediaClass = type === "lead" ? classes.lead : classes.main;

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={mediaClass}
          image={urlToImage || "http://placekitten.com/g/200/300"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank">
            Read more
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
