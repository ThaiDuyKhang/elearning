import React from "react";
import { Link } from "react-router-dom";
import "./../../Layouts/Style/navbar.css";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export default function SubMenuDropdown({ isOpen, toggle }) {
  const { Option } = Select;

  const { t, i18n } = useTranslation();

  const handleChangeLanguges = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="relative">
    <div
      className={isOpen ? "mobile-menu" : "hidden mobile-menu-hide"}
      onClick={toggle}
    >
      <Link to="/">{t("Home")}</Link>
      <Link to="/about">{t("About")}</Link>
      <Link to="/courses">{t("Courses")}</Link>
      <Link to="/instructor">{t("Instructor")}</Link>
      <Link to="/gallery">{t("Gallery")}</Link>
      <Link to="/contact">{t("Contact")}</Link>
      <div className="flex justify-center">
      <Select
        defaultValue="en"
        style={{ width: 70, marginLeft: "0.5rem", border: "none" }}
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
    </div>
    </div>
  );
}
