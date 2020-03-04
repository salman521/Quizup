import React from "react";
import { Route, Redirect } from "react-router-dom";

const OpenRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !localStorage.getItem("id") ? (
          <Component {...props} />
        ) : (
          <Redirect from="/:anything" to="/login" />
        )
      }
    />
  );
};

export default OpenRoute;
