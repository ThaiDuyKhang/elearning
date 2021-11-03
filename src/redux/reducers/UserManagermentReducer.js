import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
import { SIGN_IN } from "../types/userManagermentType";

let user = {}
if(localStorage.getItem(USER_SIGNIN)){
    user = JSON.parse(localStorage.getItem(USER_SIGNIN))
}

const stateDefault = {
  userSignIn: user,
};

export const UserManagermentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGN_IN:{
        const {thongTinDangNhap} = action;
        localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangNhap));
        localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
        return {...state, userSignIn:thongTinDangNhap}
    }

    default:
      return { ...state };
  }
};
