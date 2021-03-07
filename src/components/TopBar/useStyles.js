import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(7.5),
      paddingRight: theme.spacing(7.5),
    },
    maxHeight: 72,
  },
  circularImage: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
  },
  name: {
    margin: "0 12px"
  },
  link: {
    flexGrow: 1,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));
