import React from "react";
import { Route, Navigate } from "react-router-dom";

import { getUserFromLocalStorage as getUser } from "../services/localStorageUtils";

export function PrivateRoute({ element: Element, user, ...rest }) {
    return (
        <Route
          {...rest}
          element={getUser() ? <Element /> : <Navigate to="/login" replace />}
        />
      );
  }
  