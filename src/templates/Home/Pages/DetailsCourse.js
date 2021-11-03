import React, { Fragment, useEffect } from "react";
import "./../Components/Home/styles/tabCoursesHome.css";
import LazyLoad from "react-lazyload";
import { history } from "../../../App";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoCoursesDetail from "../Components/Home/CourseVideos/videoCourseDetail";
import RatingsDetailsCourse from "../Components/Home/Ratings/ratingsDetailsCourse";
import {
  getCoursesAction,
  getDetailsCoursesAction,
  getCateCoursesAction,
} from "../../../redux/actions/coursesActions";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

export default function DetailsCourse(props) {
  const { courseDetail } = useSelector((state) => state.CoursesReducer);

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let { id } = props.match.params;
    //get detail url
    dispatch(getDetailsCoursesAction(id));
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, [location.key]);

  const renderSimilarCourse = () => {
    let similarCourses = arrCourses.filter(
      (course) =>
        course.danhMucKhoaHoc?.maDanhMucKhoahoc ===
        courseDetail.danhMucKhoaHoc?.maDanhMucKhoahoc
    );

    return similarCourses
      ?.filter((course) => course.tenKhoaHoc !== courseDetail.tenKhoaHoc)
      .slice(0, 8)
      .map((course, index) => {
        return (
          <div
            key={index}
            className="courses_tab_home relative lg:mb-12 mx-5 px-6 py-12 bg-white rounded-3xl shadow-xl"
          >
            <div className="absolute top-0 left-0"></div>
            <p className="rounded-lg text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
              {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </p>
            <div className="text-center">
              <LazyLoad height={200}>
                <img
                  alt={course?.tenKhoaHoc}
                  className="w-full mb-8 object-cover object-center rounded-lg inline-block"
                  style={{ maxHeight: "150px", minHeight: "150px" }}
                  src={course?.hinhAnh}
                />
              </LazyLoad>
              <h2 className="courses_tab_home_heading  text-3xl font-bold">
                {course?.tenKhoaHoc}
              </h2>
              <p className="course_tab_home_description text-lg text-gray-500 leading-relaxed">
                {course?.moTa?.length > 100 ? (
                  <span>{course?.moTa?.slice(0, 90)}...</span>
                ) : (
                  <span>{course.moTa}</span>
                )}
              </p>
              <button
                onClick={() => {
                    history.push(`/courses/detail/${course.maKhoaHoc}`);
                }}
                className="mx-auto cursor-pointer w-fit mt-4 border-2 border-purple-700 text-purple-700 bg-white hover:text-white hover:bg-purple-700 font-semibold text-base px-5 py-3 rounded-lg transition-colors"
              >
                Class Details
              </button>
            </div>
          </div>
        );
      });
  };

  return (
    <Fragment>
      <div className="container" style={{ marginTop: 160 }}>
        <div className="text-center flex flex-col items-center">
          <p className="mb-12">
            <Breadcrumbs />
          </p>
          <p
            className=" bg-indigo-100 rounded-md py-2 px-3 w-fit text-lg"
            style={{ color: "#7C3AED" }}
          >
            {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </p>
          <h1 className="text-5xl font-bold mt-6" >{courseDetail.tenKhoaHoc}</h1>
        </div>
        <VideoCoursesDetail />

        <div className="pt-24 grid grid-flow-col grid-cols-12 gap-4">
          <div className="img_collegeLevel_home col-span-9">
            <h2 className="text-5xl mb-10 font-bold leading-tight">Course Details</h2>
            <p className="text-xl pr-12 text-justify">{courseDetail.moTa}</p>
          </div>
          <div className="col-span-3 grid grid-flow-row row-span-2 sticky top-10 bg-white shadow-xl rounded-lg p-5">
            <div className="grid grid-flow-col grid-cols-6 grid-rows-9">
              <div className="col-span-3 flex flex-col gap-4 items-start justify-between">
                <p className="text-lg font-semibold text-gray-500">Price</p>
                <p className="text-lg font-semibold text-gray-500">
                  Instructor
                </p>
                <p className="text-lg font-semibold text-gray-500">Ratings</p>
                <p className="text-lg font-semibold text-gray-500">Durations</p>
                <p className="text-lg font-semibold text-gray-500">Lessions</p>
                <p className="text-lg font-semibold text-gray-500">Quizzes</p>
                <p className="text-lg font-semibold text-gray-500">
                  Certificate
                </p>
                <p className="text-lg font-semibold text-gray-500">Language</p>
                <p className="text-lg font-semibold text-gray-500">Access</p>
              </div>
              <div className="col-span-3 gap-4 text-right flex flex-col items-start justify-between">
                <p className="text-lg font-semibold text-red-500">Free</p>
                <p className="text-lg font-semibold text-black underline">
                  {courseDetail?.nguoiTao?.hoTen}
                </p>
                <div style={{ padding: "5px 0 15px 0" }} className="block">
                  <RatingsDetailsCourse />
                </div>
                <p className="text-lg font-semibold text-black">5 Days</p>
                <p className="text-lg font-semibold text-black">10</p>
                <p className="text-lg font-semibold text-black">2</p>
                <p className="text-lg font-semibold text-black">Yes</p>
                <p className="text-lg font-semibold text-black">Vietnamese</p>
                <p className="text-lg font-semibold text-black">Lifetime</p>
              </div>
            </div>
            <NavLink
              to={`/checkout/${courseDetail.maKhoaHoc}`}
              className="text-white hover:text-white font-semibold text-base"
            >
              <div className="mt-5 w-full text-center bg-purple-600 hover:bg-purple-700  p-5 rounded-lg transition-colors">
                Enroll
              </div>
            </NavLink>
          </div>
        </div>
        <div className="related-course">
          <h2 className="text-5xl mt-14 mb-10 font-bold leading-tight">
            Similar Courses
          </h2>
          <div className="grid grid-cols-4 -m-4">{renderSimilarCourse()}</div>
        </div>
      </div>
    </Fragment>
  );
}
