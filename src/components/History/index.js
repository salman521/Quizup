import History from "./History";
import { connect } from "react-redux";
import { login, getUser } from "../../actions/users";
import { getUserQuizes } from "../../actions/quiz";

const mapStateToProps = ({ users, quiz }) => ({
  userData: users.userData,
  userQuizzes: quiz.userQuizzes,
  loading: quiz.loading
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  getUserQuizes: id => dispatch(getUserQuizes(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
