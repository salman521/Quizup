import AddQuestion from "./AddQuestion";
import { connect } from "react-redux";
import {
  setQuestion,
  setOptionA,
  setOptionB,
  setOptionC,
  setOptionD,
  setAnswerIndex,
  postQuestion,
  getQuestions
} from "../../actions/question";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  questionData: question.questionData,
  loading: question.loading
});

const mapDispatchToProps = dispatch => ({
  setQuestion: question => dispatch(setQuestion(question)),
  setOptionA: value => dispatch(setOptionA(value)),
  setOptionB: value => dispatch(setOptionB(value)),
  setOptionC: value => dispatch(setOptionC(value)),
  setOptionD: value => dispatch(setOptionD(value)),
  setAnswerIndex: value => dispatch(setAnswerIndex(value)),
  postQuestion: data => dispatch(postQuestion(data)),
  getQuestions: categoryId => dispatch(getQuestions(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
