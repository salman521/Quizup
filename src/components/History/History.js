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
import UsersDropdown from "../../components/UsersDropdown";
import Button from "../../components/Button";
import QuizHistoryBox from "../QuizHistoryBox";

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
const History = ({
  history,
  getUser,
  userData,
  category,
  getUserQuizes,
  getQuestions,
  activeCategoryId,
  userQuizzes,
  ...props
}) => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  useEffect(() => {
    // getUser()
    if (userId) {
      getUserQuizes(userId);
    }
  }, [userId]);
  console.log(userQuizzes);
  return (
    <div style={{ paddingTop: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 25
          // height: 150
        }}
      >
        <UsersDropdown setUserId={setUserId} />
      </div>

      <div>
        {userQuizzes &&
          userQuizzes.map((quiz, index) => {
            if (quiz.category._id === activeCategoryId) {
              return <QuizHistoryBox quiz={quiz} index={index + 1} />;
            }
          })}
      </div>
    </div>
  );
};

export default History;
