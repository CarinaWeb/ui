import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
