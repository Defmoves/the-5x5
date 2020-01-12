import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      padding: theme.spacing(1)
    }
  })
);

interface props {
  handleClick: (country: string) => void;
  country: string;
}

export default function LatestNews({
  handleClick,
  country
}: props): JSX.Element {
  const classes = useStyles();

  return (
    <ul>
      <li className={classes.listItem}>
        <Typography gutterBottom variant="h6" component="h2">
          United Kingdom
        </Typography>
        <Switch
          checked={country === "gb"}
          onChange={() => {
            handleClick("gb");
          }}
          value="gb"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </li>
      <li className={classes.listItem}>
        <Typography gutterBottom variant="h6" component="h2">
          United States
        </Typography>
        <Switch
          checked={country === "us"}
          onChange={() => {
            handleClick("us");
          }}
          value="us"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </li>
      <li className={classes.listItem}>
        <Typography gutterBottom variant="h6" component="h2">
          France
        </Typography>
        <Switch
          checked={country === "fr"}
          onChange={() => {
            handleClick("fr");
          }}
          value="fr"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </li>
      <li className={classes.listItem}>
        <Typography gutterBottom variant="h6" component="h2">
          Australia
        </Typography>
        <Switch
          checked={country === "au"}
          onChange={() => {
            handleClick("au");
          }}
          value="au"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </li>
      <li className={classes.listItem}>
        <Typography gutterBottom variant="h6" component="h2">
          India
        </Typography>
        <Switch
          checked={country === "in"}
          onChange={() => {
            handleClick("in");
          }}
          value="in"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </li>
    </ul>
  );
}
