import React from "react";
import { select, text, radios } from "@storybook/addon-knobs";
import { makeStyles } from "@material-ui/core/styles";
import IconLabelButton from "../../components/IconLabelButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AltIconLabelButtons() {
  const classes = useStyles();
  const positionValue = radios(
    "Label position",
    ["top", "bottom", "left", "right"],
    "bottom"
  );
  const labelValue = text("Label value", "Delete");
  const color = select(
    "Color",
    ["default", "primary", "secondary", "action", "error"],
    "primary"
  );

  return (
    <div className={classes.root}>
      <IconLabelButton
        color={color}
        icon={<DeleteIcon />}
        placement={positionValue}
      >
        {labelValue}
      </IconLabelButton>
    </div>
  );
}
