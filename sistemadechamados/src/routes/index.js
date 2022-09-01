import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import Dashboard from "../Pages/SignIn/Dashboard";
import { SignUp } from "../Pages/SignIn/SignUp";
import RouteWrapper from "./Route";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignIn />}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignIn />}
            isPrivate
          />
        }
      />
      <Route
        path="/login"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignIn />}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<SignUp />}
          />
        }
      />
    </Routes>
  );
}
