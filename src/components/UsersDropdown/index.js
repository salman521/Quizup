import UsersDropdown from "./UsersDropdown";

import { connect } from "react-redux";

import { getUsers } from "../../actions/users";
import { setQuizCategory } from "../../actions/quiz";

const mapStateToProps = ({ users, category, quiz }) => ({
  usersArray: users.usersArray,
  category: quiz.category,
  categories: category.categories
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  setQuizCategory: id => dispatch(setQuizCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersDropdown);
