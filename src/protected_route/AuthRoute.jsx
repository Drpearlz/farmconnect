import { redirect, Navigate } from "react-router-dom";
import { useAuth } from "../state";

import React from "react";

export default function AuthRequiredRoute() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <p>An auth route is here</p>
    </div>
  );
}
