import React from "react";
import banner from "../Assets/Images/banner.png";

const Block = ({ image, text }) => {
  const BlockData = [
    {
      title: "Prayer",
      image: banner,
    },
    {
      title: "Preaching",
      image: banner,
    },
    {
      title: "Psalmist(Worship)",
      image: banner,
    },
    {
      title: "Press/Propagators of the Gospel",
      image: banner,
    },
    {
      title: "Prophetic Ministry Expressions",
      image: banner,
    },
  ];
  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {BlockData?.map((item, index) => (
        <div className="flex flex-col rounded-lg overflow-hidden" key={index}>
          <div className="w-[350px] h-[200px]">
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
