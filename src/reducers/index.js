import { combineReducers } from "redux";

import users from "./users";
// import business from './business';

const reducers = {
  // routing: routerReducer,
  users
  // business
};

export default combineReducers(reducers);
