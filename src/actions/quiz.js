import { QuizActions } from "../actionTypes";
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
    payload: axios.post("http://localhost:5000/quiz", data)
  };
};
// export const getAdmin = () => {
//   const id = localStorage.getItem("id");

//   return {
//     type: `${AdminActions.GET_ADMIN}`,
//     payload: axios.get(`http://localhost:5000/admins/getAdmin/${id}`)
//   };
// };
