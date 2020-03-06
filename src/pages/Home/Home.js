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
  useEffect(() => {
    getUser();
    // alert("hi");
  }, [userData === null]);
  return (
    <div>
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
