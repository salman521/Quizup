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

const AdminLogin = ({ history, login, ...props }) => {
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
          <Grid>
            <Button
              onClick={() => {
                var data = { email, password };
                login(data)
                  .then(res => {
                    localStorage.setItem("id", res.value.data._id);
                    history.push("/admindashboard");
                  })
                  .catch(err => {
                    alert("Email or Password incorrect");
                  });
              }}
              className=" button-Login"
            >
              Login
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
