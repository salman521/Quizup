import React, { Component, useState, useEffect, memo } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
// import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Button from "../Button";
import { Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: Colors.FOCUSED
  },
  radio: {
    "&$checked": {
      color: "#4B8DF8"
    }
  }

  // underline: {
  //   '&&&:before': {
  //     borderBottom: 'none'
  //   },
  //   '&&:after': {
  //     borderBottom: 'none'
  //   }
  // }
});
const AddQuestion = ({
  open,
  handleClose,
  questionData,
  setQuestion,
  setOptionA,
  setOptionB,
  setOptionC,
  setOptionD,
  setAnswerIndex,
  activeCategoryId,
  postQuestion,
  getQuestions,
  ...props
}) => {
  const classes = useStyles();

  const handleCloseDialogs = () => {
    const { question, answers, answerindex } = questionData;

    if (
      question &&
      answers[0].option &&
      answers[1].option &&
      answers[2].option &&
      answers[3].option !== "" &&
      answerindex !== -1
    ) {
      questionData.activeCategoryId = activeCategoryId;
      postQuestion(questionData)
        .then(res => {
          getQuestions(activeCategoryId).then(res => {
            handleClose();
          });
        })
        .catch(err => {
          alert("cannot add question");
        });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Dialog
      // fullScreen={fullScreen}
      open={open}
      // open={true}
      PaperProps={{
        style: {
          borderRadius: 22,
          backgroundColor: Colors.TERTIARY
        }
      }}
      // fullWidth

      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        style={{
          backgroundColor: Colors.TERTIARY,
          display: "flex",
          padding: 38
        }}
      >
        <div>
          <div
            style={{
              height: 40,
              fontSize: 25,
              color: Colors.TEXT_SECONDARY,
              marginBottom: 15
            }}
          >
            New Question
          </div>
          <div style={{ height: 400, width: 500 }}>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED
                    // height: 67,
                    // width: 300

                    // fontSize: 28
                  }
                }}
                InputLabelProps={{
                  style: { color: Colors.TEXT_TERTIARY }
                }}
                fullWidth
                value={questionData.question}
                onChange={e => setQuestion(e.target.value)}
                label="Question"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  alignSelf: "center",

                  marginBottom: 15
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    // height: 67,
                    width: 250

                    // fontSize: 28
                  }
                }}
                InputLabelProps={{
                  style: { color: Colors.TEXT_TERTIARY }
                }}
                // fullWidth
                // value={questionData.answers[0].option}

                onChange={e => setOptionA(e.target.value)}
                label="Option A"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  alignSelf: "center",

                  marginBottom: 15
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    // height: 67,
                    width: 250

                    // fontSize: 28
                  }
                }}
                InputLabelProps={{
                  style: { color: Colors.TEXT_TERTIARY }
                }}
                // fullWidth
                // value={question}

                onChange={e => setOptionB(e.target.value)}
                label="Option B"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  alignSelf: "center",

                  marginBottom: 15
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    // height: 67,
                    width: 250

                    // fontSize: 28
                  }
                }}
                InputLabelProps={{
                  style: { color: Colors.TEXT_TERTIARY }
                }}
                // fullWidth
                // value={question}

                onChange={e => setOptionC(e.target.value)}
                label="Option C"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  alignSelf: "center",

                  marginBottom: 15
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    // height: 67,
                    width: 250

                    // fontSize: 28
                  }
                }}
                InputLabelProps={{
                  style: { color: Colors.TEXT_TERTIARY }
                }}
                // fullWidth
                // value={question}

                onChange={e => setOptionD(e.target.value)}
                label="Option D"
              />
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center"
              }}
            >
              <span style={{ color: Colors.FOCUSED, marginRight: 25 }}>
                Correct Answer:
              </span>
              <div>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  style={{
                    // border: "1px solid green",
                    display: "flex",
                    flexDirection: "row"
                  }}
                  color="primary"
                  // value={questionData.answerindex}
                  onChange={e => {
                    setAnswerIndex(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="0"
                    classes={classes}
                    color="primary"
                    control={<Radio />}
                    label="A"
                  />
                  <FormControlLabel
                    value="1"
                    classes={classes}
                    control={<Radio />}
                    label="B"
                  />
                  <FormControlLabel
                    value="2"
                    classes={classes}
                    control={<Radio />}
                    label="C"
                  />
                  <FormControlLabel
                    value="3"
                    classes={classes}
                    control={<Radio />}
                    label="D"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
          <div
            style={{
              // border: '1px solid red',
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Button
              onClick={handleClose}
              customStyle={{
                backgroundColor: Colors.PRIMARY,
                minWidth: 150,
                borderRadius: 12,
                color: Colors.TEXT_TERTIARY,

                textAlign: "center"
              }}
              text="Cancel"
            />

            <Button
              onClick={handleCloseDialogs}
              customStyle={{
                backgroundColor: Colors.FOCUSED,
                minWidth: 150,

                borderRadius: 12,
                color: Colors.TEXT_PRIMARY,
                textAlign: "center"
              }}
              text="Add"
            />
          </div>
        </div>
      </DialogContent>

      {/* <DialogActions style={{ backgroundColor: Colors.TERTIARY }}>
        
        </DialogActions> */}
    </Dialog>
  );
};

export default AddQuestion;