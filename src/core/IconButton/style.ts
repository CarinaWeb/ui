import {
  makeStyles,
  createStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
