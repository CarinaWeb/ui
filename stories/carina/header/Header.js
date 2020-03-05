import React from "react";
import { Header as CarinaHeader } from "../../../dist/core";
import { Button } from "@material-ui/core";

export default function Header() {
  return (
    <CarinaHeader>
      <Button>Menu</Button>
    </CarinaHeader>
  );
}
