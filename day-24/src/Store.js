import React, { useReducer } from "react";
const initialState = { auth: false };
const AuthContext = React.createContext();
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "login": {
      return { ...state, auth: true };
    }
    case "logout": {
      return { ...state, auth: false };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
