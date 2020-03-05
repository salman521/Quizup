/* eslint-disable object-curly-newline */
import React, { Component, useState, useEffect, useC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import createHistory from "history/createBrowserHistory";
// import { createBrowserHistory } from "history";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";

import AdminDashboard from "./pages/AdminDashboard";

import AuthRoute from "./auth/AuthRoute";
import AdminRoute from "./auth/AdminRoute";

import OpenRoute from "./auth/OpenRoute";

const history = createHistory();

const AppRouter = ({ userType, ...props }) => {
  //   const { users, organization } = props;
  // const [userType, setUserType] = useState("");
  //   const [auth, setAuth] = useState(false);
  //   let loggedIn = false;
  //   if (localStorage.getItem('userToken')) {
  //     // setLoggedIn(true);
  //     // loggedIn = true;
  //   }
  // useEffect(() => {
  //   setUserType(localStorage.getItem("userType"));
  // }, [localStorage.getItem("userType")]);

  //   alert(loggedIn);

  // if (localStorage.getItem("userType") === "user" || userType === "user") {
  // alert("user");
  return (
    <BrowserRouter history={history}>
      <Switch>
        <AuthRoute path="/home" component={Home} history={history} exact />
        <AuthRoute path="/quiz" component={Quiz} history={history} exact />
        <AuthRoute
          path="/quizresult"
          component={QuizResult}
          history={history}
          exact
        />

        <OpenRoute path="/signup" component={Signup} exact />
        <OpenRoute path="/adminlogin" component={AdminLogin} exact />
        <OpenRoute path="/login" component={Login} exact />
        <AdminRoute path="/admindashboard" component={AdminDashboard} exact />

        {/* <OpenRoute path="/newuser" component={NewUser} exact /> */}
        {/* <AuthRoute
            path="/home"
            exact
            component={Home}
            isAuthenticated={true}
          /> */}

        {/* <AuthRoute
            path="/addorganization"
            exact
            component={AddOrganization}
            isAuthenticated={loggedIn}
          /> */}
        {/* <AuthRoute
            path="/"
            exact
            component={Home}
            isAuthenticated={loggedIn}
          /> */}

        <Redirect from="/:anything" to="/login" />
      </Switch>
    </BrowserRouter>
  );
  // } else if (
  //   localStorage.getItem("userType") === "admin" ||
  //   userType === "admin"
  // ) {
  //   // alert("admin");
  //   return (
  //     <BrowserRouter history={history}>
  //       <Switch>
  //         <Route path="/admindashboard" component={AdminDashboard} exact />

  //         <Redirect from="/:anything" to="/admindashboard" />
  //       </Switch>
  //     </BrowserRouter>
  //   );
  // } else {
  //   return (
  //     <BrowserRouter history={history}>
  //       <Switch>
  //         <Route path="/signup" component={Signup} exact />
  //         <Route path="/login" component={Login} exact />
  //         <Route path="/adminlogin" component={AdminLogin} exact />

  //         {/* <OpenRoute path="/signup" component={Signup} exact />
  //         <OpenRoute path="/login" component={Login} exact />
  //         <OpenRoute path="/adminlogin" component={AdminLogin} exact /> */}
  //         <Redirect from="/:anything" to="/login" />
  //       </Switch>
  //     </BrowserRouter>
  //   );
  // }
};

const mapStateToProps = ({ users, admins, common }) => ({
  userData: users.userData,
  adminData: admins.adminData,
  userType: common.userType
});

const mapDispatchToProps = dispatch => ({
  // login: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
