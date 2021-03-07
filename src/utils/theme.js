import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = ["CircularStd-Book", "Helvetica", "sans-serif"].join(",");

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  [defaultTheme.breakpoints.down("sm")]: {
    spacing: 8,
  },
  [defaultTheme.breakpoints.up("md")]: {
    spacing: 10,
  },
  palette: {
    background: {
      paper: "#79E2F2",
      default: "#fff",
    },
    primary: {
      main: "#7545b0",
    },
    secondary: {
      main: "#fff",
    },
    action: {
      disabledBackground: "rgb(186,162,216)",
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
      },
      elevation4: {
        boxShadow: "none",
        borderBottom: "1px solid #e5e5e5",
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTab: {
      root: {
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        textTransform: "none",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        borderRadius: 100,
        boxShadow: "none",
      },
      outlined: {
        borderRadius: 100,
      },
    },
    MuiTypography: {
      h1: {
        fontFamily: "CircularStd-Bold",
        fontSize: "38px",
        "@media (max-width:600px)": {
          fontSize: "32px",
        },
        fontWeight: "bold",
        lineHeight: 1.21,
        color: "#141c3a",
      },
      h2: {
        fontFamily: "CircularStd-Bold",
        fontSize: "32px",
        "@media (max-width:600px)": {
          fontSize: "26px",
        },
        fontWeight: "bold",
        lineHeight: 1.25,
        color: "#141c3a",
      },
      h3: {
        fontFamily: "CircularStd-Bold",
        fontSize: "26px",
        "@media (max-width:600px)": {
          fontSize: "20px",
        },
        fontWeight: "bold",
        lineHeight: 1.27,
        color: "#141c3a",
      },
      h4: {
        fontFamily: "CircularStd-Medium",
        fontSize: "20px",
        "@media (max-width:600px)": {
          fontSize: "18px",
        },
        fontWeight: 500,
        lineHeight: 1.35,
        color: "#141c3a",
      },
      h5: {
        fontFamily: "CircularStd-Medium",
        fontSize: "17px",
        "@media (max-width:600px)": {
          fontSize: "14px",
        },
        fontWeight: 500,
        lineHeight: 1.41,
        color: "#141c3a",
      },
      subtitle1: {
        fontFamily: "CircularStd-Book",
        fontSize: "22px",
        "@media (max-width:600px)": {
          fontSize: "16px",
        },
        fontWeight: "normal",
        lineHeight: 1.36,
        color: "#5a6075",
      },
      body1: {
        fontFamily: "CircularStd-Book",
        fontSize: "20px",
        "@media (max-width:600px)": {
          fontSize: "17px",
        },
        fontWeight: "normal",
        lineHeight: 1.35,
        color: "#5a6075",
      },
      body2: {
        fontFamily: "CircularStd-Book",
        fontSize: "17px",
        "@media (max-width:600px)": {
          fontSize: "16px",
        },
        fontWeight: "normal",
        lineHeight: 1.41,
        color: "#5a6075",
      },
      caption: {
        fontFamily: "CircularStd-Book",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: 1.43,
        color: "#5a6075",
      },
    },
  },
});

export { theme };
