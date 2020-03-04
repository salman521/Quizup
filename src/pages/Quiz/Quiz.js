import React, { useState, useEffect } from "react";
import {
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
import SideBar from "../../components/SideBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "../../components/Button";
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
const Quiz = ({ history, ...props }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Quiz Up</Typography>
          <Typography variant="h6" className={classes.title}>
            Quiz
          </Typography>

          <Button
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              minWidth: 140,
              borderRadius: 12,
              color: Colors.TEXT_SECONDARY,
              textAlign: "center"
            }}
            text="Logout"
          />
        </Toolbar>
      </AppBar>

      {/* <SideBar history={history} /> */}
    </div>
  );
};

export default Quiz;
