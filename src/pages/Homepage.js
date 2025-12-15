import React from "react";
import Block from "../Components/Block";
// import Values from "../Components/Values";
import CoreValues from "../Components/CoreValues";
// import Mission from "../Components/Mission";
// import Boxcomponent from "../Components/Boxcomponent";
import Button from "../Resources/button";
import MinistryComponent from "../Components/MinistryComponent";
import Activities from "../Components/Activities";
import { NavLink } from "react-router-dom";
// import Campuses from "../Components/Campuses";
import Campuses1 from "../Components/Campuses1";


const Homepage = () => {
  return (
    <div className="w-full">
      {/* <p className="text-accent my-10 text-center"> */}
      <div className="py-6 px-2 md:px-12 lg:px-24">
        {/* <p className="text-orange-500 mb-2 text-center text-lg mt-5 lg:text-4xl font-semibold uppercase tracking-wide"></p> */}
        <p className="text-center text-3xl">
          We are committed to
        </p>
        <div className="mt-2">
          <Block />
        </div>
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

      <div className="py-6 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
          Ministries
        </h2>
        <MinistryComponent />
      </div>
      
      <div className="py-6 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
          Campuses
        </h2>
        <Campuses1 />
      </div>
      

      <div className="py-6 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
            Membership & Governance
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          The organization shall be governed by a Board of Directors, consisting of a President/Founder, Vice President, Secretary, Treasurer, and members of an executive committee that would relate in direct line with different groups in the membership.
        </p>
        <NavLink to="/membership">
          <Button outline btnName="Learn more" className=""/>
        </NavLink>
      </div>

      <div className="py-6 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
          Activities & Programs
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We welcome you to experience the life-changing presence of God with us. Our doors are open <span className="font-semibold">every Sunday</span> for worship, <span className="font-semibold">every Thursday</span> for midweek encounters, and at different times for retreats, evangelism outreaches, and prophetic programs. 
        </p>
        <Activities />
      </div>
      
    </div>
  );
};

export default Homepage;
