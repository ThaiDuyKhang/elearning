import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService";
import {GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";

export const signInAction = (DangNhap, setShowModal) => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.signIn(DangNhap);
      console.log({ result });

      if (result.status === 200) {
        dispatch({
          type: SIGN_IN,
          thongTinDangNhap: result.data,
        });
        //Redirect to previous page
        history.goBack();
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpAction = (DangKy, countDown) => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.signUp(DangKy);
      console.log({ result });

      if (result.status === 200) {
        dispatch({
          type: SIGN_UP,
          thongTinDangKy: result.data,
        });
        //Redirect to previous page
        history.goBack();
        countDown();
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const getUserListAction = (tuKhoa='') => {
  return async (dispatch) => {
    try {
      const result = await userManagermentService.getUserList(tuKhoa);

      dispatch({
        type: GET_USER_LIST,
        userList: result.data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const deleteUserAction = (taiKhoan)=>{
    return async (dispatch) => {
    try {
      const result = await userManagermentService.deleteUser(taiKhoan);
      alert ('Xoá user thành công!')
      console.log({result})
      
      dispatch(getUserListAction())
      window.location.reload();

    } catch (error) {
      console.log(error.response);
    }
  }
}
