import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Store } from "../../App";
function PrivateRoute({ children, ...rest }) {
  const { loggedInUser } = useContext(Store);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
