import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Colors as COLOR } from "src/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      border: `solid 1px ${COLOR.GRAY40}`,
      backgroundColor: COLOR.WHITE,
      padding: 16,
    },
  })
);
