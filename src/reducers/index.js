import { combineReducers } from "redux";

import users from "./users";
import admins from "./admins";
import common from "./common";
import category from "./category";
import question from "./question";

// import business from './business';

const reducers = {
  // routing: routerReducer,
  users,
  admins,
  common,
  category,
  question
  // business
};

export default combineReducers(reducers);
