import React from "react";
import "./styles/carouselHome.css";
import { animated, useTrail } from "react-spring";
import ImgBanner from "./../../../../assets/images/ImgBanner2.png";
import { history } from "../../../../App";

const text = [
  { title: "Grow up your skills" },
  { title: "by online courses"},
  { title: "with Cybersoft"},
  {description: "Cybersoft is a Global training provider based across the Vietnam that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree."}
];
const button = [{ button: "Explore" }];

export default function Banner2() {

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
      className="hero flex flex-row w-full justify-center items-center content-center
      bg-no-repeat pb-10 2xl:px-40 bg-auto"
      style={{backgroundColor:"#022AFF50",height: "700px", marginTop: "96px"}}
    >
      <div className="flex-1 content-center">
      {propsUseTrailText.map((propsText, index) => {
        return (
          <div key={index}>
          <animated.h1
            style={propsText}
            className="2xl:text-7xl md:text-5xl sm:text-4xl font-bold text-black
            text-left mb-0 md:mb-1 2xl:mb-5"
          >
            {text[index].title}
          </animated.h1>
          <animated.p
            style={propsText}
            className="2xl:text-lg md:text-lg sm:text-sm text-black font-semibold
            text-left mb-0 md:mb-1 2xl:mb-5">
            {text[index].description}
          </animated.p>
          </div>
        );
      })}
      {propsUseTrailBtn.map((propsBtn, index) => {
        return (
<animated.button
            onClick={(e)=>{
              e.preventDefault();
              history.push('/course')
            }}
            // href=""
            key={index}
            style={propsBtn}
            className="mt-5 px-10 lg:text-3xl hover:bg-red-700 
            rounded-lg text-3xl font-bold text-white hover:text-white flex items-center 
            transition ease-in-out duration-300"
          >
            {button[index].button}
          </animated.button>
        );
      })}
      </div>
      <div className="flex-1 flex justify-center">
      <img className="floating-two" src={ImgBanner} alt="banner" width="100%"/>
      </div> 
         </div>
  );
}
