import { CategoryActions, url } from "../actionTypes";
import axios from "axios";

export const addCategory = data => {
  return {
    type: `${CategoryActions.ADD_CATEGORY}`,
    payload: axios.post(`${url}categories/addCategory`, {
      name: data
    })
  };
};
export const getCategories = () => {
  return {
    type: `${CategoryActions.GET_CATEGORIES}`,
    payload: axios.get(`${url}categories`)
  };
};
export const deleteCategory = id => {
  return {
    type: `${CategoryActions.DELETE_CATEGORY}`,
    payload: axios.delete(`${url}categories`, {
      params: {
        id
      }
    })
  };
};
export const updateCategory = data => {
  return {
    type: `${CategoryActions.UPDATE_CATEGORY}`,
    payload: axios.put(`${url}categories`, data)
  };
};
