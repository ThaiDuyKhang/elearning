import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './Style/navbar.css';
import { getCateCoursesAction } from "../../../redux/actions/coursesActions";
import { Button} from "antd";
import SignInModal from "../Pages/SignInModal/SignInModal";


export default function Navbar({toggle}) {

  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
  }, []);

  const renderTabCateCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      return (
        <li key={index}>
        <NavLink activeClassName="active" className="sub-link-menu" to={`/courses/${cateCourses.maDanhMuc}`}>
        {cateCourses.tenDanhMuc}
        </NavLink>
      </li>
      );
    });
  };

  const [showModal, setShowModal] = useState(false);
 
  return (
    <nav
      className="z-10 flex justify-between items-center w-full h-24 
      lg:fixed top-0 bg-white text-black font-semibold shadow-lg"
    >
      <Link to="/" className="pl-8">

      <img src="/images/logo.png" alt="" width="50%" />
      </Link>
      <div className="px-4 cursor-pointer lg:hidden">
        <i className="fa fa-bars text-2xl" aria-hidden="true" onClick={toggle} />
      </div>

      <div className="pr-8 lg:block hidden">
        <NavLink activeClassName="active" exact={true} className="nav-links p-4" to="/">Home</NavLink>
        <NavLink activeClassName="active" className="nav-links p-4" to="/about">About</NavLink>
        <div className="group inline-flex">
        <NavLink activeClassName="active" className="nav-links group relative px-4 py-3" to="/courses">Courses
        <svg className="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </NavLink>
        <ul
            className="dropdown-nav bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute 
            transition duration-150 ease-in-out origin-top min-w-32"
          >
           { renderTabCateCourses()}
          </ul>
          </div>
        <NavLink activeClassName="active" className="nav-links p-4" to="/instructor">Instructor</NavLink>
        <NavLink activeClassName="active" className="nav-links p-4" to="/gallery">Gallery</NavLink>
        <NavLink activeClassName="active" className="nav-links p-4" to="/contact">Contact</NavLink>
        <div className="inline-flex mx-4">
        <button className="signin-btn px-4 py-2 text-lg  rounded-md" onClick={()=>{setShowModal(!showModal)}} >Sign In</button>
        {showModal && <SignInModal setShowModal={setShowModal} showModal={showModal}/>}
        </div>
        <NavLink activeClassName="active" className="hover:shadow-xl font-normal text-lg signup-btn px-4 py-3 rounded-md" to="/signup">Sign Up</NavLink>
      </div>

    </nav>

  );
}
