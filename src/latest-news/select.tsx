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
    list: {
      display: "flex",
      flexDirection: "column"
    },
    row: {
      display: "flex",
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(0),
        paddingBottom: theme.spacing(0)
      },
      justifyContent: "space-between",
      flexDirection: "row",
      borderBottom: `1px solid`
    },
    country: {
      paddingTop: theme.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    switch: { width: 60 }
  })
);

type props = {
  handleClick: (selected: string) => void;
  selected: string;
};

export default function Select({ handleClick, selected }: props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {countries.map((country, index) => {
        return (
          <div className={classes.row} key={index}>
            <div className={classes.country}>
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
