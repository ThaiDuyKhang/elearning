import { baseService } from "./baseService";

export class UserManagermentService extends baseService{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    signIn = (thongTinDangNhap) => { //taiKhoan:'', matKhau:''
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
    signUp = (thongTinDangKy) => { //taiKhoan:'', matKhau:''
        return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }
}

export const userManagermentService = new UserManagermentService();