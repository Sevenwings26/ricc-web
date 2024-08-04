import React from "react";
import Lifted from "../Assets/Images/liftedHands.png";
import discuss from "../Assets/Images/discuss.png";
import bootcamp from "../Assets/Images/bootcamp.png";
import media from "../Assets/Images/media.png";
import { IoArrowForward } from "react-icons/io5";
const Activities = () => {
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
    <div className="flex justify-between overflow-hidden ">
      <div className="w-[100vh]] flex pr- animate-slideshow ">
        {Activities.map((activity, index) => (
          <div
            key={index}
            className="w-[500px]  whitespace-nowrap  mobile:h-[400px] pr-5"
          >
            <div className="h-[300px] rounded-lg overflow-hidden mobile:h-[200px]">
              <img
                src={activity.image}
                className="h-full w-full object-cover"
                alt="..."
              />
            </div>

            <div className="my-5">
              <p className="flex items-center">
                <span>{activity.title}</span>
                <IoArrowForward />
              </p>

              <p className="text-[14px] text-wrap">{activity.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100vh]] flex pr- animate-slideshow ">
        {Activities.map((activity, index) => (
          <div
            key={index}
            className="w-[500px]  whitespace-nowrap  mobile:h-[400px] pr-5"
          >
            <div className="h-[300px] rounded-lg overflow-hidden mobile:h-[200px]">
              <img
                src={activity.image}
                className="h-full w-full object-cover"
                alt="..."
              />
            </div>

            <div className="my-5">
              <p className="flex items-center">
                <span>{activity.title}</span>
                <IoArrowForward />
              </p>

              <p className="text-[14px] text-wrap">{activity.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
