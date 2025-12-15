import React from "react";
import { FiMapPin, FiPhone, FiClock, FiUser } from "react-icons/fi";

const Campuses1 = () => {
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for worship at any of our locations
          </p>
        </div>

        {/* Campus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Campus Header */}
              <div className="bg-gradient-to-r from-red-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {campus.centre}
                      </h3>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                        {campus.mode}
                      </span>
                    </div>
                    <p className="text-gray-600">{campus.pastor}</p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <FiUser className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Details */}
              <div className="p-6">
                {/* Location */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-red-500 mt-1" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Location</p>
                    <address className="text-gray-600 not-italic leading-relaxed">
                      {campus.location}
                    </address>
                  </div>
                </div>

                {/* Service Times */}
                {(campus.service1 || campus.service2) && (
                  <div className="flex gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <FiClock className="w-5 h-5 text-red-500 mt-1" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Service Times</p>
                      <div className="space-y-1">
                        {campus.service1 && (
                          <p className="text-gray-600">{campus.service1}</p>
                        )}
                        {campus.service2 && (
                          <p className="text-gray-600">{campus.service2}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                      <FiPhone className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                      <a
                        href={`tel:${campus.phone}`}
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {campus.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {campus.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(campus.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Campuses1;