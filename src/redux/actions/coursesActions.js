import { history } from "../../App";
import { GetCategoryCourses } from "../../services/GetCategoryService";
import { getCoursesServices } from "../../services/GetCoursesServices";
import {
  GET_CATEGORY_COURSES,
  GET_COURSES,
  GET_DETAILS_COURSES,
  GET_COURSES_BY_CATEGORY,
  UPDATE_COURSE,
} from "../types/coursesType";

export const getCoursesAction = async (dispatch) => {
  try {
    const result = await getCoursesServices.getCourses();

    dispatch({
      type: GET_COURSES,
      arrCourses: result.data,
    });
  } catch (errors) {
    console.log(errors);
  }
};
export const getCoursesAdminAction = (tenKhoaHoc)=>{
  return async (dispatch) => {
  try {
    const result = await getCoursesServices.getCoursesAdmin(tenKhoaHoc);
    dispatch({
      type: GET_COURSES,
      arrCoursesAdmin: result.data,
    });
  } catch (errors) {
    console.log(errors);
  }
}
}

export const getDetailsCoursesAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await getCoursesServices.getDetailCourse(id);
      // console.log({result})
      dispatch({
        type: GET_DETAILS_COURSES,
        courseDetail: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const getCateCoursesAction = async (dispatch) => {
  try {
    const category = await GetCategoryCourses.getCategoryService();

    dispatch({
      type: GET_CATEGORY_COURSES,
      arrCateCourse: category.data,
    });
  } catch (errors) {
    console.log(errors);
  }
};

export const getCoursesByCateActions = (maDanhMuc) => {
  return async (dispatch) => {
    try {
      const result = await getCoursesServices.getCoursesByCategory(maDanhMuc);
      // console.log({result})
      dispatch({
        type: GET_COURSES_BY_CATEGORY,
        arrCourseByCate: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCourseUploadImgAction  = (formData) =>{
  return async(dispatch)=>{
    try {
      let result = await getCoursesServices.addCourseUploadImg(formData);
      alert ('Thêm khóa học thành công!')
      console.log({result})
    }
    catch(error){
      console.log({error})
    }
  }
};
export const getDetailsCoursesEditAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await getCoursesServices.getDetailCourse(id);
      // console.log({result})
      dispatch({
        type: UPDATE_COURSE,
        detailCourseEdit: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};