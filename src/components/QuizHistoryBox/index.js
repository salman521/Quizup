import QuizHistoryBox from "./QuizHistoryBox";

import { connect } from "react-redux";
import { login } from "../../actions/admin";
import { getQuestions, deleteQuestion } from "../../actions/question";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  questionData: question.questionData
});

const mapDispatchToProps = dispatch => ({
  getQuestions: categoryId => dispatch(getQuestions(categoryId)),
  deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizHistoryBox);
