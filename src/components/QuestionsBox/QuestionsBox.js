import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import moment from "moment";
import AddIcon from "@material-ui/icons/Add";
import Question from "../Question";
import EditQuestion from "../EditQuestion";

const QuestionsBox = ({
  activeCategoryId,
  getQuestions,
  quizQuestions,
  loading,
  ...props
}) => {
  useEffect(() => {
    if (activeCategoryId) {
      getQuestions(activeCategoryId);
    }
  }, [activeCategoryId]);

  return (
    <div className="questionsBox">
      <div style={{ paddingTop: 20 }}>
        {quizQuestions && quizQuestions.length > 0 ? (
          quizQuestions.map((question, index) => {
            return (
              <div>
                <Question
                  activeCategoryId={activeCategoryId}
                  question={question}
                  // setBoxOpen={setBoxOpen}
                  // open={open}
                  index={index + 1}
                />
              </div>
            );
          })
        ) : (
          <div>{!loading && "No Question in this category"}</div>
        )}
      </div>
      <div style={{ height: 30, paddingTop: 20 }}>
        {loading && <CircularProgress color="secondary" />}
      </div>
    </div>
  );
};

export default QuestionsBox;
