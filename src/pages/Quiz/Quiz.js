import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  Button
} from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SideBar from "../../components/SideBar";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuIcon from "@material-ui/icons/Menu";
// import Button from "../../components/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    color: Colors.TEXT_TERTIARY,
    backgroundColor: Colors.SECONDARY
  }
}));
const Quiz = ({ history, quizQuestions, setMarks, ...props }) => {
  // const [marks, setMarks] = useState(0);

  const [indexValue, setIndexValue] = useState("-1");
  const [questionIndex, setQuestionIndex] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    if (quizQuestions.length > 0) {
      setQuestionIndex(0);
    } else {
      history.push("/home");
    }
  }, [quizQuestions]);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Quiz Up</Typography>
          <Typography variant="h6" className={classes.title}>
            Quiz
          </Typography>

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
      </AppBar>
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
          <form style={{ height: 300 }}>
            <Typography className="heading" variant="h5">
              Question
            </Typography>
            <div
              style={{
                marginTop: 15,
                width: 500,
                textAlign: "left",
                height: 60,
                display: "flex",
                alignItems: "center"
              }}
            >
              <span style={{ marginRight: 5 }}>{questionIndex + 1 + ") "}</span>
              <span>
                {quizQuestions.length > 0 &&
                  quizQuestions[questionIndex].question}
              </span>
            </div>
            <div className="data-Input">
              <div>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  style={{
                    // border: "1px solid green",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 15,
                    width: 400
                  }}
                  color="primary"
                  value={indexValue}
                  onChange={e => {
                    setIndexValue(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="0"
                    classes={classes}
                    color="primary"
                    control={<Radio />}
                    label={
                      quizQuestions.length > 0 &&
                      quizQuestions[questionIndex].answers[0].option
                    }
                  />
                  <FormControlLabel
                    value="1"
                    classes={classes}
                    control={<Radio />}
                    label={
                      quizQuestions.length > 0 &&
                      quizQuestions[questionIndex].answers[1].option
                    }
                  />
                  <FormControlLabel
                    value="2"
                    classes={classes}
                    control={<Radio />}
                    label={
                      quizQuestions.length > 0 &&
                      quizQuestions[questionIndex].answers[2].option
                    }
                  />
                  <FormControlLabel
                    value="3"
                    classes={classes}
                    control={<Radio />}
                    label={
                      quizQuestions.length > 0 &&
                      quizQuestions[questionIndex].answers[3].option
                    }
                  />
                </RadioGroup>
              </div>
            </div>
            {/* <Button>Forgot Password?</Button> */}
            <Grid>
              <Button
                onClick={() => {
                  if (
                    quizQuestions[questionIndex].answerindex.toString() ===
                    indexValue
                  ) {
                    setMarks(10);
                    if (questionIndex === quizQuestions.length - 1) {
                      alert("done");
                    } else {
                      // console.log(marks, "sss");
                      setIndexValue("-1");
                      setQuestionIndex(questionIndex + 1);
                    }
                  } else {
                    if (questionIndex === quizQuestions.length - 1) {
                      alert("done");
                    } else {
                      setIndexValue("-1");
                      setQuestionIndex(questionIndex + 1);
                    }
                  }

                  // history.push("/adminlogin");
                }}
                // disabled
                classes={classes}
                className=" button-Login"
              >
                Next
              </Button>
            </Grid>
          </form>
        </div>
      </div>
      {/* <SideBar history={history} /> */}
    </div>
  );
};

export default Quiz;
