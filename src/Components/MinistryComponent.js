import React from "react";
import Button from "../Resources/button";
import couple from "../Assets/Images/couple.png";
import campus from "../Assets/Images/campus.png";
import prison from "../Assets/Images/prison.png";

const MinistryComponent = () => {
  const ministry = [
    {
      image: couple,
      title: "Single/Married Ministry",
    },

    {
      image: campus,
      title: "Campus Ministry",
    },

    {
      image: prison,
      title: "Prison Ministry",
    },
  ];
  return (
    <div className="flex  py-5">
      <div>
        <p className="text-3xl font-semibold w-[50%]">
          There’s A Place For Everyone
        </p>
        <p className="text-[14px]">
          The organization shall include the following ministries:
        </p>
        <div className="my-5">
          <Button outline btnName="See All Ministries" handleClick />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {ministry.map((item, index) => (
          <div key={index}>
            <div className="h-full w-full">
              <img
                src={item.image}
                alt="people"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-center my-5">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinistryComponent;
