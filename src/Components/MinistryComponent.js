import React from "react";
import Button from "../Resources/button";
// import couple from "../Assets/Images/couple.png";
import campus from "../Assets/Images/ministry/oau.jpg";
import pbootcamp from "../Assets/Images/flyers/p-bootcamp.jpg";
import prison from "../Assets/Images/ministry/prison.jpg";
import { NavLink } from "react-router-dom";
import prayerwatch from "../Assets/Images/flyers/prayer-watch.jpg";
import SM from "../Assets/Images/ministry/singlesMarried.jpg"


const MinistryComponent = () => {
  const ministry = [
    {
      image: prison,
      title: "Jesus Behind Bars",
    },
    {
      image: pbootcamp,
      title: "Prophetic BootCamp"
    },
    {
      image: campus,
      title: "Campus Ministry",
    },
    {
      image: prayerwatch,
      title: "Global Prophetic Prayer Watch"
    },
    {
      image: SM,
      title: "Singles & Married Ministry"
    },
    // {
    //   image: prison,
    //   title: "Code RED – A Mind Shift Experience"
    // },
  ];
  return (
    <div className="bg-white py-1 px-1 md:py-2 md:px-4 lg:px-4">
      <div className="text-center md:flex md:flex-col md:items-center">
        <h2 className="text-4xl md:text-5xl text-black mb-0">
          There’s A Place For Everyone
        </h2>
        <p className="text-base text-gray-600 mb-0 max-w-2xl mx-auto">
      At Recharge Church, no one is left out of God’s move. The Lord has entrusted us with diverse ministries and spiritual dimensions that run weekly, quarterly, and on special occasions — all designed to equip, transform, and ignite destinies. Discover where God is leading you to serve and be nurtured:
        </p>
        <div className="mb-5">
          <NavLink to="/ministries">
            <Button outline btnName="Learn more" className=""/>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 md:gap-10">
        {ministry.map((item, index) => (
          <div 
            key={index} 
            className="w-full max-w-xs md:w-1/2 lg:w-1/3 p-0 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="w-full h-56 rounded-lg overflow-hidden mb-2">
              <img
                src={item.image}
                alt={item.title || "ministry image"}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold text-lg text-black mb-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinistryComponent;
