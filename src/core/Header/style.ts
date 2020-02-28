import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import COLOR from "src/styles/Colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: COLOR.WHITE,
      paddingTop: 15,
      paddingBottom: 15,
      borderBottom: `1px solid ${COLOR.GRAY40}`
    },
    container: {
      maxWidth: theme.breakpoints.values.md,
      margin: "0 auto"
    },
    logo: {
      width: 122,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 10,
        height: 48
      }
    }
  })
);
