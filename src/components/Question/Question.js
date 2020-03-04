import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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
import Popover from "@material-ui/core/Popover";
import Button from "../Button";
import AddIcon from "@material-ui/icons/Add";
import * as Colors from "../../styles/colors";
import EditQuestion from "../EditQuestion";

const Question = ({
  t,
  question,
  index,
  deleteQuestion,
  activeCategoryId,
  // setBoxOpen,
  getQuestions,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);
  const [editBoxOpen, setEditBoxOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const popoverOpen = Boolean(anchorEl);
  const open = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ transition: "all 0.5s ease" }}>
      <EditQuestion
        open={editBoxOpen}
        questionForEdit={question}
        activeCategoryId={activeCategoryId && activeCategoryId}
        handleClose={() => {
          setEditBoxOpen(!editBoxOpen);
        }}
      />
      {/* ////////////////////////////////////// Popover Code Start////////////////////////////////// */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: 8, backgroundColor: Colors.TERTIARY }
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",

          horizontal: "right"
        }}
      >
        <div
          style={{
            backgroundColor: Colors.TERTIARY,
            // borderRadius: 10,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Button
            onClick={event => {
              // setMemberId(member.id);
              setEditBoxOpen(true);
              setAnchorEl(null);
            }}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              color: Colors.TEXT_TERTIARY,
              textAlign: "left"
            }}
            text={"Edit Question"}
          />
          <Button
            onClick={() => {
              // alert(question._id);
              deleteQuestion(question._id)
                .then(res => {
                  getQuestions(activeCategoryId).then(res => {
                    setAnchorEl(null);
                  });
                })
                .catch(err => alert("Cannot delete Question"));
            }}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              color: Colors.TEXT_TERTIARY,
              textAlign: "left"
            }}
            text={"Delete Question"}
          />
        </div>
      </Popover>
      {/* ////////////////////////////////////// Popover Code End //////////////////////////// */}
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          className="transactionBox"
          style={{
            backgroundColor: Colors.SECONDARY,
            transition: "all 0.5s ease",
            // height: '70px',
            padding: "25px",
            marginTop: "7px",
            display: "flex",
            borderRadius: "11px",
            minWidth: "90%",
            marginBottom: "7px"
          }}
        >
          <span style={{ marginRight: 8 }}>{index + ":"}</span>
          <div
            style={{
              flexGrow: 1
              // maxWidth: '20vw'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%"
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  color: Colors.TEXT_SECONDARY,
                  fontWeight: "bold"
                }}
              >
                {question.question}
              </div>
            </div>

            <div style={{ transition: "all 0.5s ease" }}>
              <div
                style={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column"
                }}
              >
                <div
                  style={{
                    color: Colors.TEXT_SECONDARY,
                    textAlign: "left",
                    // maxWidth: '60%',
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 6
                  }}
                >
                  <span>{"a) " + question.answers[0].option}</span>
                  <span>{"b) " + question.answers[1].option}</span>
                  <span>{"c) " + question.answers[2].option}</span>
                  <span>{"d) " + question.answers[3].option}</span>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    color: Colors.FOCUSED,
                    marginTop: 10
                  }}
                >
                  <span>Correct Answer: </span>
                  {"  " + question.answers[question.answerindex].option}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={event => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <img src={require("../../Image/menu.png")} height="14" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
