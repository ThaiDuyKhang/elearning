import {
  GET_COURSES,
  GET_DETAILS_COURSES,
  GET_COURSES_BY_CATEGORY,
  GET_COURSES_ADMIN,
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

  courseDetail: {},
  arrCourseByCate: {},
  detailCourseEdit: {},
};

export const CoursesReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES: {
      state.arrCourses = action.arrCourses;
      return { ...state };
    }
    case GET_COURSES_ADMIN: {
      state.arrCoursesAdmin = action.arrCoursesAdmin;
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
