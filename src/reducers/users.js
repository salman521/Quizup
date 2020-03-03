import { UserActions, Suffixes } from "../actionTypes";

const initalState = {
  loading: false,
  userData: {}
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${UserActions.USER_SIGNUP}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${UserActions.USER_SIGNUP}_${Suffixes.SUCCESS}`:
      return {
        ...state,

        loading: false
      };
    case `${UserActions.USER_SIGNUP}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
        // data: {}
      };
    case `${UserActions.USER_LOGIN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        userData: {},
        loading: true
      };
    case `${UserActions.USER_LOGIN}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        userData: action.payload.data,
        loading: false
      };
    case `${UserActions.USER_LOGIN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        userData: {}
      };
    case `${UserActions.GET_USER}_${Suffixes.REQUEST}`:
      return {
        ...state,
        userData: {},
        loading: true
      };
    case `${UserActions.GET_USER}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        userData: action.payload.data,
        loading: false
      };
    case `${UserActions.GET_USER}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        userData: {}
      };
    default:
      return state;
  }
};