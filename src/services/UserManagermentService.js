import { baseService } from "./baseService";

export class UserManagermentService extends baseService{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    signIn = (thongTinDangNhap) => { //taiKhoan:'', matKhau:''
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
}

export const userManagermentService = new UserManagermentService();