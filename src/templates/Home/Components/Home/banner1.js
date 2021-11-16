import React from "react";
import "./styles/carouselHome.css";
import { animated, useTrail } from "react-spring";
import ImgBanner from "./../../../../assets/images/ImgBanner1.png";
import { history } from "../../../../App";

const text = [
  { title: "A lifetime of" },
  { title: "confidence starts" },
  { title: "here Child" },
  {
    description:
      "Cybersoft is a Global training provider based across the Vietnam that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.",
  },
];
const button = [{ button: "Explore" }];

export default function Banner1() {
  const propsUseTrailText = useTrail(text.length, {
    opacity: 1,
    height: 18,
    from: { opacity: 0, height: 0 },
    delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  const propsUseTrailBtn = useTrail(button.length, {
    opacity: 1,
    height: 60,
    marginTop: 60,
    backgroundColor: "#E96036",
    width: "fit-content",
    from: { opacity: 0, height: 0 },
    delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div
      className="hero flex flex-col md:flex-row w-full justify-center items-center content-center
      bg-no-repeat pb-10 2xl:px-40 bg-auto xl:mt-header"
      style={{ backgroundColor: "#1E90FF", height: "700px" }}
    >
      <div className="flex-1 content-center mt-24">
        {propsUseTrailText.map((propsText, index) => {
          return (
            <div key={index}>
              <animated.h1
                style={propsText}
                className="xl:text-7xl xl:mb-5 md:mb-1 leading-snug text-4xl font-bold text-white
            text-left mb-0   px-3"
              >
                {text[index].title}
              </animated.h1>
              <animated.p
                style={propsText}
                className="xl:text-lg md:text-lg text-sm text-white
            text-left mb-0 md:mb-1 2xl:mb-5 px-3"
              >
                {text[index].description}
              </animated.p>
            </div>
          );
        })}
        {propsUseTrailBtn.map((propsBtn, index) => {
          return (
            <animated.button
              onClick={(e) => {
                e.preventDefault();
                history.push("/course");
              }}
              key={index}
              style={propsBtn}
              className="mt-5 lg:px-10 px-6 hover:bg-red-700  mx-3
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
