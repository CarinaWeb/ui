import React from "react";
import { Footer as CarinaFooter } from "../../../dist/core";
import { Button, Grid } from "@material-ui/core";

export default function Footer() {
  return (
    <CarinaFooter>
      <Grid container spacing={2}>
        <Grid item>
          <Button color="primary" variant="contained">
            Contact Us
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            FAQ
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Terms of Service
          </Button>
        </Grid>
      </Grid>
    </CarinaFooter>
  );
}
