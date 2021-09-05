import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <nav className="navbar navbar-expand-lg card">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder="search"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-chat"></i>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-compass"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="pfp" src={user.profilePicture} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
