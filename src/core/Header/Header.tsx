import React from "react";
import { useStyles } from "./style";
import { LOGO_PRIMARY } from "src/constants/images";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  children?: any;
  logoPath?: any;
}

const Header = (props: Props) => {
  const { children, logoPath } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Link to={logoPath || "/"}>
          <img src={LOGO_PRIMARY} alt="logo" className={classes.logo} />
        </Link>
        {children}
      </Grid>
    </Box>
  );
};

export default Header;
