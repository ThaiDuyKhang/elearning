import React from "react";
import "./styles/carouselHome.css";
import { animated, useTrail } from "react-spring";
import ImgBanner from "./../../../../assets/images/ImgBanner2.png";
import { history } from "../../../../App";

const text = [
  { title: "Grow up your skills by online courses with Cybersoft" },
];
const des = [
  {
    description:
      "Cybersoft is a Global training provider based across the Vietnam that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.",
  },
];
const button = [{ button: "Explore" }];

export default function Banner2() {
  const propsUseTrailText = useTrail(text.length, {
    opacity: 1,
    from: { opacity: 0, height: 0 },
    height:220,
    delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  const propsUseTrailDes = useTrail(des.length, {
    opacity: 1,
    from: { opacity: 0, height: 0 },
    delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  const propsUseTrailBtn = useTrail(button.length, {
    opacity: 1,
    from: { opacity: 0, height: 0 },
    delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div
      className="flex flex-col md:flex-row w-full justify-center items-center content-center
      bg-no-repeat pb-10 2xl:px-40 bg-auto xl:mt-header"
      style={{ backgroundColor: "#1E90FF", height: "700px" }}
    >
      <div className="hero flex-1 content-center">
        {propsUseTrailText.map((propsText, index) => {
          return (
            <div key={index}>
              <animated.h1
                style={propsText}
                className="hero-title xl:text-7xl xl:mb-5 md:mb-1 text-4xl font-bold text-white text-left mb-2 sm:mb-6 px-3"
              >
                {text[index].title}
              </animated.h1>
            </div>
          );
        })}
        {propsUseTrailDes.map((propsDes, index) => {
          return (
            <div key={index}>
              <animated.p
                style={propsDes}
                className="hero-description xl:text-lg md:text-lg text-base text-white
            text-left mb-0 md:mb-1 2xl:mb-5 px-3 py-4 h-16 sm:h-16"
              >
                {des[index].description}
              </animated.p>
            </div>
          );
        })}
        {propsUseTrailBtn.map((propsBtn, index) => {
          return (
            <animated.button
              onClick={(e) => {
                e.preventDefault();
                history.push("/courses");
              }}
              key={index}
              style={propsBtn}
              className="hero-explore-btn sm:h-5 sm:mt-16 px-6 py-9 w-fit bg-main-500 lg:px-10 hover:bg-red-500  mx-3
              rounded-lg md:text-3xl lg:font-bold text-white hover:text-white flex items-center 
              transition ease-in-out duration-300"
            >
              {button[index].button}
            </animated.button>
          );
        })}
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="floating-two"
          src={ImgBanner}
          alt="banner"
          width="100%"
        />
      </div>
    </div>
  );
}
