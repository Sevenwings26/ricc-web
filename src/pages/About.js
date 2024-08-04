import React from "react";
import Block from "../Components/Block";
import Values from "../Components/Values";

const About = () => {
  return (
    <div className="px-[150px] mobile:px-10 ">
      <div className="my-10 mobile:py-5 mobile:text-center">
        <p>
          We, the members of RECHARGE INTERNATIONAL CHRISTIAN CENTRE, dedicated
          to raising Kingdom giants who are both kings and priests,
          demonstrating excellence in spiritual leadership and earthly
          relevance, do hereby establish this constitution to govern our
          organization, promote our core values, and fulfill our mission and
          vision.
        </p>
      </div>

      <div className=" ">
        <Block />
      </div>
      <div className="mb-20 h-[300px]  mobile:mb-[10rem]">
        <p className="text-accent my-10 text-center">Core Values </p>
        <p className="text-center my-10 text-3xl">RICC Core Values</p>
        <Values />
      </div>
    </div>
  );
};

export default About;
