import { UserActions, url } from "../actionTypes";
import axios from "axios";

export const signUp = userData => {
  return {
    type: `${UserActions.USER_SIGNUP}`,
    payload: axios.post(`${url}users/signup`, userData)
  };
};
export const login = userData => {
  return {
    type: `${UserActions.USER_LOGIN}`,
    payload: axios.post(`${url}users/login`, userData)
  };
};
export const getUser = () => {
  const id = localStorage.getItem("id");

  return {
    type: `${UserActions.GET_USER}`,
    payload: axios.get(`${url}users/getUser/${id}`)
  };
};
export const getUsers = () => {
  return {
    type: `${UserActions.GET_USERS}`,
    payload: axios.get(`${url}users`)
  };
};
