import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useStyles } from "./style";
import {
  LOGO_SECONDARY,
  LOGO_FACEBOOK,
  LOGO_LINKEDIN
} from "src/constants/images";

interface Props {
  children?: any;
  bgcolor?: string;
}

export default (props: Props) => {
  const { bgcolor = grey[800], children = "" } = props;
  const classes = useStyles();

  const LOGO_AND_COPYRIGHT = (
    <Fragment>
      <img src={LOGO_SECONDARY} alt="Carina logo" className={classes.logo} />
      <Typography variant="body2">
        &copy; 2020 Carina. All rights reserved.
      </Typography>
    </Fragment>
  );

  return (
    <Box bgcolor={bgcolor} className={classes.root}>
      <Box className={classes.container}>
        <Grid container justify="space-between" spacing={4}>
          <Hidden smDown>
            <Grid item md={4}>
              {LOGO_AND_COPYRIGHT}
            </Grid>
          </Hidden>
          <Grid item xs={12} md={5}>
            <Typography variant="h6">About Carina</Typography>
            <Typography variant="body1" gutterBottom>
              Carina is an online platform for home care workers to find work
              and support.
            </Typography>
            {children}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Stay in Touch</Typography>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <a
                  href="https://www.facebook.com/carinahomecare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LOGO_FACEBOOK}
                    alt="Facebook"
                    className={classes.socialMedia}
                  />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/company/carina-care/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LOGO_LINKEDIN}
                    alt="LinkedIn"
                    className={classes.socialMedia}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Divider style={{ backgroundColor: "#bdbdbd" }} />
            </Grid>
            <Grid item xs={7}>
              {LOGO_AND_COPYRIGHT}
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </Box>
  );
};
