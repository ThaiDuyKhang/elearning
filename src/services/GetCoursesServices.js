import { GROUPID } from "../utilities/Settings/config";
import { baseService } from "./baseService";

export class GetCoursesServices extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getCourses = () => {
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
  };
  getCoursesAdmin = (tenKhoaHoc) => {
    return this.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUPID}`
    );
  };

  getDetailCourse = (maKhoaHoc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  };
  getCoursesByCategory = (maDanhMuc) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`
    );
  };
  addCourseUploadImg = (formData) => {
    return this.post(`api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData);
  };

  updateCourseUpload = (formData) => {
    return this.post(`api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, formData);
  };

  deleteCourse = (maKhoaHoc) => {
    return this.delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  };
}

export const getCoursesServices = new GetCoursesServices();
