import React from "react";
import { Link } from "react-router-dom";
import "./../../Layouts/Style/navbar.css";

export default function SubMenuDropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen ? "mobile-menu" : "hidden mobile-menu-hide"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/about" >About</Link>
      <Link className="p-4" to="/course" >Course</Link>
      <Link className="p-4" to="/instructor" >Instructor</Link>
      <Link className="p-4" to="/gallery" >Gallery</Link>
      <Link className="p-4" to="/contact" >Contact</Link>
      <Link className="p-4" to="/signup" >Sign Up</Link>
    </div>
  );
}
