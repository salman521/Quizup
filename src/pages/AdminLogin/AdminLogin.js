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
        height: "70vh",
        padding: 90
        // justifyContent: "space-evenly"
      }}
    >
      <Typography style={{ marginBottom: 40 }} className="heading" variant="h4">
        Smart Shopping Bot
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
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12
                }
              }}
              style={{ width: 320 }}
              name="email"
              id="standard-required"
              label="Username"
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
              label="Password"
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
                  if (email === 'admin' && password === 'admin') {
                    setUserType("admin");
                    localStorage.setItem("id", '1');
                    localStorage.setItem("userType", "admin");
                    history.push("/admindashboard");
                  }
                  // login(data)
                  //   .then(res => {
                  //     setUserType("admin");
                  //     localStorage.setItem("id", res.value.data._id);
                  //     localStorage.setItem("userType", "admin");
                  //     history.push("/admindashboard");
                  //   })
                  //   .catch(err => {
                  //     alert("Email or Password incorrect");
                  //   });
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
        <div style={{ height: 10, paddingTop: 20 }}>
          {loading && <CircularProgress size={20} />}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
