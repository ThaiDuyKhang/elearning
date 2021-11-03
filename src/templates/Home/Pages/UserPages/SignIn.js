import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch} from "react-redux";
import { signInAction } from "../../../../redux/actions/userManagermentAction";

export default function SignIn({ setShowModal }) {

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
      matKhau: Yup.string()
      .required("Required!")
    }),
    onSubmit: (values) => {
      dispatch(signInAction(values, setShowModal));
    },
  });

  return (
    <Fragment>
      <div className="grid grid-flow-row gap-x-8 px-5 pt-5">
        <div className="w-fit place-self-center">
          <button className="google-login-btn mt-5 flex items-center text-gray-500 text-base p-5 rounded-lg transition-colors">
            <svg
              className="mr-3 google-login"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28:3796)">
                <path
                  d="M21.823 9H19.636V11.177H17.459V13.364H19.636V15.541H21.823V13.364H24V11.177H21.823V9Z"
                  fill="white"
                />
                <path
                  d="M7.5 19.5C11.828 19.5 14.703 16.462 14.703 12.174C14.703 11.683 14.652 11.304 14.581 10.926H7.501V13.504H11.758C11.584 14.599 10.469 16.737 7.501 16.737C4.944 16.737 2.856 14.619 2.856 12C2.856 9.381 4.943 7.262 7.501 7.262C8.964 7.262 9.936 7.886 10.489 8.418L12.525 6.464C11.214 5.237 9.526 4.5 7.5 4.5C3.356 4.5 0 7.856 0 12C0 16.144 3.356 19.5 7.5 19.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_28:3796">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sign in with Google
          </button>
          <p className="my-8 text-center text-base text-gray-500 ">
            - Or signin with your email -
          </p>
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
              
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (<p className="text-red-600">{formik.errors.taiKhoan}</p>)}
            </div>
            <div className="mt-8">
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
              {formik.errors.matKhau && formik.touched.matKhau && (<p className="text-red-600">{formik.errors.matKhau}</p>)}
            </div>
            <div className="mt-10">
              <button
                className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                style={{ backgroundColor: "#E96036" }}
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
            <div className="mb-5">
              <a
                href="#!"
                className="text-md font-semibold cursor-pointer"
                style={{ color: "#E96036" }}
              >
                Forgot Password?
              </a>
            </div>
            <div>
              Don't have an account ?{" "}
              <button
                onClick={() => {
                  history.push("/signup");
                }}
                className="cursor-pointer"
                style={{ color: "#E96036" }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
