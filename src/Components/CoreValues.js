import React from "react";
import {
  FaFire,       // Revival
  FaHandsHelping, // Empathy
  FaStar,       // Charisma
  FaCross,      // Holiness
  FaBalanceScale, // Accountability
  FaLeaf,       // Retreat
  FaBolt,       // Guts
  FaGlobe       // Evangelism
} from "react-icons/fa";

const values = [
  { name: "Revival", icon: <FaFire className="text-orange-600" />, desc: "Igniting spiritual awakening and transformation." },
  { name: "Empathy", icon: <FaHandsHelping className="text-blue-600" />, desc: "Walking in love, compassion, and understanding." },
  { name: "Charisma", icon: <FaStar className="text-yellow-500" />, desc: "Exercising divine gifts with excellence." },
  { name: "Holiness", icon: <FaCross className="text-purple-600" />, desc: "Living consecrated and set apart for God." },
  { name: "Accountability", icon: <FaBalanceScale className="text-green-600" />, desc: "Upholding integrity and transparency in all things." },
  { name: "Retreat", icon: <FaLeaf className="text-teal-600" />, desc: "Finding strength in reflection, prayer, and renewal." },
  { name: "Guts", icon: <FaBolt className="text-red-600" />, desc: "Courage to stand boldly for truth and faith." },
  { name: "Evangelism", icon: <FaGlobe className="text-indigo-600" />, desc: "Proclaiming the gospel to all nations." },
];

const CoreValues = () => {
  return (
    <div className="py-6 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {value.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
