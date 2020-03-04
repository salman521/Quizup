import { combineReducers } from "redux";

import users from "./users";
import admins from "./admins";
import common from "./common";
import category from "./category";

// import business from './business';

const reducers = {
  // routing: routerReducer,
  users,
  admins,
  common,
  category
  // business
};

export default combineReducers(reducers);
