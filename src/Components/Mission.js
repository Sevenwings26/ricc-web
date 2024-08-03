import React, { useState, useEffect } from "react";
import children from "../Assets/Images/children.png";
import worship from "../Assets/Images/worship.png";
import pray from "../Assets/Images/pray.png";

const Mission = () => {
  const [positionState, setPositionState] = useState("1");
  const [image1, setImage1] = useState(children);
  const [image2, setImage2] = useState(worship);
  const [image3, setImage3] = useState(pray);

  useEffect(() => {
    setTimeout(() => {
      if (positionState === "1") {
        setPositionState("2");
      } else if (positionState === "2") {
        setPositionState("3");
      } else if (positionState === "3") {
        setPositionState("1");
      }
    }, [3000]);
  }, [positionState]);
  return (
    <div className="">
      <div>
        <p className="text-accent text-center">Mission</p>
        <p className="text-center my-10">
          We are on a mission to empower individuals to impact the world
          profoundly, embodying Kingdom values while achieving success and
          significance in all areas of life whilst boldly raising the banner of
          Christ anywhere they are. We aim to achieve this through outreaches,
          mentorship programs, bootcamps, media storms, and other initiatives.
        </p>
      </div>

      <div className="relative flex justify-between">
        <img
          src={
            positionState === "1"
              ? children
              : positionState === "2"
              ? worship
              : pray
          }
          alt="child"
          className=" h-[250px] "
        />
        <img
          src={
            positionState === "1"
              ? worship
              : positionState === "2"
              ? pray
              : children
          }
          alt="child"
          className=" absolute top-[50%] left-[50%] translate-x-[-50%] h-[250px] animate-fade"
        />
        <img
          src={
            positionState === "1"
              ? pray
              : positionState === "2"
              ? children
              : worship
          }
          alt="child"
          className=" h-[250px] "
        />
      </div>
    </div>
  );
};

export default Mission;
