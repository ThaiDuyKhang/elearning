import React from "react";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";

export default function Contact() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mb-10">
        <BreadCrumb />
      </p>
      <h1 className="text-4xl">Contact</h1>
    </div>
  );
}
