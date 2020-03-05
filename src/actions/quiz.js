import { QuizActions, url } from "../actionTypes";
import axios from "axios";

export const setQuizCategory = id => ({
  type: `${QuizActions.SET_CATEGORY}`,
  id
});
export const setMarks = value => ({
  type: `${QuizActions.SET_MARKS}`,
  value
});

export const postQuiz = data => {
  return {
    type: `${QuizActions.POST_QUIZ}`,
    payload: axios.post(`${url}quiz`, data)
  };
};
export const getUserQuizes = id => {
  return {
    type: `${QuizActions.GET_USER_QUIZES}`,
    payload: axios.get(`${url}quiz/${id}`)
  };
};
