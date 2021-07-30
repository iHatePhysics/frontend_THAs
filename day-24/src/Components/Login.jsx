import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Store";
import { Redirect } from "react-router";
const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (state.auth) {
    return <Redirect to="/profile"></Redirect>;
  }
  return (
    <div className="login-container">
      <h2>you are not logged in, please Log in to view this page</h2>
      <button
        onClick={() => {
          dispatch({ type: "login" });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
