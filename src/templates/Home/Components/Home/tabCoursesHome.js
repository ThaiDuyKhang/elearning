import React, { useEffect } from "react";
import Lazyload from "react-lazyload";
import { history } from "../../../../App";
import "./styles/tabCoursesHome.css";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  getCateCoursesAction,
  getCoursesAction,
} from "../../../../redux/actions/coursesActions";

export default function TabCoursesHome(props) {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer);

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, []);

  const { TabPane } = Tabs;

  const renderCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      let courseByCate = arrCourses.filter(
        (course) =>
          course.danhMucKhoaHoc?.maDanhMucKhoahoc === cateCourses.maDanhMuc
      );
      console.log({courseByCate})
      return (
        <TabPane tab={cateCourses.tenDanhMuc} key={index}>
          <section className="text-gray-600 body-font">
            <div className="container py-16 px-3 mx-auto">
              <div className="grid grid-cols-4 -m-4">
                {courseByCate.slice(0, 8).map((course, index) => {
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
                        <Lazyload height={200}>
                          <img
                            alt={course?.tenKhoaHoc}
                            className="w-full mb-8 object-cover object-center rounded-lg inline-block"
                            style={{ maxHeight: "150px", minHeight: "150px" }}
                            src={course?.hinhAnh}
                          />
                        </Lazyload>
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
                        <div
                          onClick={() => {
                            history.push(`/courses/detail/${course.maKhoaHoc}`);
                          }}
                          className="mx-auto cursor-pointer w-fit mt-4 border-2 border-purple-700 text-purple-700 bg-white hover:text-white hover:bg-purple-700 font-semibold text-base px-5 py-3 rounded-lg transition-colors"
                        >
                          Class Details
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={() => {
                history.push(`/courses/${cateCourses.maDanhMuc}`);
              }}
              className="mb-32 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 rounded-lg transition-colors"
            >
              Visit More Classes
            </button>
          </section>
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs
        centered
        size={"large"}
        type="card"
        tabBarGutter={30}
        animated={false}
      >
        {renderCourses()}
      </Tabs>
    </div>
  );
}
