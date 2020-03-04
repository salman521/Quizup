import AdminLogin from "./AdminLogin";
import { connect } from "react-redux";
import { login } from "../../actions/admin";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
