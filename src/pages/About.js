import React from "react";
import Block from "../Components/Block";
import CoreValues from "../Components/CoreValues";

// import 

const About = () => {
  return (
    <div className="px-[150px] mobile:px-10 ">
      <div className="my-10 mobile:py-5 mobile:text-center">
        <p>
          We, the members of RECHARGE CHURCH, dedicated
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
      
      <div className="py-6 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
          Our Core Values
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          The principles that define who we are, guide our actions, and shape our spiritual mission.
        </p>
        <CoreValues />
      </div>

    </div>
  );
};

export default About;
