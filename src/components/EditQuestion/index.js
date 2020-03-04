import EditQuestion from "./EditQuestion";
import { connect } from "react-redux";
import { login } from "../../actions/admin";
import { putQuestion, getQuestions } from "../../actions/question";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  // questionData: question.questionData
});

const mapDispatchToProps = dispatch => ({
  putQuestion: data => dispatch(putQuestion(data)),
  getQuestions: categoryId => dispatch(getQuestions(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion);
