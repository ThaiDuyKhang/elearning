import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService"
import { SIGN_IN, SIGN_UP } from "../types/userManagermentType";

export const signInAction = (DangNhap,setShowModal)=>{
    return async (dispatch) =>{
        try {
            const result = await userManagermentService.signIn(DangNhap);
            console.log({result});

            if (result.status === 200){
                dispatch({
                    type: SIGN_IN,
                    thongTinDangNhap: result.data,
                })
                //Redirect to previous page
                history.goBack();
                setShowModal(false)
            }


        } catch (error) {
            console.log(error)
        }
    }
}

export const signUpAction = (DangKy,countDown)=>{
    return async (dispatch) =>{
        try {
            const result = await userManagermentService.signUp(DangKy);
            console.log({result});

            if (result.status === 200){
                dispatch({
                    type: SIGN_UP,
                    thongTinDangKy: result.data,
                })
                //Redirect to previous page
                history.goBack();
                countDown();
            }


        } catch (error) {
            console.log(error.response?.data)
        }
    }
}