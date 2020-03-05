import React from "react";
import { Typography } from "@material-ui/core";
import { Card as CarinaCard } from "../../../dist/core";
import { createLorem } from "../constants";

export default function Card() {
  return (
    <CarinaCard>
      <Typography>{createLorem(400)}</Typography>
    </CarinaCard>
  );
}
