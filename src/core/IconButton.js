import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";
import { Grid } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: 15,
    overflow: "visible", // Explicitly set the default value to solve a bug on IE 11.
    color: theme.palette.action.active,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      backgroundColor: fade(
        theme.palette.action.active,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&$disabled": {
      backgroundColor: "transparent",
      color: theme.palette.action.disabled,
    },
  },
}));

const IconButton = ({
  children,
  color = "primary",
  icon,
  placement = "bottom",
  ...other
}) => {
  const classes = useStyles();

  const DIRECTION = {
    top: "column-reverse",
    bottom: "column",
    right: "row",
    left: "row-reverse",
  };

  return (
    <ButtonBase className={classes.root} {...other}>
      <Grid
        container
        direction={DIRECTION[placement]}
        justify="center"
        alignItems="center"
      >
        {React.createElement(icon, { color: color })}
        <Typography color={color} variant="body1">
          {children}
        </Typography>
      </Grid>
    </ButtonBase>
  );
};

IconButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the component.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "action",
    "error",
    "disabled",
  ]),
  /**
   * The icon of the component.
   */
  icon: PropTypes.elementType.isRequired,
  /**
   * The placement of the text.
   */
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};

export default IconButton;