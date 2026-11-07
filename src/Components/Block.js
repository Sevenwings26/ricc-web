import React from "react";
import prayer from "../Assets/Images/block/prayer.jpg";
import PropheticEx from "../Assets/Images/block/propheticEx.jpg";
import worship from "../Assets/Images/block/worship.jpg";
import teaching from "../Assets/Images/block/teaching.jpg";
import PHebby from "../Assets/Images/block/PHebby.jpg";

const Block = () => {
  const BlockData = [
    {
      num: "01",
      title: "Prayer",
      desc: "Deep communion, fervent intercession, and seeking God's face.",
      image: prayer,
      tag: "Intercession",
    },
    {
      num: "02",
      title: "Preaching",
      desc: "Uncompromising biblical truth and revelatory teaching of the Word.",
      image: PHebby,
      tag: "Sound Doctrine",
    },
    {
      num: "03",
      title: "Psalmist (Worship)",
      desc: "Creating an atmosphere of holy adoration through anointed praise.",
      image: worship,
      tag: "Adoration",
    },
    {
      num: "04",
      title: "Press & Media",
      desc: "Propagating the gospel globally through digital outreach and media.",
      image: teaching,
      tag: "Evangelism",
    },
    {
      num: "05",
      title: "Prophetic Expressions",
      desc: "Flowing in spiritual gifts, healing, and prophetic illumination.",
      image: PropheticEx,
      tag: "Spiritual Gifts",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto px-2">
      {BlockData.map((item, index) => (
        <div
          key={index}
          className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 h-80 sm:h-96 text-left flex flex-col justify-between p-5"
        >
          {/* Background Image with Zoom */}
          <img
            src={item.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            alt={item.title}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:via-black/55 transition-all duration-300"></div>

          {/* Top Pill / Number */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/25 tracking-wider">
              {item.num}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/80 text-white backdrop-blur-sm uppercase tracking-wider">
              {item.tag}
            </span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-orange-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-gray-200 mt-2 line-clamp-3 leading-relaxed opacity-90">
              {item.desc}
            </p>
            {/* Accent Expanding Indicator */}
            <div className="w-8 h-1 bg-orange-500 rounded-full mt-3 group-hover:w-16 group-hover:bg-amber-400 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block;