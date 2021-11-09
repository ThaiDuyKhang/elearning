import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
import { SIGN_IN, SIGN_UP } from "../types/userManagermentType";

let user = {}
let newUser = {}

if(localStorage.getItem(USER_SIGNIN)){
    user = JSON.parse(localStorage.getItem(USER_SIGNIN))
}

const stateDefault = {
  userSignIn: user,
  userSignUp: newUser
};

export const UserManagermentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGN_IN:{
        const {thongTinDangNhap} = action;
        localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangNhap));
        localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
        return {...state, userSignIn:thongTinDangNhap}
    }
    case SIGN_UP:{
        const {thongTinDangKy} = action;
        localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDangKy));
        localStorage.setItem(TOKEN, thongTinDangKy.accessToken);
        return {...state, userSignUp:thongTinDangKy}
    }

    default:
      return { ...state };
  }
};

