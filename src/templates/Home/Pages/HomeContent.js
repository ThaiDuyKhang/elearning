import React, {Fragment} from "react";
import "./../Style/homeStyle.css";
import Lazyload from "react-lazyload";
import CarouselHome from "../Components/Home/CarouselHome";
import TabCoursesHome from "../Components/Home/tabCoursesHome";
import { history } from "../../../App";
import { NavLink } from "react-router-dom";

export default function HomeContent(props) {

  return (
    <Fragment>
      <CarouselHome />
      <div className="container mx-auto py-16">
        <div className="heading text-center py-14">
          <h1 className="text-6xl font-bold py-3">
            High quality video, audio & live classes
          </h1>
          <p className="text-lg font-normal px-80">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
          <button
           onClick={(e)=>{
            e.preventDefault();
            history.push('/courses')
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors">
            Visit Courses
          </button>
        </div>
        <div className="img_screenshotlive_home relative mt-36 flex justify-center">
          <img src="./images/homeScreenshotLive.png" alt="" width="70%" />
        </div>
        <div className="h-44 grid grid-cols-8 justify-items-center place-content-center">
          <div
            className="w-4/5 col-start-2 col-span-2 grid grid-cols-3 gap-4 place-items-center
            bg-white rounded-lg shadow-lg py-3"
          >
            <div className="col-span-1 bg-red-100 p-3 rounded-md">
              <img src="./images/speaker.png" alt="" />
            </div>
            <div className="text-xl col-span-2">
              <span>Audio Classes</span>
            </div>
          </div>
          <div
            className="w-4/5 col-start-4 col-span-2  grid grid-cols-3 gap-4  place-items-center
            bg-white rounded-lg shadow-lg py-3"
          >
            <div className="col-span-1 bg-purple-100 p-3 rounded-md">
              <img src="./images/live-streaming.png" alt="" />
            </div>
            <div className="text-xl col-span-2">
              <span className="text-left">Live Classes</span>
            </div>
          </div>
          <div
            className="w-4/5 col-start-6 col-span-2 grid grid-cols-3 gap-4  place-items-center
            bg-white rounded-lg shadow-lg py-3"
          >
            <div className="col-span-1 bg-green-100 p-3 rounded-md">
            <Lazyload>
              <img src="./images/play-button.png" alt="" />
            </Lazyload>
            </div>
            <div className="text-xl col-span-2">
              <span>Recorded Class</span>
            </div>
          </div>
        </div>
        <div className="heading text-center py-14">
          <h1 className="text-6xl font-bold py-3">
            Qualified lessons for students
          </h1>
          <p className="text-lg font-normal px-80">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </p>
          <div className="py-18">
          <Lazyload>
            <TabCoursesHome/>
          </Lazyload>
          </div>
        </div>
        <div
          className="pt-5 grid grid-flow-col grid-cols-2 gap-4 
        place-items-center rounded-3xl bg-gray-100"
        >
          <div className="place-self-auto  px-12">
            <p className="rounded-xl text-center text-purple-700 bg-indigo-100 p-3 w-fit text-lg">
              College Level
            </p>
            <h2 className="text-6xl font-semibold leading-tight">
              Don’t waste time in
              <br />
              COVID-19 pandemic.
              <br />
              Develop your skills.
            </h2>
            <p className="text-xl mb-12 leading-normal">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
            <NavLink to="./signup"
            className="mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white  text-white font-semibold text-base p-5 rounded-lg transition-colors">
              Registation Now
            </NavLink>
          </div>
          <div className="img_collegeLevel_home">
            <Lazyload>
              <img src="./images/homeImg.png" alt="" width="100%" />
            </Lazyload>
          </div>
        </div>
        <div
          className="pt-44 grid grid-flow-col grid-cols-2 gap-4 
        place-items-center"
        >
          <div className="img_collegeLevel_home">
            <Lazyload>
              <img src="./images/homeImg2.png" alt="" width="90%" />
            </Lazyload>
          </div>
          <div className="place-self-auto  px-12">
            <h2 className="text-6xl font-semibold leading-tight">
              Want to share your
              <br />
              knowledge? Join us
              <br />a Mentor
            </h2>
            <p className="text-2xl mb-12 leading-10">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
            <NavLink to="./Instructor" className="mt-5 bg-purple-600 hover:bg-purple-700 hover:text-white text-white font-semibold text-base p-5 rounded-lg transition-colors">
              Career Information
            </NavLink>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}
