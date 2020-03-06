import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
    width: 100
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    fontSize: 11,
    color: Colors.TEXT_SECONDARY,
    backgroundColor: Colors.SECONDARY
  }
}));
const Login = ({ history, login, setUserType, loading, ...props }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        height: "70vh",
        padding: 90
      }}
    >
      <Typography style={{ marginBottom: 40 }} className="heading" variant="h4">
        Quiz App
      </Typography>

      <div className="loginPage">
        <form>
          <Typography className="heading" variant="h5">
            Login
          </Typography>
          <div className="data-Input">
            <TextField
              type="text"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14
                }
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12
                }
              }}
              style={{ width: 320 }}
              name="email"
              id="standard-required"
              label="Enter Email"
              margin="normal"
            />
          </div>
          <div className="data-Input">
            <TextField
              type="password"
              value={password}
              style={{ width: 320 }}
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14
                }
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12
                }
              }}
              onChange={e => setPassword(e.target.value)}
              required
              fullWidth
              name="password"
              id="standard-required"
              label="Enter Password"
              margin="normal"
            />
          </div>
          {/* <Button>Forgot Password?</Button> */}
          <div
            style={{
              // border: "2px solid red",
              display: "flex",
              paddingTop: 10,
              justifyContent: "space-evenly"
            }}
          >
            <Button
              classes={classes}
              onClick={() => {
                if (email && password !== "") {
                  var data = { email, password };
                  login(data)
                    .then(res => {
                      setUserType("user");
                      localStorage.setItem("id", res.value.data._id);
                      localStorage.setItem("userType", "user");
                      history.push("/home");
                    })
                    .catch(err => {
                      alert("Email or Password incorrect");
                    });
                } else {
                  alert(
                    email === ""
                      ? "Please Enter Email"
                      : "Please Enter Password"
                  );
                }
              }}
              className=" button-Login"
            >
              Login
            </Button>
            <Button
              classes={classes}
              onClick={() => {
                history.push("/signup");
              }}
              className=" button-Signup"
            >
              Sign Up
            </Button>

            <Button
              classes={classes}
              onClick={() => {
                history.push("/adminlogin");
              }}
              className=" button-Login"
            >
              Admin Panel
            </Button>
          </div>
          <div style={{ height: 10, paddingTop: 20 }}>
            {loading && <CircularProgress size={20} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
