import React from "react";
import Lifted from "../Assets/Images/liftedHands.png";
import discuss from "../Assets/Images/discuss.png";
import bootcamp from "../Assets/Images/bootcamp.png";
import media from "../Assets/Images/media.png";

const Program = () => {
  const Activities = [
    {
      image: Lifted,
      title: "Outreaches",
      text: "The organization shall conduct regular outreaches to spread the gospel and serve the community.",
    },
    {
      image: discuss,
      title: "Mentorship Programs",
      text: "The organization shall conduct regular outreaches to spread the gospel and serve the community.",
    },
    {
      image: bootcamp,
      title: "Bootcamps",
      text: "Intensive bootcamps shall be organized to train members through different demographic groups in leadership, evangelism, and matters that pertain to them.",
    },
    {
      image: media,
      title: "Media Storms",
      text: "Media initiatives shall be utilized to promote the organization's message and engage a broader audience.",
    },
  ];
  return (
    <div className="px-[150px] mobile:px-10 py-[150px] mobile:py-[70px] flex flex-col gap-10 ">
      {Activities?.map((items, index) => (
        <div key={index} className="flex items-center gap-10 mobile:gap-5">
          <div className="w-full h-full ">
            <img
              src={items.image}
              className="h-full w-full object-cover"
              alt="..."
            />
          </div>

          <div className="mobile:w-[100%]">
            <p className="text-center font-semibold leading-10">
              {items.title}
            </p>
            <p>{items.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
