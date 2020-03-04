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
export const deleteCategory = id => {
  return {
    type: `${CategoryActions.DELETE_CATEGORY}`,
    payload: axios.delete("http://localhost:5000/categories", {
      params: {
        id
      }
    })
  };
};
export const updateCategory = data => {
  return {
    type: `${CategoryActions.UPDATE_CATEGORY}`,
    payload: axios.put("http://localhost:5000/categories", data)
  };
};
