import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const countries = [
  { id: "gb", name: "United Kingdom" },
  { id: "us", name: "United States" },
  { id: "fr", name: "France" },
  { id: "au", name: "Australia" },
  { id: "in", name: "India" }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      padding: theme.spacing(1)
    }
  })
);

interface props {
  handleClick: (selected: string) => void;
  selected: string;
}

export default function Select({ handleClick, selected }: props): JSX.Element {
  const classes = useStyles();

  return (
    <ul>
      {countries.map(country => {
        return (
          <li className={classes.listItem}>
            <Typography gutterBottom variant="h6" component="h2">
              {country.name}
            </Typography>
            <Switch
              checked={selected === country.id}
              onChange={() => {
                handleClick(country.id);
              }}
              value={country.id}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </li>
        );
      })}
    </ul>
  );
}
