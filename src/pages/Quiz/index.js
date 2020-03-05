import Quiz from "./Quiz";
import { connect } from "react-redux";
import { setMarks } from "../../actions/quiz";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users, admins, question }) => ({
  quizQuestions: question.quizQuestions
});

const mapDispatchToProps = dispatch => ({
  setMarks: value => dispatch(setMarks(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
