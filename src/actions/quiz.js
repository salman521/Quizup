import { QuizActions } from "../actionTypes";
import axios from "axios";

export const setQuizCategory = id => ({
  type: `${QuizActions.SET_CATEGORY}`,
  id
});

// export const login = data => {
//   return {
//     type: `${AdminActions.ADMIN_LOGIN}`,
//     payload: axios.post("http://localhost:5000/admins/login", data)
//   };
// };
// export const getAdmin = () => {
//   const id = localStorage.getItem("id");

//   return {
//     type: `${AdminActions.GET_ADMIN}`,
//     payload: axios.get(`http://localhost:5000/admins/getAdmin/${id}`)
//   };
// };
