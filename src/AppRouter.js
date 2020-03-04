/* eslint-disable object-curly-newline */
import React, { Component, useState, useEffect, useC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

import AuthRoute from "./auth/AuthRoute";
import OpenRoute from "./auth/OpenRoute";

const history = createBrowserHistory();

const AppRouter = props => {
  //   const { users, organization } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [auth, setAuth] = useState(false);
  //   let loggedIn = false;
  //   if (localStorage.getItem('userToken')) {
  //     // setLoggedIn(true);
  //     // loggedIn = true;
  //   }
  //   useEffect(() => {}, [loggedIn]);

  //   alert(loggedIn);
  if (loggedIn === false) {
    return (
      <BrowserRouter history={history}>
        <Switch>
          {/* <Route path='/' component={LoginPage} exact /> */}
          <OpenRoute path="/signup" component={Signup} exact />
          <OpenRoute path="/login" component={Login} exact />
          <OpenRoute path="/adminlogin" component={AdminLogin} exact />

          {/* <OpenRoute path="/newuser" component={NewUser} exact /> */}
          <AuthRoute
            path="/home"
            exact
            component={Home}
            isAuthenticated={loggedIn}
          />
          <AuthRoute
            path="/admindashboard"
            exact
            component={AdminDashboard}
            isAuthenticated={loggedIn}
          />
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
  } else {
    return (
      <BrowserRouter history={history}>
        <Switch>
          {/* <Route path='/' component={LoginPage} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/newuser' component={NewUser} exact /> */}
        </Switch>
      </BrowserRouter>
    );
  }
};

export default AppRouter;
