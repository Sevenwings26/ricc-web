import React from "react";
import banner from "../Assets/Images/banner.png";
import manPray from "../Assets/Images/manPray.png";
import womanpray from "../Assets/Images/womanpray.png";
import worship from "../Assets/Images/womanworship.png";
import biblestudy from "../Assets/Images/bibleStudy.png";
import notalone from "../Assets/Images/notalone.png";

const Block = ({ image, text }) => {
  const BlockData = [
    {
      title: "Prayer",
      image: manPray,
    },
    {
      title: "Preaching",
      image: womanpray,
    },
    {
      title: "Psalmist(Worship)",
      image: worship,
    },
    {
      title: "Press/Propagators of the Gospel",
      image: biblestudy,
    },
    {
      title: "Prophetic Ministry Expressions",
      image: notalone,
    },
  ];
  return (
    <div className="flex gap-10 justify-center flex-wrap w-full">
      {BlockData?.map((item, index) => (
        <div className="flex flex-col rounded-lg overflow-hidden" key={index}>
          <div className="w-[350px] h-[200px] smtab:w-full">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt="blackimages"
            />
          </div>
          <div className="text-center p-3 bg-accent ">
            <p className="font-bold">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block;
