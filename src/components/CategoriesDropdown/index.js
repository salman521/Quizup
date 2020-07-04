import CategoriesDropdown from "./CategoriesDropdown";

import { connect } from "react-redux";

import { getCategories } from "../../actions/category";
import { setQuizCategory } from "../../actions/quiz";

const mapStateToProps = ({ users, category, quiz }) => ({
  userData: users.userData,
  category: quiz.category,
  categories: category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: (id) => dispatch(getCategories(id)),
  setQuizCategory: (id) => dispatch(setQuizCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDropdown);
