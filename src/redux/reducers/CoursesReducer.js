import {
  GET_COURSES,
  GET_DETAILS_COURSES,
  GET_COURSES_BY_CATEGORY,
  PAGINATION,
} from "../types/coursesType";

const stateDefault = {
  arrCourses: [
    {
      maKhoaHoc: "0.14967431092137828",
      biDanh: "php",
      tenKhoaHoc: "PHP",
      moTa: "SMM...",
      luotXem: 100,
      hinhAnh: "https://elearning0706.cybersoft.edu.vn/hinhanh/php_gp01.jpg",
      maNhom: "GP01",
      ngayTao: "20/08/2021",
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: "admin_test",
        hoTen: "seaways",
        maLoaiNguoiDung: "GV",
        tenLoaiNguoiDung: "Giáo vụ",
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "BackEnd",
        tenDanhMucKhoaHoc: "Lập trình Backend",
      },
    },
  ],
  courseDetail: [
    {
      maKhoaHoc: "Backend-00126",
      biDanh: "nodejs-new-2020",
      tenKhoaHoc: "NodeJS New 2020",
      moTa: "Cả trình duyệt JavaScript và Node.js đều chạy trên JavaScript runtime V8 engine. Công cụ này lấy code JavaScript của bạn và convert nó sang mã máy (bytecode) cho việc thực thi nhanh hơn. Mã máy là loại code thấp cấp hơn để máy tính có thể chạy mà không cần biên dịch nó.",
      luotXem: 10,
      hinhAnh:
        "https://elearning0706.cybersoft.edu.vn/hinhanh/nodejs-new-2020.jpg",
      maNhom: "GP05",
      ngayTao: "14/10/2020",
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: "caochihieu123admin",
        hoTen: "Cao Chi Hieu Admin",
        maLoaiNguoiDung: "GV",
        tenLoaiNguoiDung: "Giáo vụ",
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "BackEnd",
        tenDanhMucKhoaHoc: "Lập trình Backend",
      },
    },
  ],
  arrCourseByCate: [],
  pagination: [],
};

export const CoursesReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES: {
      state.arrCourses = action.arrCourses;
      return { ...state };
    }
    case GET_DETAILS_COURSES: {
      state.courseDetail = action.courseDetail;
      return { ...state };
    }
    case GET_COURSES_BY_CATEGORY: {
      state.arrCourses = action.arrCourses;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
