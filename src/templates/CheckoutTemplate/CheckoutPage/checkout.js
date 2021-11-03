import React, { Fragment, useState } from "react";
import "./../Style/CheckoutStyle.css";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import { Radio, Space } from "antd";
import { useSelector } from "react-redux";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";

export default function Checkout(props) {
  const courseDetail = useSelector(
    (state) => state.CoursesReducer.courseDetail
  );

  // let { id } = props.match.params;

  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const [state, setState] = useState({ value: 1 });

  const radioPayment = (e) => {
    setState({
      value: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="checkout--header w-full">
        <div className="container py-28">
        <p className="mb-5"><BreadCrumb/></p>
          <h1 className="text-4xl uppercase">Checkout</h1>
        </div>
      </div>
      <div className="checkout--body">
        <div className="container">
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div>
              <div className="payment p-5 my-8 rounded-md flex justify-between items-center">
                <div className="flex-1">
                  <span className="text-xl font-semibold text-indigo-700">
                    Payment
                  </span>
                </div>
                <div className="flex-1 justify-end flex items-center">
                  <img src="/images/secure.svg" alt="" width="10%" />
                  <span className="text-lg pl-1">Secure Connection</span>
                </div>
              </div>
              <Radio.Group onChange={radioPayment} value={state.value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    <span className="text-xl">Direct payment</span>
                  </Radio>
                  <Collapse onChange={callback}>
                    <Panel
                      header={<span className="text-xl">Internet Banking</span>}
                      key="1"
                    >
                      <div className="grid grid-flow-col grid-cols-6">
                        <div className="col-span-1">
                          <Radio value={2}>
                            <img
                              src="/images/techcombank.png"
                              width="100%"
                              alt=""
                            />
                          </Radio>
                        </div>
                        <div className="col-span-1">
                          <Radio value={3}>
                            <img src="/images/vib.png" width="100%" alt="" />
                          </Radio>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>

                  <Radio value={4}>
                    <img src="/images/paypal.png" alt="paypal" width="100%" />
                  </Radio>
                  <Radio value={5}>
                    <img src="/images/momo.png" alt="momo" width="8%" />
                  </Radio>
                </Space>
              </Radio.Group>
              <textarea
                className="p-5 w-full mt-5"
                placeholder="Note to Administrator"
              ></textarea>
              <button className="mt-5 py-5 w-full bg-indigo-500 hover:bg-indigo-700 text-lg rounded-md transition duration-150 text-white">
                Place order
              </button>
            </div>
            <div className="relative">
              <div className="your-order p-5 my-8 rounded-md text-center">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Your Order
                </h4>
              </div>
              <div className="your-order-body border-2 rounded-md p-5">
                <div className="grid grid-flow-col grid-cols-12 gap-2">
                  <div className="col-span-2">
                    <img src={courseDetail?.hinhAnh} alt={courseDetail.tenKhoaHoc} />
                  </div>
                  <div className="pl-5 col-span-8 place-self-center justify-self-start text-lg">
                    <Link to={`/courses/detail/${courseDetail.maKhoaHoc}`}>
                      {courseDetail?.tenKhoaHoc?.length > 70 ? (
                        <span>{courseDetail?.tenKhoaHoc?.slice(0, 70)}...</span>
                      ) : (
                        <span>{courseDetail?.tenKhoaHoc}</span>
                      )}
                    </Link>
                  </div>
                  <div className="col-span-2 place-self-center justify-self-end">
                    <span className="text-lg text-gray-500">Free</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t-2 grid grid-flow-col grid-cols-12 gap-2 place-content-center">
                  <div className="col-span-10  justify-self-start">
                    <h3 className="text-lg text-gray-500">Subtotal</h3>
                  </div>
                  <div className="col-span-2 justify-self-end">
                    <span className="text-lg text-gray-500">Free</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t-2 grid grid-flow-col grid-cols-12 gap-2 place-content-center">
                  <div className="col-span-10  justify-self-start">
                    <h3 className="text-lg text-gray-500">Total</h3>
                  </div>
                  <div className="col-span-2 justify-self-end">
                    <span className="text-2xl font-semibold ">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
