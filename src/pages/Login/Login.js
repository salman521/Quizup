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

const Login = ({ history, login, setUserType, ...props }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          <Grid>
            <Button
              onClick={() => {
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
              }}
              className=" button-Login"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                history.push("/signup");
              }}
              className=" button-Signup"
            >
              Sign Up
            </Button>

            <Button
              onClick={() => {
                history.push("/adminlogin");
              }}
              className=" button-Login"
            >
              Admin Panel
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Login;
