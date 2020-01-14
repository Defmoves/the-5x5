import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {
  UnitedKingdom,
  UnitedStates,
  France,
  Australia,
  India
} from "react-flat-flags";

const countries = [
  { id: "gb", name: "United Kingdom", flag: UnitedKingdom },
  { id: "us", name: "United States", flag: UnitedStates },
  { id: "fr", name: "France", flag: France },
  { id: "au", name: "Australia", flag: Australia },
  { id: "in", name: "India", flag: India }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: "flex",
      flexDirection: "column"
    },
    row: {
      display: "flex",
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2),
      justifyContent: "space-between",
      flexDirection: "row",
      borderBottom: `1px solid`
    },
    flag: {},
    name: {},
    switch: { width: 60 }
  })
);

interface props {
  handleClick: (selected: string) => void;
  selected: string;
}

export default function Select({ handleClick, selected }: props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {countries.map((country, index) => {
        return (
          <div className={classes.row} key={index}>
            <div className={classes.flag}>
              <country.flag alt={`${country.name} flag`} />
            </div>
            <div className={classes.name}>
              <Typography gutterBottom variant="subtitle1" component="h2">
                {country.name}
              </Typography>
            </div>
            <div className={classes.switch}>
              <Switch
                data-testid={`switch-${country.id}`}
                checked={selected === country.id}
                onChange={() => {
                  handleClick(country.id);
                }}
                value={country.id}
                inputProps={{
                  "aria-label": `select ${country.name}`
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
