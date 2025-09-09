import React from "react";
// import banner from "../Assets/Images/banner.png";
// import manPray from "../Assets/Images/manPray.png";
import womanpray from "../Assets/Images/womanpray.png";
// import worship from "../Assets/Images/womanworship.png";
import biblestudy from "../Assets/Images/bibleStudy.png";
import notalone from "../Assets/Images/notalone.png";


import prayer from "../Assets/Images/block/prayer.jpg"
// import prayer1 from "../Assets/Images/block/prayer1.jpg"
import PropheticEx from "../Assets/Images/block/propheticEx.jpg"
import worship from "../Assets/Images/block/worship.jpg"
import teaching from "../Assets/Images/block/teaching.jpg"
import PHebby from "../Assets/Images/block/PHebby.jpg"

const Block = ({ image, text }) => {
  const BlockData = [
    {
      title: "Prayer",
      image: prayer,
    },
    {
      title: "Preaching",
      image: PHebby,
    },
    {
      title: "Psalmist (Worship)",
      image: worship,
    },
    {
      title: "Press/Propagators of the Gospel",
      image: teaching,
    },
    {
      title: "Prophetic Ministry Expressions",
      image: PropheticEx,
    },
  ];
  return (
    // <div className="flex gap-10 justify-center flex-wrap w-full">
    //   {BlockData?.map((item, index) => (
    //     <div className="flex flex-col rounded-lg overflow-hidden" key={index}>
    //       <div className="w-[350px] h-[200px] smtab:w-full">
    //         <img
    //           src={item.image}
    //           className="w-full h-full object-cover"
    //           alt="blackimages"
    //         />
    //       </div>
    //       <div className="text-center p-3 bg-accent ">
    //         <p className="font-bold">{item.title}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="flex flex-col gap-6 w-full items-center md:flex-row md:flex-wrap md:justify-center">
      {BlockData?.map((item, index) => (
        <div 
          key={index}
          className="w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 md:w-80 lg:w-96"
        >
          {/* Image Container */}
          <div className="w-full h-48 md:h-56 lg:h-64">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt={item.title || "image"}
            />
          </div>

          {/* Text Container */}
          <div className="text-center p-4 bg-orange-500 text-white">
            <h3 className="font-bold text-lg">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block;
