import { GROUPID } from "../utilities/Settings/config";
import { baseService } from "./baseService";

export class GetCoursesServices extends baseService{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getCourses = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
    }

    getDetailCourse = (maKhoaHoc) =>{
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
    getCoursesByCategory = (maDanhMuc) => {
        return this.get(
          `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`
        );
      };
}

export const getCoursesServices = new GetCoursesServices();