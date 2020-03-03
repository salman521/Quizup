import { UserActions } from "../actionTypes";
import axios from "axios";

export const signUp = userData => {
  return {
    type: `${UserActions.USER_SIGNUP}`,
    payload: axios.post("http://localhost:5000/users/signup", userData)
  };
};
export const login = userData => {
  return {
    type: `${UserActions.USER_LOGIN}`,
    payload: axios.post("http://localhost:5000/users/login", userData)
  };
};
export const getUser = () => {
  const id = localStorage.getItem("id");

  return {
    type: `${UserActions.GET_USER}`,
    payload: axios.get(`http://localhost:5000/users/getUser/${id}`)
  };
};
// export const setCustomerName = name => ({
//   type: `${CustomerActions.SET_CUSTOMER_NAME}`,
//   name,
// });
// export const setCustomerContact = contact => ({
//   type: `${CustomerActions.SET_CUSTOMER_CONTACT}`,
//   contact,
// });
// export const setCustomerEmail = email => ({
//   type: `${CustomerActions.SET_CUSTOMER_EMAIL}`,
//   email,
// });
// export const setCustomerPassword = password => ({
//   type: `${CustomerActions.SET_CUSTOMER_PASSWORD}`,
//   password,
// });
// export const setCustomerCity = city => ({
//   type: `${CustomerActions.SET_CUSTOMER_CITY}`,
//   city,
// });
// export const setCustomerGender = gender => ({
//   type: `${CustomerActions.SET_CUSTOMER_GENDER}`,
//   gender,
// });
// export const setCustomerLooking = looking => ({
//   type: `${CustomerActions.SET_CUSTOMER_LOOKING}`,
//   looking,
// });

// export const signInCustomer = (email, password, googleToken) => {
//   return {
//     type: `${CustomerActions.CUSTOMER_SIGNIN}`,
//     payload: post('/customers/login', {email, password, googleToken}),
//   };
// };
// export const logout = (email, googleToken) => {
//   var payload = {email: email, googleToken};
//   return {
//     type: `${CustomerActions.LOGOUT}`,
//     payload: post('/customers/logout', payload),
//   };
// };

// export const getUserCustomer = data => {
//   return async function(dispatch) {
//     const id = await AsyncStorage.getItem('id');
//     dispatch({
//       type: `${CustomerActions.GET_CUSTOMER}`,
//       payload: get(`/customers/${id}`),
//     });
//   };
// };
// export const addFavourite = businessId => {
//   return async function(dispatch) {
//     const id = await AsyncStorage.getItem('id');
//     dispatch({
//       type: `${CustomerActions.UPDATE_FAVOURITE}`,
//       payload: put(`/customers/${id}/favourites`, {businessId}),
//     });
//   };
// };
