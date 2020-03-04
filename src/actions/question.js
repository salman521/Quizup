import { QuestionActions } from "../actionTypes";
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
    payload: axios.post("http://localhost:5000/questions", data)
  };
};
// export const signUp = userData => {
//   return {
//     type: `${UserActions.USER_SIGNUP}`,
//     payload: axios.post("http://localhost:5000/users/signup", userData)
//   };
// };
// export const login = userData => {
//   return {
//     type: `${UserActions.USER_LOGIN}`,
//     payload: axios.post("http://localhost:5000/users/login", userData)
//   };
// };
// export const getUser = () => {
//   const id = localStorage.getItem("id");

//   return {
//     type: `${UserActions.GET_USER}`,
//     payload: axios.get(`http://localhost:5000/users/getUser/${id}`)
//   };
// };
