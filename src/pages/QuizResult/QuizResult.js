import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";

// import Button from "../../components/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    color: Colors.FOCUSED_NEGATIVE,
    backgroundColor: Colors.SECONDARY
  }
}));
const QuizResult = ({ history, quizQuestions, ...props }) => {
  // const [marks, setMarks] = useState(0);
  const { marks, totalMarks } = history.location.state;
  const classes = useStyles();
  console.log(history, "ssss");
  useEffect(() => {
    if (quizQuestions.length > 0) {
      // setQuestionIndex(0);
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
        <div className="resultBox">
          <form style={{ height: 150 }}>
            <Typography
              style={{ color: Colors.FOCUSED }}
              className="heading"
              variant="h5"
            >
              Result
            </Typography>
            <div
              style={{
                height: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <span>
                You got {marks + " "} marks out of {" " + totalMarks}
              </span>
            </div>

            <Grid>
              <Button
                onClick={() => {
                  history.push("/home");
                }}
                // disabled
                classes={classes}
                className=" button-Login"
              >
                Want to give another Quiz?
              </Button>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
