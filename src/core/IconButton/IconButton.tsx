import React from "react";
import { Grid, ButtonBase, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { GridDirection } from "@material-ui/core/Grid";

interface Props {
  children: any;
  icon: any;
  direction?: GridDirection;
}

const IconButton = (props: Props) => {
  const { children, icon, direction = "column", ...other } = props;
  const classes = useStyles();

  return (
    <ButtonBase className={classes.root} {...other}>
      <Grid
        container
        direction={direction}
        justify="center"
        alignItems="center"
      >
        {React.createElement(icon, { color: "primary" })}
        <Typography color="primary" variant="body1">
          {children}
        </Typography>
      </Grid>
    </ButtonBase>
  );
};

export default IconButton;
