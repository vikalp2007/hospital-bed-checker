import React from "react";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";
// import { useDispatch } from "react-redux";
// import { logout } from "./features/userSlice";
// import { auth } from "./firebase";
// import { signOut } from "firebase/auth";

const Navbar = () => {
  //   const dispatch = useDispatch();

  //   const logoutofApp = () => {
  //     dispatch(logout());
  //     signOut(auth);
  //   };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://thumbs.dreamstime.com/b/hospital-logo-template-hospital-logo-template-117487677.jpg"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon className="header__search__icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <a href="#">Home</a>
        <a href="#">All Beds</a>
        <a href="#">Covid Beds</a>
        <a href="#">Ventilators</a>
      </div>
    </div>
  );
};

export default Navbar;
