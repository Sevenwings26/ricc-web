import React from "react";
import revival from "../Assets/Icons/revival.svg";
import empathy from "../Assets/Icons/empathy.svg";
import charisma from "../Assets/Icons/Charisma.svg";
import holiness from "../Assets/Icons/Holiness.svg";
import accountable from "../Assets/Icons/accountability.svg";
import retreat from "../Assets/Icons/retreat.svg";
import guts from "../Assets/Icons/Grace.svg";
import evangelism from "../Assets/Icons/Excellence.svg";


const Values = () => {
  const coreValues = [
    {
      icon: revival,
      initial: "R",
      title: "evival",
    },
    {
      icon: empathy,
      initial: "E",
      title: "mpathy",
    },
    {
      icon: charisma,
      initial: "C",
      title: "harisma",
    },
    {
      icon: holiness,
      initial: "H",
      title: "oliness",
    },
    {
      icon: accountable,
      initial: "A",
      title: "ccountability",
    },
    {
      icon: retreat,
      initial: "R",
      title: "etreat",
    },
    {
      icon: guts,
      initial: "G",
      title: "uts",
    },
    {
      icon: evangelism,
      initial: "E",
      title: "vangelism",
    },
  ];
  return (
    <div className="flex overflow-hidden w-[100%] relative ">
      <div className=" animate-slideshow flex justify-between">
        {coreValues?.map((item, index) => (
          <div
            className="flex flex-col items-center gap-5 mx-[40px]"
            key={index}
          >
            <div>
              <img src={item.icon} alt="values" />
            </div>

            <p className="font-bold">
              <span className="text-accent">{item.initial}</span>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="animate-slideshow flex justify-between ">
        {coreValues?.map((item, index) => (
          <div
            className="flex flex-col items-center gap-5 mx-[40px]"
            key={index}
          >
            <div>
              <img src={item.icon} alt="values" />
            </div>

            <p className="font-bold">
              <span className="text-accent">{item.initial}</span>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;




// revival
// empathy
// charisma
// holiness
// accountability
// retreat
// guts
// evangelism
