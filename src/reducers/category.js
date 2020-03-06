import { CategoryActions, Suffixes } from "../actionTypes";

const initalState = {
  categories: [],
  loading: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${CategoryActions.ADD_CATEGORY}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${CategoryActions.ADD_CATEGORY}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false
      };
    case `${CategoryActions.ADD_CATEGORY}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
        // data: {}
      };
    case `${CategoryActions.GET_CATEGORIES}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
        // categories: []
      };
    case `${CategoryActions.GET_CATEGORIES}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        categories: action.payload.data
      };
    case `${CategoryActions.GET_CATEGORIES}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        categories: []
      };
    case `${CategoryActions.DELETE_CATEGORY}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${CategoryActions.DELETE_CATEGORY}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false
      };
    case `${CategoryActions.DELETE_CATEGORY}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
      };
    case `${CategoryActions.UPDATE_CATEGORY}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${CategoryActions.UPDATE_CATEGORY}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false
      };
    case `${CategoryActions.UPDATE_CATEGORY}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
