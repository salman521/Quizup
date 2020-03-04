import Home from "./Home";
import { connect } from "react-redux";
import { login, getUser } from "../../actions/users";
import { getCategories } from "../../actions/category";
import { getQuestions } from "../../actions/question";

const mapStateToProps = ({ users, quiz }) => ({
  userData: users.userData,
  category: quiz.category
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  getCategories: () => dispatch(getCategories()),
  getQuestions: categoryId => dispatch(getQuestions(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
