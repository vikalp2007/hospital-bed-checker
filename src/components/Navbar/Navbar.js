import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Images/d.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon className="header__search__icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Link to="/">Home</Link>
        <Link to="#">Hospital Login</Link>
        <Link to="/hospitals">Find Hospital</Link>
      </div>
    </div>
  );
};

export default Navbar;
