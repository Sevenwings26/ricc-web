import React from "react";
// Import icons from react-icons/fi (Feather Icons)
import { FiMapPin, FiPhone, FiMail, FiClock, FiUser } from "react-icons/fi";

const Campuses = () => {
  const campuses = [
    {
      centre: "Ibadan",
      mode: "On-site",
      phone: "+234-8149741286",
      location: "L.I.F.E Creatives Hub, 1st-floor, Iyaniwura House, Ashi-Junction, Bashorun, Ibadan.",
      pastor: "Pastor Afolake Alade",
      service1: "Sundays - 9am",
      service2: "Thursdays - 5pm",
      email: "info@rechargechurchglobal.com",
    },
    {
      centre: "Atlanta, Georgia",
      mode: "Online & On-site",
      phone: "+1(941)730-2274",
      location: "5307 Elena Way Woodstock, Georgia 30188.",
      pastor: "Apostle Charles Alade",
      service1: "",
      service2: "Wednesdays - 6pm (EST)",
      email: "info@rechargechurchglobal.com",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 md:py-20 md:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl text-black mb-0">
          Find our campuses to worship
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-stretch justify-center gap-8 md:gap-10">
        {campuses.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm md:w-[45%] lg:w-[30%] p-0 bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]"
          >
            <div className="p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 border-b-2 border-red-500 pb-2">
                {item.centre} Campus
              </h3>
              
              {/* Pastor */}
              <div className="flex items-center text-gray-800 mb-3">
                <FiUser className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="font-semibold">{item.pastor}</span>
              </div>

              {/* Location */}
              <div className="flex items-start text-gray-700 mb-3">
                <FiMapPin className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">{item.location}</address>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-lg font-semibold text-gray-900 mb-3">Service Times:</p>

                {/* Service 1 */}
                {item.service1 && (
                    <div className="flex items-center text-gray-700 mb-2">
                        <FiClock className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span>{item.service1}</span>
                    </div>
                )}
                
                {/* Service 2 */}
                {item.service2 && (
                    <div className="flex items-center text-gray-700 mb-2">
                        <FiClock className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span>{item.service2}</span>
                    </div>
                )}
              </div>
              
              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center text-gray-700">
                  <FiPhone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <a href={`tel:${item.phone}`} className="hover:text-red-600 transition duration-150">{item.phone}</a>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiMail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <a href={`mailto:${item.email}`} className="hover:text-red-600 transition duration-150">{item.email}</a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campuses;
