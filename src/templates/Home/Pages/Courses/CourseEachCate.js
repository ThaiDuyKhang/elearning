import React, { Fragment, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import { history } from "../../../../App";
import BreadCrumb from "../../../../components/Breadcrumbs/Breadcrumbs";
import { getCoursesEachCateActions } from "../../../../redux/actions/coursesActions";
import "./../Style/StyleCourses.css";

export default function CourseEachCate(props) {
  const { arrCourseEachCate } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  const [loadMore, setLoadMore] = useState(3);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  };

  useEffect(() => {
    let { cate } = props.match.params;
    dispatch(getCoursesEachCateActions(cate));
  }, [location.key]);

  const renderCourses = () => {
    return (

      <div className="text-gray-600 body-font flex flex-col items-center">
          
        <div className="container py-16 px-3 mx-auto">
  
          <div className="grid grid-cols-4 -m-4">
            {arrCourseEachCate?.slice(0, loadMore).map((course, index) => {
              return (
                <div
                  key={index}
                  className="courses-each-cate relative lg:mb-12 mx-5 px-6 py-12 bg-white rounded-3xl shadow-xl"
                >
                  <div className="absolute top-0 left-0"></div>
                  <p className="rounded-lg mb-4 text-center text-purple-700 bg-indigo-100 py-2 px-3 w-fit text-xs">
                    {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                  </p>
                  <div className="text-center">
                    <LazyLoad height={200}>
                      <img
                        alt={course?.tenKhoaHoc}
                        className="w-full mb-8 object-cover object-center rounded-lg inline-block"
                        style={{
                          maxHeight: "150px",
                          minHeight: "150px",
                          border: "1px solid #eee",
                        }}
                        src={course?.hinhAnh}
                      />
                    </LazyLoad>
                    <h2 className="courses-each-cate-heading  text-3xl font-bold">
                      {course?.tenKhoaHoc}
                    </h2>
                    <p className="courses-each-cate-description text-lg text-gray-500 leading-relaxed">
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
                      className="mx-autocursor-pointer inline-flex w-fit mt-4 border-2 border-purple-700 text-purple-700 
                      bg-white hover:text-white hover:bg-purple-700 font-semibold text-base px-5 py-3 rounded-lg transition-colors"
                    >
                      Class Details
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleLoadMore();
            }}
            className="mb-32 w-fit bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 rounded-lg transition-colors">
            Load More Courses
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="courses--header w-full">
        <div className="container py-32">
          <p className="mb-5">
            <BreadCrumb />
          </p>
          <h1 className="text-4xl uppercase">
            {arrCourseEachCate[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </h1>
        </div>
      </div>

      <div>{renderCourses()}</div>
    </Fragment>
  );
}
