import { history } from "../../App";
import {useLocation} from 'react-router-dom';
import { getCoursesServices } from "../../services/GetCoursesServices";
import {
  GET_COURSES,
  UPDATE_COURSE,
  ADD_NEW_COURSE_ADMIN,
} from "../types/coursesType";

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

export const addCourseUploadImgAction  = (formData) =>{
  return async(dispatch)=>{
    try {
      let result = await getCoursesServices.addCourseUploadImg(formData);
      if(result.status === 200){
        dispatch({
          type:ADD_NEW_COURSE_ADMIN,
          newCourse: result.data,
        })
        history.push('/admin/courses')
      }
      alert ('Thêm khóa học thành công!');
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
export const updateCourseAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await getCoursesServices.updateCourseUpload(formData);
      alert ('Cập nhật khóa học thành công!')
      console.log({result})
      
      dispatch(getCoursesAdminAction())
      history.push('/admin/courses')

    } catch (errors) {
      console.log(errors);
      
    }
  };
};
export const deleteCourseAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await getCoursesServices.deleteCourse(maKhoaHoc);
      alert ('Xoá khóa học thành công!')
      console.log({result})
      
      dispatch(getCoursesAdminAction())
      window.location.reload();

    } catch (errors) {
      console.log(errors);
      
    }
  };
};
