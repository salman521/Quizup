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
import Countdown from "react-countdown";

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
const QuizResult = ({ history, marks, category, quizQuestions, ...props }) => {
  // const [marks, setMarks] = useState(0);

  const classes = useStyles();

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
              <span>You got {marks + " "} marks</span>
            </div>
            <div className="data-Input">
              {/* <div>
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
              </div> */}
            </div>
            {/* <Button>Forgot Password?</Button> */}
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
      {/* <SideBar history={history} /> */}
    </div>
  );
};

export default QuizResult;
