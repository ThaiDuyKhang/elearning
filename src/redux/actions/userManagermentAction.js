import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService"
import { SIGN_IN } from "../types/userManagermentType";

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
                //close Modal SignIn
                setShowModal(false)
            }


        } catch (error) {
            console.log(error)
        }
    }
}