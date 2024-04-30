import { redirect, Navigate } from "react-router-dom";
import { useAuth } from "../state";

import React from "react";

export default function ViewIfNotAuthenticated({ children }) {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={"/user/dashboard"} replace />;
  }

  return children;
}
