import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import * as Colors from "../../styles/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import CatDropdown from "../../components/CatDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1

    width: 120,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    fontSize: 13,
    color: Colors.TEXT_SECONDARY,
    backgroundColor: Colors.SECONDARY,
  },
}));
const Signup = ({ history, signUp, loading, ...props }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [shopName, setShopName] = useState();
  const [shopCategory, setShopCategory] = useState();
  const classes = useStyles();

  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignSelf: "center",
        // height: "80vh",
        // justifyContent: "space-around"
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        backgroundColor: Colors.PRIMARY,
        // height: "80vh",
        padding: 30,
        // border: '1px solid red'
        // justifyContent: "space-evenly"
      }}
    >
      <Typography style={{ marginBottom: 30 }} className="heading" variant="h4">
        Smart Shopping Bot
      </Typography>

      <div className="loginPage">
        <form>
          <Typography className="heading" variant="h5">
            Sign Up
          </Typography>
          <div className="data-Input">
            <TextField
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              style={{ width: 320 }}
              id="standard-required"
              label="Enter Full Name"
              margin="normal"
            />
          </div>
          <div className="data-Input">
            <TextField
              type="text"
              value={shopName}
              onChange={(e) => {
                setShopName(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              style={{ width: 320 }}
              id="standard-required"
              label="Enter Shop Name"
              margin="normal"
            />
          </div>
          <div className="data-Input" style={{ paddingTop: 10 }}>
            <CatDropdown setCategory={setShopCategory} />
          </div>
          <div className="data-Input">
            <TextField
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
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
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
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
              className="button-Signup"
              onClick={() => {
                if (email && password && name !== "") {
                  var data = { email, password, name, shopName, shopCategory };
                  console.log(data, "ss");
                  signUp(data)
                    .then((res) => {
                      history.push("/login");
                    })
                    .catch((err) => {
                      alert(err.response.data.message);
                    });
                } else {
                  alert("Please fill all fields");
                }
              }}
            >
              Sign Up
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

export default Signup;
