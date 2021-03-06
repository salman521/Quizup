import { QuestionActions, url } from "../actionTypes";
import axios from "axios";

export const setQuestion = question => ({
  type: `${QuestionActions.SET_QUESTION}`,
  question
});
export const setOptionA = value => ({
  type: `${QuestionActions.SET_OPTION_A}`,
  value
});

export const setOptionB = value => ({
  type: `${QuestionActions.SET_OPTION_B}`,
  value
});
export const setOptionC = value => ({
  type: `${QuestionActions.SET_OPTION_C}`,
  value
});
export const setOptionD = value => ({
  type: `${QuestionActions.SET_OPTION_D}`,
  value
});
export const setAnswerIndex = value => ({
  type: `${QuestionActions.SET_ANSWER_INDEX}`,
  value
});
export const postQuestion = data => {
  return {
    type: `${QuestionActions.POST_QUESTION}`,
    payload: axios.post(`${url}questions`, data)
  };
};

export const getQuestions = categoryId => {
  return {
    type: `${QuestionActions.GET_QUESTIONS}`,
    payload: axios.get(`${url}questions/${categoryId}`)
  };
};
export const deleteQuestion = questionId => {
  return {
    type: `${QuestionActions.DELETE_QUESTION}`,
    payload: axios.delete(`${url}questions`, {
      params: {
        id: questionId
      }
    })
  };
};
export const putQuestion = data => {
  return {
    type: `${QuestionActions.UPDATE_QUESTION}`,
    payload: axios.put(`${url}questions`, data)
  };
};
