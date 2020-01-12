import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

interface props {
  handleClick: (country: string) => void;
}

export default function Select({ handleClick }: props): JSX.Element {
  const classes = useStyles();
  return (
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
  );
}
