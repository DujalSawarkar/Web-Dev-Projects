import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (Loggedin, children) => {
  if (Loggedin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
