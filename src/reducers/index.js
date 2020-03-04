import { combineReducers } from "redux";

import users from "./users";
import admins from "./admins";

// import business from './business';

const reducers = {
  // routing: routerReducer,
  users,
  admins
  // business
};

export default combineReducers(reducers);
