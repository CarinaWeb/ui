import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Primary Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Secondary Title Text
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.chips}>
        <Chip label="Orange" color="secondary" />
        <Chip label="Red" color="secondary" />
        <Chip label="Green" color="secondary" />
        <Chip label="Black" color="secondary" />
        <Chip
          className={classes.chip}
          label="Here is a lot of text in a chip to show what happens inside a card"
          color="secondary"
        />
        <Chip label="Yellow" color="secondary" />
        <Chip label="Gray" color="secondary" />
      </CardActions>
    </Card>
  );
}
