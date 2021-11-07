import React, { Fragment, useState } from "react";
import './../../style/StylePages.css';
import { Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addCourseUploadImgAction } from "../../../../redux/actions/coursesAdminActions";
import { GROUPID } from "../../../../utilities/Settings/config";

export default function AddNewCourses() {
  const [componentSize, setComponentSize] = useState("default");

  const author = useSelector(
    (state) => state.UserManagermentReducer.userSignIn
  );

  const [imgSrc, setImgSrc] = useState("");

  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeFile = (e) => {
    //Lấy file ra từ event
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      //Tạo đối tượng đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
      //Đem dữ liệu lưu vào formik
      formik.setFieldValue("hinhAnh", file);
    }
  };
  const toDay = new Date();
  const time = toDay.getHours() + toDay.getMinutes() + toDay.getSeconds();
  const date =
    toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear();

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: time,
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: null,
      maNhom: GROUPID,
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: author.taiKhoan,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log({values})
      //Gọi API gửi giá trị FormData về backend
      dispatch(addCourseUploadImgAction(formData));
    },
  });

  return (
    <Fragment>
      <div className="py-12">
        <div className="max-w-7xl flex flex-row items-center mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <span
            className="text-3xl font-semibold text-gray-900"
            style={{ color: "#E96036" }}
          >
            Add new course
          </span>
        </div>
        <div className="max-w-7xl mx-auto xl:px-0 sm:px-6 md:px-8">
          <div
            className="my-6 py-12 shadow-xl bg-white"
            style={{ border: "1px solid #ddd" }}
          >
            <Form
              onSubmitCapture={formik.handleSubmit}
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Form.Item label="Tên khóa học">
                <Input name="tenKhoaHoc" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Danh mục khóa học">
                <Select name="maDanhMucKhoaHoc" placeholder="Chọn danh mục khóa học" onChange={(values)=> formik.setFieldValue('maDanhMucKhoaHoc', values )} >
                  <Select.Option value="BackEnd">Back-end Development</Select.Option>
                  <Select.Option value="FrontEnd">Front-end Development</Select.Option>
                  <Select.Option value="FullStack">Full Stack Development</Select.Option>
                  <Select.Option value="Design">Web Desgin</Select.Option>
                  <Select.Option value="DiDong">Mobile Development</Select.Option>
                  <Select.Option value="TuDuy">Mindset Development</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input.TextArea name="moTa" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Hình đại diện">
                <input
                  type="file"
                  name="hinhAnh"
                  onChange={handleChangeFile}
                />
                <br />
                <div style={{ width: 200, height: "auto" }}>
                  <img src={imgSrc} alt="" />
                </div>
              </Form.Item>
              <Form.Item label="Ngày tạo">{date}</Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
                label=""
              >
                <button
                  className="py-2 px-8 hover:shadow-xl transition-all duration-150"
                  type="submit"
                  style={{ backgroundColor: "#e96036", color: "#fff" }}
                >
                  Add course
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
