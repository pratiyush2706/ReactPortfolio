import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./useStyles";
import ProfileImage from "../../assets/profile.png";
import * as ROUTES from "../../utils/routes";

const TopBar = () => {
  const classes = useStyles();
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  console.log({ isXs });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["home", "About", "Work"];
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar disableGutters>
        <Link to={ROUTES.HOME} className={classes.link}>
          <img
            src={ProfileImage}
            alt="pratiyush"
            className={classes.circularImage}
          />
          <Typography variant="h2" className={classes.name}>
            pratiyush chaitnya
          </Typography>
        </Link>
        {isXs ? (
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <div className={classes.menu}>
            <MenuItem>
              <Typography variant="body1">Home</Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="body1">About</Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="body1">Work</Typography>
            </MenuItem>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
