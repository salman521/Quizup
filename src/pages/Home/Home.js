import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider
} from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const Home = ({ history, getUser, userData, ...props }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  useEffect(() => {
    getUser();
  }, [userData === null]);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          height: "80vh",
          justifyContent: "space-around"
        }}
      >
        <Typography className="heading" variant="h2">
          Welcome To Quiz App Dashboard
        </Typography>
        <Typography className="heading" variant="h5">
          {userData.name}
        </Typography>
      </div>
    </div>
  );
};

export default Home;
