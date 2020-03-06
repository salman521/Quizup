import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import moment from "moment";
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

const QuizHistoryBox = ({ quiz, index, ...props }) => {
  console.log(quiz, "sssss");
  return (
    <div style={{ transition: "all 0.5s ease" }}>
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
          <span style={{ marginRight: 8 }}>{index}:</span>
          <div
            style={{
              flexGrow: 1
              // maxWidth: '20vw'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80%"
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  width: 300,
                  color: Colors.TEXT_SECONDARY
                  // fontWeight: "bold"
                }}
              >
                {/* {question.question} */}

                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: 5
                  }}
                >
                  Category:
                </span>
                <span style={{ color: Colors.FOCUSED }}>
                  {quiz && quiz.category.name}
                </span>
              </div>
              <div
                style={{
                  textAlign: "left",
                  color: Colors.TEXT_SECONDARY,
                  width: 200
                  // fontWeight: "bold"
                }}
              >
                {/* {question.question} */}

                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: 5
                  }}
                >
                  Marks:
                </span>
                <span style={{ color: Colors.FOCUSED }}>
                  {quiz && quiz.obtainedMarks}/{quiz && quiz.totalMarks}
                </span>
              </div>
              <div
                style={{
                  textAlign: "left",
                  width: 200,
                  color: Colors.TEXT_SECONDARY
                  // fontWeight: "bold"
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: 5
                  }}
                >
                  Date:
                </span>
                <span style={{ color: Colors.FOCUSED }}>
                  {moment(quiz.date).format("LL")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHistoryBox;
