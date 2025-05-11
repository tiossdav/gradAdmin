import { jwtDecode } from "jwt-decode";

import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    // No token found
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    // Check if the token is expired
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      // Token is expired
      localStorage.removeItem("authToken"); // Clear token
      return <Navigate to="/login" replace />;
    }
  } catch {
    // If decoding fails (invalid token)
    localStorage.removeItem("authToken"); // Clear token
    return <Navigate to="/login" replace />;
  }

  // If token is valid, render the children (protected page)
  return children;
};

export default PrivateRoute;
