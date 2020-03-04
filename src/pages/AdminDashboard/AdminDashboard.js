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
import SideBar from "../../components/SideBar";
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
const AdminDashboard = ({ history, getAdmin, adminData, ...props }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  useEffect(() => {
    getAdmin();
  }, [adminData === null]);
  return (
    <div>
      {/* <AppBar>
        <Toolbar>
          <Typography variant="h6">Quiz Up</Typography>
          <Typography variant="h6" className={classes.title}>
            Admin Dashboard
          </Typography>

          <Button
            onClick={() => {
              console.log(history, "sssss");
              localStorage.clear();
              history.push("/login");
            }}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar> */}

      <SideBar history={history} />
    </div>
  );
};

export default AdminDashboard;
