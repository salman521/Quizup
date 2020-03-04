import QuestionsBox from "./QuestionsBox";

import { connect } from "react-redux";
import { login } from "../../actions/admin";
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
  quizQuestions: question.quizQuestions
});

const mapDispatchToProps = dispatch => ({
  getQuestions: categoryId => dispatch(getQuestions(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBox);
