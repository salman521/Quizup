import { combineReducers } from "redux";

import users from "./users";
import admins from "./admins";
import common from "./common";
import category from "./category";
import question from "./question";
import quiz from "./quiz";

const reducers = {
  users,
  admins,
  common,
  category,
  question,
  quiz
};

export default combineReducers(reducers);
