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

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CategoriesDropdown from "../../components/CategoriesDropdown";
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
const Home = ({
  history,
  getUser,
  userData,
  category,
  getQuestions,
  ...props
}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  useEffect(() => {
    getUser();
  }, [userData === null]);
  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Quiz Up</Typography>
          <Typography variant="h6" className={classes.title}>
            Quiz App
          </Typography>
          <Button
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
            color="inherit"
          >
            Logout
          </Button>
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
      </AppBar> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          height: "30vh",
          justifyContent: "space-around"
        }}
      >
        <Typography className="heading" variant="h4">
          {userData && userData.name}
        </Typography>
        <Typography style={{ color: Colors.TEXT_TERTIARY }} variant="h5">
          Please choose your desired quiz category
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: 150
        }}
      >
        <CategoriesDropdown />
        {category && (
          <Button
            onClick={() => {
              getQuestions(category).then(res => {
                history.push("/quiz");
              });
            }}
            disabled={true}
            customStyle={{
              backgroundColor: Colors.FOCUSED,
              minWidth: 140,
              borderRadius: 12,
              color: Colors.TEXT_PRIMARY,

              textAlign: "center"
            }}
            text="Start Quiz"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
