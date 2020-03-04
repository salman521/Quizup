import { QuestionActions, Suffixes } from "../actionTypes";

const initalState = {
  questionData: {
    question: "",
    answerindex: 0,
    answers: [
      {
        option: ""
      },
      {
        option: ""
      },
      {
        option: ""
      },
      {
        option: ""
      }
    ]
  },
  loading: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${QuestionActions.SET_QUESTION}`:
      return {
        ...state,
        questionData: { ...state.questionData, question: action.question }
      };
    case `${QuestionActions.SET_OPTION_A}`:
      const dataA = state.questionData.answers;
      dataA[0].option = action.value;
      return {
        ...state
      };
    case `${QuestionActions.SET_OPTION_B}`:
      const dataB = state.questionData.answers;
      dataB[1].option = action.value;
      return {
        ...state
      };
    case `${QuestionActions.SET_OPTION_C}`:
      const dataC = state.questionData.answers;
      dataC[2].option = action.value;
      return {
        ...state
      };
    case `${QuestionActions.SET_OPTION_D}`:
      const dataD = state.questionData.answers;
      dataD[3].option = action.value;
      return {
        ...state
      };
    case `${QuestionActions.SET_ANSWER_INDEX}`:
      return {
        ...state,
        questionData: { ...state.questionData, answerindex: action.value }
      };
    case `${QuestionActions.POST_QUESTION}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true
      };
    case `${QuestionActions.POST_QUESTION}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        questionData: initalState.questionData,
        loading: false
      };
    case `${QuestionActions.POST_QUESTION}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
