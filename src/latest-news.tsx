import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul>
            <li className={classes.listItem}>
              <Button name="United Kingdom" />
            </li>
            <li className={classes.listItem}>
              <Button name="United States" />
            </li>
            <li className={classes.listItem}>
              <Button name="France" />
            </li>
            <li className={classes.listItem}>
              <Button name="Australia" />
            </li>
            <li className={classes.listItem}>
              <Button name="India" />
            </li>
          </ul>
        </Grid>
        <Grid item xs={9}>
          Latest News
        </Grid>
      </Grid>
    </div>
  );
}
