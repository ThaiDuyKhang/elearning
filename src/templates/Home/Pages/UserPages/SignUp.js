import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch } from "react-redux";
import { signInAction } from "../../../../redux/actions/userManagermentAction";

export default function Signup({ setShowModal }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(6, "Minimum 6 charaters")
        .max(20, "Maximum 20 characters")
        .required("Required!"),
      matKhau: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(signInAction(values, setShowModal));
    },
  });

  return (
    <Fragment>
      <div className="grid grid-flow-row gap-x-8 px-5 pt-5">
        <div className="w-fit place-self-center">
          <h2 className="my-8 text-center text-4xl ">
            Sign Up
          </h2>
        </div>
        <div className="mt-2 pb-10">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Username
              </div>
              <input
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your username"
              />

              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className="text-red-600">{formik.errors.taiKhoan}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-8 passwordSignIn">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="mt-10">
              <button
                className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                style={{ backgroundColor: "#E96036" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
            <div>
              You have an account ?{" "}
              <button
                onClick={() => {
                  history.push("/signin");
                }}
                className="cursor-pointer"
                style={{ color: "#E96036" }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
