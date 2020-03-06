import EditCategory from "./EditCategory";

import { connect } from "react-redux";
import { getCategories, updateCategory } from "../../actions/category";

const mapStateToProps = ({ category }) => ({
  categories: category.categories,
  loading: category.loading
});

const mapDispatchToProps = dispatch => ({
  updateCategory: data => dispatch(updateCategory(data)),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
