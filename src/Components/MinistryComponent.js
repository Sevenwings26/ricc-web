import React from "react";
import Button from "../Resources/button";
// import couple from "../Assets/Images/couple.png";
import campus from "../Assets/Images/ministry/oau.jpg";
import prison from "../Assets/Images/ministry/prison.jpg";

const MinistryComponent = () => {
  const ministry = [
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
    // <div className="flex py-5 mobile:flex-col">
    //   <div>
    //     <p className="text-3xl font-semibold w-[50%]">
    //       There’s A Place For Everyone
    //     </p>
    //     <p className="text-[14px]">
    //       The organization includes the following ministries:
    //     </p>
    //     <div className="my-5">
    //       <Button outline btnName="See All Ministries" handleClick />
    //     </div>
    //   </div>

    //   <div className="flex items-center gap-6 mobile:flex-col">
    //     {ministry.map((item, index) => (
    //       <div key={index}>
    //         <div className="h-full w-full">
    //           <img
    //             src={item.image}
    //             alt="people"
    //             className="h-full w-full object-cover"
    //           />
    //         </div>
    //         <p className="text-center my-5 mobile:text-[12px]">{item.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="bg-white py-1 px-1 md:py-2 md:px-4 lg:px-4">
      <div className="text-center md:flex md:flex-col md:items-center">
        <h2 className="text-4xl md:text-5xl text-black mb-4">
          There’s A Place For Everyone
        </h2>
        <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          The organization includes the following ministries:
        </p>
        <div className="mb-5">
          <Button outline btnName="See All Ministries" />
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
