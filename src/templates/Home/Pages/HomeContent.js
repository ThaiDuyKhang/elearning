import React, { Fragment } from "react";
import "./../Style/homeStyle.css";
import Lazyload from "react-lazyload";
import CarouselHome from "../Components/Home/CarouselHome";
import TabCoursesHome from "../Components/Home/tabCoursesHome";
import { history } from "../../../App";
import { Link, NavLink } from "react-router-dom";

export default function HomeContent(props) {
  return (
    <Fragment>
      <CarouselHome />
      <div className="container mx-auto py-5 sm:py-16">
        <div className="heading text-center py-10 sm:py-14">
          <h1 className="text-3xl px-10 sm:text-6xl font-bold py-3">
            High quality video, audio & live classes
          </h1>
          <p className="text-base font-normal px-2 sm:px-80">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push("/courses");
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors"
          >
            Visit Courses
          </button>
        </div>
        <div className="img_screenshotlive_home relative mt-20 flex justify-center">
          <img
            className="w-11/12 sm:w-9/12"
            src="./images/homeScreenshotLive.png"
            alt=""
          />
        </div>
        <div className="h-24 sm:h-44 grid grid-cols-12 mx-5 sm:mx-24 gap-2 sm:gap-0 justify-items-center place-content-center">
          <div
            className="ml-auto w-full sm:w-10/12 col-span-4 grid grid-cols-3 gap-4 place-items-center
            bg-white rounded-lg shadow-lg py-3 px-2"
          >
            <div className="col-span-1 sm:bg-red-100 p-1 py-2 sm:p-3  rounded-md">
              <img src="./images/speaker.png" alt="Audio Classes" />
            </div>
            <div className="text-sm sm:text-xl col-span-2">
              <span>Audio Classes</span>
            </div>
          </div>
          <div
            className="mx-auto w-full sm:w-10/12 col-span-4 grid grid-cols-3 gap-4  place-items-center
            bg-white rounded-lg shadow-lg py-3 px-2"
          >
            <div className="col-span-1 sm:bg-purple-100 p-1 py-2  sm:p-3 rounded-md">
              <img src="./images/live-streaming.png" alt="Live Classes" />
            </div>
            <div className="text-sm sm:text-xl col-span-2">
              <span className="text-left">Live Classes</span>
            </div>
          </div>
          <div
            className="mr-auto w-full sm:w-10/12 col-span-4 grid grid-cols-3 gap-4  place-items-center
            bg-white rounded-lg shadow-lg py-3 px-2"
          >
            <div className="col-span-1 sm:bg-green-100 p-1 py-2  sm:p-3 rounded-md">
              <Lazyload>
                <img src="./images/play-button.png" alt="Recorded Class" />
              </Lazyload>
            </div>
            <div className="text-sm sm:text-xl col-span-2">
              <span>Recorded Class</span>
            </div>
          </div>
        </div>
        <div className="heading text-center py-14">
          <h1 className="text-3xl sm:text-6xl font-bold py-3">
            Qualified lessons for students
          </h1>
          <p className="text-lg font-normal px-2 mb-24 sm:px-80">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </p>
          <div className="py-18">
            <Lazyload>
              <TabCoursesHome />
            </Lazyload>
          </div>
        </div>
        <div
          className="mx-5 sm:mx-0 pt-5 grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 
        place-items-center rounded-3xl bg-gray-100"
        >
          <div className="place-self-auto px-5 sm:px-12">
            <p className="rounded-xl text-center text-purple-700 bg-indigo-100 p-3 w-fit text-base sm:text-lg">
              College Level
            </p>
            <h2 className="text-3xl sm:text-6xl font-semibold leading-tight">
              Don’t waste time in
              <br />
              COVID-19 pandemic.
              <br />
              Develop your skills.
            </h2>
            <p className="text-base sm:text-xl mb-12 leading-normal">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
            <NavLink
              to="./signup"
              className="mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white  text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Registation Now
            </NavLink>
          </div>
          <div className="img_collegeLevel_home ">
            <Lazyload>
              <img src="./images/homeImg.png" alt="" width="100%" />
            </Lazyload>
          </div>
        </div>
        <div
          className="mt-24 sm:mt-44 mx-5 sm:mx-0 grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-4"
        >
          <div className="img_collegeLevel_home order-2 sm:order-1 mt-10 sm:mt-0">
            <Lazyload>
              <img className="w-11/12 sm:w-11/12" src="./images/homeImg2.png" alt="" />
            </Lazyload>
          </div>
          <div className="order-1 sm:order-2 px-1 sm:px-12 col-span-1">
            <h2 className="sm:text-6xl text-3xl text-center sm:text-left font-semibold leading-tight">
              Want to share your
              <br />
              knowledge? Join us
              <br />a Mentor
            </h2>
            <p className="text-lg text-center sm:text-left sm:text-2xl mb-12 sm:leading-10">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
            <Link
              to="./Instructor"
              className="flex mx-auto sm:mx-0 w-fit mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white 
              text-white font-semibold text-sm sm:text-base p-4 sm:p-5 rounded-lg transition-colors"
            >
              Career Information
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
