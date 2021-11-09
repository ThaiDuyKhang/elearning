import React, { Fragment } from "react";
import Lazyload from "react-lazyload";
import BreadCrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import RatingsDetailsCourse from "../Components/Home/Ratings/ratingsDetailsCourse";
import "./Style/StylePages.css";
import dinhphucnguyen from "./../../../assets/images/dinhphucnguyen.jpg";
import dangchithanh from "./../../../assets/images/dangchithanh.jpg";
import tranquangsi from "./../../../assets/images/tranquangsi.jpg";

export default function Instructor() {
  const mentorList = [
    {
      name: "Đinh Phúc Nguyên",
      img: dinhphucnguyen,
      fb: "https://fb.com/nguyen.dinhphucnguyen",
      github: "",
    },
    {
      name: "Đăng Chí Thanh",
      img: dangchithanh,
      fb: "https://fb.com/chithanh.tist",
      github: "https://github.com/tcdtist",
    },
    {
      name: "Trần Quang Sĩ",
      img: tranquangsi,
      fb: "https://fb.com/quangsi.dev",
      github: "https://github.com/quangsiDev",
    },
  ];

  const renderListMentor = () => {
    return mentorList.map((item, index) => {
      return (
        <div
          key={index}
          className="instructor_img relative lg:mb-12 mx-5 px-6 py-12 bg-white rounded-3xl shadow-xl"
        >
          <div className="text-center">
            <Lazyload height={200}>
              <img
                alt={item.name}
                className="w-full mb-8 object-cover object-center rounded-lg inline-block"
                src={item.img}
              />
            </Lazyload>
            <h2
              className="instructor_name  text-3xl font-bold"
              style={{ color: "#E96036" }}
            >
              {item.name}
            </h2>
            <div className="instructor_rating flex justify-center">
              <RatingsDetailsCourse />
            </div>
            <div className="grid grid-flow-col gap-2 mt-4">
              <a
                href={item.fb}
                title="Facebook"
                target="_blank"
                className="place-self-end"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>
              <a
                href={item.github}
                title="Github"
                target="_blank"
                rel="noreferrer"
                className="place-self-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="instructor--header w-full">
        <div className="container py-32">
          <p className="mb-5">
            <BreadCrumb />
          </p>
          <h1 className="text-4xl uppercase">Instructor</h1>
        </div>
      </div>
      <div className="courses--body my-24">
        <div className="container">
          <div className="grid grid-cols-4 -m-4">{renderListMentor()}</div>
        </div>
      </div>
    </Fragment>
  );
}
