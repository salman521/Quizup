import Home from "./Home";
import { connect } from "react-redux";
import { login, getUser } from "../../actions/users";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({
  userData: users.userData
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
