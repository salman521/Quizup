import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";

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

const QuestionsBox = ({ activeCategoryId, ...props }) => {
  // console.log(data.getTransactions, 'sss');
  var quizQuestions = [
    {
      question: "What franchise would you rather play a game from?",
      answerindex: 1,
      answers: [
        {
          type: "IBM",
          option: "Halo",
          answer: false
        },
        {
          type: "amdocs",
          option: "Pokemon",
          answer: false
        },
        {
          type: "Sony2",
          option: "Uncharted1",
          answer: false
        },
        {
          type: "Sony1",
          option: "Uncharted2",
          answer: false
        }
      ]
    },
    {
      question: "Which console would you prefer to play with friends?",
      answerindex: 3,
      answers: [
        {
          type: "IBM",
          option: "X-Box",
          answer: false
        },
        {
          type: "amdocs",
          option: "amdocs 64",
          answer: false
        },
        {
          type: "Sony",
          option: "Playstation 100",
          answer: false
        },
        {
          type: "Sonyq",
          option: "Playstation 1",
          answer: false
        }
      ]
    },
    {
      question:
        "Which of these racing franchises would you prefer to play a game from?",
      answerindex: 2,
      answers: [
        {
          type: "IBM",
          option: "Forza",
          answer: false
        },
        {
          type: "amdocs",
          option: "Mario Kart",
          answer: false
        },
        {
          type: "Sony",
          option: "Gran Turismo",
          answer: false
        },
        {
          type: "Sonyw",
          option: "Playstation 1qq",
          answer: false
        }
      ]
    },
    {
      question: "Which of these games do you think is best?",
      answerindex: 1,
      answers: [
        {
          type: "IBM",
          option: "BioShock",
          answer: false
        },
        {
          type: "amdocs",
          option: "The Legend of Zelda: Ocarina of Time",
          answer: false
        },
        {
          type: "Sony",
          option: "Final Fantasy VII",
          answer: false
        },
        {
          type: "Sonyr",
          option: "Playstation 1",
          answer: false
        }
      ]
    },
    {
      question: "What console would you prefer to own?",
      answerindex: 0,
      answers: [
        {
          type: "IBM",
          option: "X-Box One",
          answer: false
        },
        {
          type: "amdocs",
          option: "Wii U",
          answer: false
        },
        {
          type: "Sony",
          option: "Playstation 4",
          answer: false
        },
        {
          type: "Sonyqqå",
          option: "Playstation11 1",
          answer: false
        }
      ]
    }
  ];

  return (
    <div className="questionsBox">
      <h4>{activeCategoryId}</h4>
      {quizQuestions.map((question, index) => {
        return (
          <div>
            <Question question={question} index={index + 1} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsBox;
