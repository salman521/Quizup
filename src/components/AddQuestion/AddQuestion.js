import React, { Component, useState, useEffect, memo } from "react";

import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  Dialog,
  DialogContent,
  TextField,
  FormControlLabel
} from "@material-ui/core";

import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    color: Colors.FOCUSED
  },
  radio: {
    "&$checked": {
      color: "#4B8DF8"
    }
  }
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
  loading,
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
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
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
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
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
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
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
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
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
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
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
          <div
            style={{
              height: 10,
              paddingTop: 20,
              display: "flex",
              justifyContent: "center"
            }}
          >
            {loading && <CircularProgress size={20} color="secondary" />}
          </div>
        </div>
      </DialogContent>

      {/* <DialogActions style={{ backgroundColor: Colors.TERTIARY }}>
        
        </DialogActions> */}
    </Dialog>
  );
};

export default AddQuestion;
