import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Store";
const AuthBtn = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      {state.auth === false ? (
        <button
          onClick={() => {
            dispatch({ type: "login" });
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "logout" });
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default AuthBtn;
