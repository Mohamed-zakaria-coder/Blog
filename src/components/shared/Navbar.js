import React, { useState } from "react";
import { SiBlogger } from "react-icons/si";
import "../../blog.css/navbar.css";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const [showUser, setShowUser] = useState(false);
  function handleShow() {
    setShowUser((prev) => !prev);
  }
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="blogger-icon">
          <div>My-Blog</div>
          <SiBlogger />
        </div>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="register">
            <li>Register</li>
          </NavLink>
          <NavLink to="login">
            <li>Login</li>
          </NavLink>
        </ul>
        <div className="login-img-parent">
          <BiUser className="login-img" onClick={() => handleShow()} />
          {showUser && (
            <div className="user-info">
              <div className="user-name">
                <BiUser className="login-img-info icon" />
                <h3>UserName</h3>
              </div>
              <div className="create-post">
                <BsFillFileEarmarkPostFill className="icon" />
                <NavLink to='post'>
                <h3>Create Post</h3>
                </NavLink>
              </div>
              <div className="my-acc">
                <RiAccountCircleLine className="icon" />
                <h3>My Account</h3>
              </div>
              <div className="log-out">
                <BiLogOut className="icon" />
                <NavLink to='login'>
                <h3 onClick={() => handleShow()}>Log Out</h3>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
