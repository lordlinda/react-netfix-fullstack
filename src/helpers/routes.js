import React from "react";
import { Redirect, Route } from "react-router-dom";
function IsUserRedirect({ component: Component, user, ...rest }) {
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/signin" }} />;
        }
      }}
    />
  );
}

export default IsUserRedirect;
