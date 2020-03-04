import { CategoryActions } from "../actionTypes";
import axios from "axios";

export const addCategory = data => {
  return {
    type: `${CategoryActions.ADD_CATEGORY}`,
    payload: axios.post("http://localhost:5000/categories/addCategory", {
      name: data
    })
  };
};
export const getCategories = () => {
  return {
    type: `${CategoryActions.GET_CATEGORIES}`,
    payload: axios.get("http://localhost:5000/categories")
  };
};
