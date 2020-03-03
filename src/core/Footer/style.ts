import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Colors as COLOR } from "../../styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px 20px",
      color: COLOR.WHITE,
    },
    container: {
      maxWidth: theme.breakpoints.values.md,
      margin: "0px auto",
    },
    logo: {
      width: "100%",
    },
    socialMedia: {
      width: 60,
    },
  })
);
