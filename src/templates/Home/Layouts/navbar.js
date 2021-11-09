import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Style/navbar.css";
import { getCateCoursesAction } from "../../../redux/actions/coursesActions";
import SignInModal from "../Pages/SignInModal/SignInModal";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { history } from "../../../App";
import { TOKEN, USER_SIGNIN } from "../../../utilities/Settings/config";

export default function Navbar({ toggle }) {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );

  const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const { Option } = Select;

  const { t, i18n } = useTranslation();

  const handleChangeLanguges = (value) => {
    i18n.changeLanguage(value);
  };

  const renderSignIn = () => {
    if (_.isEmpty(userSignIn)) {
      return <div className="inline-flex mx-2">
        <button
          className="signin-btn px-4 py-2 text-lg mr-2  rounded-md"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          {t("Sign In")}
        </button>
        {showModal && (
          <SignInModal setShowModal={setShowModal} showModal={showModal} />
        )}
        <NavLink
          activeClassName="active"
          className="hover:shadow-xl font-normal text-lg signup-btn px-4 py-3 rounded-md"
          to="/signup"
        >
          {t("Sign Up")}
        </NavLink>
      </div>;
    }
    else 
    {return (
      <div className="inline-flex group mx-2">
        <button
          onClick={() => {
            history.push("/about");
          }}
          className="signin-btn px-4 py-2 text-lg relative rounded-md"
        >
          Hi! {userSignIn?.taiKhoan}
        </button>
        <ul
          className="dropdown-nav bg-white border rounded-lg transform scale-0 group-hover:scale-100 absolute 
            transition duration-150 ease-in-out origin-top-right min-w-32 text-right"
            style={{right:"6%"}}
        >
          <li>
            <button
              activeClassName="active"
              className="sub-link-menu"
              onClick={() => {
                history.push("/about");
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              activeClassName="active"
              className="sub-link-menu"
              onClick={() => {
                localStorage.removeItem(USER_SIGNIN);
                localStorage.removeItem(TOKEN);
                window.location.replace('/');
              }}
            >
              Sign out
            </button>
          </li>
          { (userSignIn.taiKhoan !== "khangne") ? '' : <li>
            <button
              activeClassName="active"
              className="sub-link-menu"
              onClick={() => {
                 history.push('/admin');
              }}
            >
              Dashboard
            </button>
          </li>}
        </ul>
      </div>
    );}
  };

  const renderTabCateCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      return (
        <li key={index}>
          <NavLink
            activeClassName="active"
            className="sub-link-menu my-1"
            to={`/courses/${cateCourses.maDanhMuc}`}
          >
            {cateCourses.tenDanhMuc}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <nav
      className="z-10 flex justify-between items-center w-full h-24 
      lg:fixed top-0 bg-white text-black font-medium shadow-lg"
    >
      <Link to="/" className="pl-8">
        <img src="/images/logo.png" alt="" width="50%" />
      </Link>
      <div className="px-4 cursor-pointer lg:hidden">
        <i
          className="fa fa-bars text-2xl"
          aria-hidden="true"
          onClick={toggle}
        />
      </div>

      <div className="pr-8 lg:block hidden">
        <NavLink
          activeClassName="active"
          exact={true}
          className="nav-links"
          to="/"
        >
          {t("Home")}
        </NavLink>
        <NavLink activeClassName="active" className="nav-links" to="/about">
          {t("About")}
        </NavLink>
        <div className="group inline-flex">
          <NavLink
            activeClassName="active"
            className="nav-links group relative"
            to="/courses"
          >
            {t("Courses")}
            <svg
              className="w-6 h-6 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </NavLink>
          <ul
            className="dropdown-nav bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute 
            transition duration-150 ease-in-out origin-top min-w-32"
          >
            {renderTabCateCourses()}
          </ul>
        </div>
        <NavLink
          activeClassName="active"
          className="nav-links"
          to="/instructor"
        >
          {t("Instructor")}
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-links"
          to="/gallery"
        >
          {t("Gallery")}
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-links"
          to="/contact"
        >
          {t("Contact")}
        </NavLink>
        {renderSignIn()}
        <Select
          defaultValue="en"
          style={{ width: 70, marginLeft: "0.5rem", border:"none" }}
          onChange={handleChangeLanguges}
        >
          <Option value="en">
            <img
              src="/images/en.svg"
              className="inline-flex"
              alt="English"
              width="30"
            />
          </Option>
          <Option value="vi">
            <img
              src="/images/vi.svg"
              className="inline-flex"
              alt="Việt Nam"
              width="30"
            />
          </Option>
        </Select>
      </div>
    </nav>
  );
}
