import React from "react";
import { Header as CarinaHeader } from "../../dist/core";
import { useStyles } from "./style";
import { Button } from "@material-ui/core";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CarinaHeader>
        <Button>Menu</Button>
      </CarinaHeader>
    </div>
  );
}
