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
  useEffect(() => {
    if (quizQuestions.length > 0) {
      // setQuestionIndex(0);
    } else {
      history.push("/home");
    }
  }, [quizQuestions]);

  const classes = useStyles();
  console.log(history, "ssss");

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
          <form
            style={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <div style={{ width: 250, minHeight: 30, textAlign: "left" }}>
                Total Questions Attempted:
                <span style={{ color: Colors.TEXT_PRIMARY, marginLeft: 5 }}>
                  {history.location.state.totalMarks / 10}
                </span>
              </div>
              <div style={{ width: 250, minHeight: 30, textAlign: "left" }}>
                Total Marks:
                <span style={{ color: Colors.TEXT_PRIMARY, marginLeft: 5 }}>
                  {history.location.state.totalMarks}
                </span>
              </div>
              <div style={{ width: 250, minHeight: 30, textAlign: "left" }}>
                Obtained Marks:
                <span style={{ color: Colors.TEXT_PRIMARY, marginLeft: 5 }}>
                  {history.location.state.marks}
                </span>
              </div>
              {/* <span>
                {history.location.state.marks + " "} marks out of{" "}
                {" " + history.location.state.totalMarks}
              </span> */}
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
