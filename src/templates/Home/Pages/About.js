import React from "react";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mb-10">
        <BreadCrumb />
      </p>
      <h1 className="text-4xl">About</h1>
    </div>
  );
}
