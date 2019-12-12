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
            banana
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            It's a banana
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.chips}>
        <Chip label="Blue" color="secondary" />
        <Chip label="Orange" color="secondary" />
        <Chip label="Taco" color="secondary" />
        <Chip label="Canada" color="secondary" />
        <Chip
          className={classes.chip}
          label="Here is a lot of text in a chip to show what happens inside a card"
          color="secondary"
        />
        <Chip label="Banana" color="secondary" />
      </CardActions>
    </Card>
  );
}
