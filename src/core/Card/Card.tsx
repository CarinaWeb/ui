import React from "react";
import { useStyles } from "./style";
import { Box } from "@material-ui/core";

interface Props {
  children: any;
  className?: string;
}

const Card = (props: Props) => {
  const { children, className = "" } = props;
  const classes = useStyles();

  const cardClasses = [classes.root, className];

  return <Box className={cardClasses.join(" ")}>{children}</Box>;
};

export default Card;
