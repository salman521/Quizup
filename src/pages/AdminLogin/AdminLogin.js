import React, { useState } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
    width: 120
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    fontSize: 13,
    color: Colors.TEXT_SECONDARY,
    backgroundColor: Colors.SECONDARY
  }
}));
const AdminLogin = ({ history, login, loading, setUserType, ...props }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const [password, setPassword] = useState("");
  return (
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
        Quiz Up
      </Typography>

      <div className="loginPage">
        <form>
          <Typography className="heading" variant="h5">
            Admin Panel Login
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
          <Grid style={{ paddingTop: 13 }}>
            <Button
              classes={classes}
              onClick={() => {
                if (email && password !== "") {
                  var data = { email, password };
                  login(data)
                    .then(res => {
                      setUserType("admin");
                      localStorage.setItem("id", res.value.data._id);
                      localStorage.setItem("userType", "admin");
                      history.push("/admindashboard");
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
          </Grid>
        </form>
        <div style={{ height: 30, paddingTop: 20 }}>
          {loading && <CircularProgress />}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
