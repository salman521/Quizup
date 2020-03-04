import AddCategory from "./AddCategory";

import { connect } from "react-redux";
import { login } from "../../actions/admin";
import { addCategory, getCategories } from "../../actions/category";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({});

const mapDispatchToProps = dispatch => ({
  addCategory: data => dispatch(addCategory(data)),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
