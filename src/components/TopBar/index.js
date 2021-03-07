import { AppBar, Button, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./useStyles";
import ProfileImage from '../../assets/profile.png';
import * as ROUTES from '../../utils/routes';

const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar disableGutters>
        <Link to={ROUTES.HOME} className={classes.link}>
        <img src={ProfileImage} alt='pratiyush' className={classes.circularImage} />
        <Typography variant="h2" className={classes.name}>pratiyush chaitnya</Typography>
        </Link>
       <div className={classes.menu}>
         <MenuItem>
         <Typography variant='body1'>
           Home
         </Typography>
         </MenuItem>
         <MenuItem>
         <Typography variant='body1'>
           About
         </Typography>
         </MenuItem>
         <MenuItem>
         <Typography variant='body1'>
           Work
         </Typography>
         </MenuItem>
       </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
