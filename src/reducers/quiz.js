import { QuizActions, Suffixes } from "../actionTypes";

const initalState = {
  category: "",
  marks: 0,
  userQuizzes: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${QuizActions.SET_CATEGORY}`:
      return {
        ...state,
        category: action.id
      };
    case `${QuizActions.SET_MARKS}`:
      state.marks = state.marks + action.value;
      return {
        ...state
        // marks:
      };
    case `${QuizActions.POST_QUIZ}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${QuizActions.POST_QUIZ}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        category: "",
        marks: 0,
        loading: false
      };
    case `${QuizActions.POST_QUIZ}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
        // data: {}
      };
    case `${QuizActions.GET_USER_QUIZES}_${Suffixes.REQUEST}`:
      return {
        ...state,
        userQuizzes: [],
        loading: true
      };
    case `${QuizActions.GET_USER_QUIZES}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        userQuizzes: action.payload.data,
        loading: false
      };
    case `${QuizActions.GET_USER_QUIZES}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        userQuizzes: []
      };

    default:
      return state;
  }
};
