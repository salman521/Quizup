import Quiz from "./Quiz";
import { connect } from "react-redux";
import { setMarks, postQuiz } from "../../actions/quiz";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users, admins, question, quiz }) => ({
  quizQuestions: question.quizQuestions,
  marks: quiz.marks,
  category: quiz.category
});

const mapDispatchToProps = dispatch => ({
  setMarks: value => dispatch(setMarks(value)),
  postQuiz: data => dispatch(postQuiz(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
