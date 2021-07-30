import React, { useContext } from "react";
import { AuthContext } from "../Store";
import { Redirect } from "react-router";
const Profile = () => {
  const { state } = useContext(AuthContext);

  const islogged = state.auth;
  if (!islogged) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <div className="profile-container">
      <h2>Profile</h2>
    </div>
  );
};

export default Profile;
