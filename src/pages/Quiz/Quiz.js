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

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Countdown from "react-countdown";

// import Button from "../../components/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  text: {
    color: Colors.TEXT_TERTIARY,
    backgroundColor: Colors.SECONDARY
  }
}));
const Quiz = ({
  history,
  quizQuestions,
  setMarks,
  marks,
  category,
  postQuiz,
  ...props
}) => {
  // const [marks, setMarks] = useState(0);

  const [indexValue, setIndexValue] = useState("-1");
  const [questionNumber, setQuestionNumber] = useState(1);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(Date.now() + 60000);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          height: "80vh",
          justifyContent: "space-around"
        }}
      >
        <Countdown
          date={time}
          intervalDelay={0}
          precision={3}
          onComplete={() => {
            var data = {
              totalMarks: questionNumber * 10 - 10,
              obtainedMarks: marks,
              category,
              userId: localStorage.getItem("id")
            };
            history.push("/quizresult", {
              marks: marks,
              totalMarks: questionNumber * 10 - 10
            });
            postQuiz(data)
              .then(result => {})
              .catch(err => {
                alert("Could not post quiz result");
              });
          }}
          renderer={props => (
            <div style={{ padding: 40 }}>
              <span>Time Remaining</span>
              <Typography className="heading" variant="h5">
                {" " + props.minutes}:{"" + props.seconds}
              </Typography>
            </div>
          )}
        />

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
              <span style={{ marginRight: 5 }}>{questionNumber + ") "}</span>
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
                    textAlign: "left",
                    flexDirection: "column",
                    marginLeft: 15,
                    width: 500
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
                  if (indexValue < 0) {
                    alert("Please Select an option");
                    return;
                  } else {
                    if (
                      quizQuestions[questionIndex].answerindex.toString() ===
                      indexValue
                    ) {
                      setMarks(10);
                      if (questionIndex === quizQuestions.length - 1) {
                        setIndexValue("-1");
                        setQuestionNumber(questionNumber + 1);
                        setQuestionIndex(0);
                      } else {
                        // console.log(marks, "sss");
                        setIndexValue("-1");
                        setQuestionNumber(questionNumber + 1);
                        setQuestionIndex(questionIndex + 1);
                      }
                    } else {
                      if (questionIndex === quizQuestions.length - 1) {
                        setIndexValue("-1");
                        setQuestionNumber(questionNumber + 1);
                        setQuestionIndex(0);
                      } else {
                        setIndexValue("-1");
                        setQuestionNumber(questionNumber + 1);
                        setQuestionIndex(questionIndex + 1);
                      }
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
