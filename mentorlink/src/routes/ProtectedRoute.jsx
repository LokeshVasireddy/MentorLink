import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/authUtils";

const ProtectedRoute = ({ children }) => {
  const token = getToken(); // get JWT from localStorage
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;