import React from "react";
import { Footer as CarinaFooter } from "../../dist/core";
import { useStyles } from "./style";
import { Button, Grid } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
}
