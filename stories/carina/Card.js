import React from "react";
import { Card as CarinaCard } from "../../dist/core";
import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import { lorem } from "./constants";

export default function Card() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CarinaCard>
        <Typography>{lorem(400)}</Typography>
      </CarinaCard>
    </div>
  );
}
