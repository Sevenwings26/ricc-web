import React, { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiNavigation,
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiGlobe,
} from "react-icons/fi";

const Campuses1 = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const campuses = [
    {
      id: "ibadan",
      centre: "Ibadan",
      region: "Oyo State, Nigeria",
      flag: "🇳🇬",
      type: "Headquarters Campus",
      mode: "On-site Campus",
      isHybrid: false,
      pastor: "Pastor Afolake Alade",
      pastorRole: "Resident Minister",
      phone: "+234-8149741286",
      email: "info@rechargechurchglobal.com",
      location: "Recharge Creatives Hub Last floor, White House Complex Agbowo Express Junction, Ibadan",
      services: [
        {
          badge: "Sunday Worship",
          time: "Sundays • 9:00 AM",
        },
        {
          badge: "Midweek Encounter",
          time: "Thursdays • 5:00 PM",
        },
      ],
      mapUrl: "https://maps.google.com/?q=Recharge+Creatives+Hub+White+House+Complex+Agbowo+Express+Junction+Ibadan",
      streamUrl: null,
    },
    {
      id: "atlanta",
      centre: "Atlanta, Georgia",
      region: "United States",
      flag: "🇺🇸",
      type: "International Campus",
      mode: "Hybrid • Online & On-site",
      isHybrid: true,
      pastor: "Apostle Charles Alade",
      pastorRole: "Lead Pastor & Founder",
      phone: "+1(678)-799-5296",
      email: "info@rechargechurchglobal.com",
      location: "5307 Elena Way Woodstock, Georgia 30188.",
      services: [
        {
          badge: "Midweek Encounter",
          time: "Wednesdays • 6:00 PM (EST)",
        },
        {
          badge: "Global Worship",
          time: "Sundays • Live Broadcast",
        },
      ],
      mapUrl: "https://maps.google.com/?q=5307+Elena+Way+Woodstock+Georgia+30188",
      streamUrl: "https://youtube.com/@rechargechurchglobal?si=t15oi5oh-YDipKy5",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Subtitle / Intro - compact margin */}
      <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-6 text-center">
        Join us for worship, spiritual transformation, and fellowship at any of our campuses.
      </p>

      {/* Campus Cards Grid - compact gap and padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
        {campuses.map((campus) => (
          <div
            key={campus.id}
            className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden text-left"
          >
            {/* Top Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400"></div>

            {/* Compact Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-orange-50/50 via-white to-white border-b border-gray-100">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-gray-200 text-gray-700">
                  <span>{campus.flag}</span>
                  <span>{campus.region}</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                    campus.isHybrid
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-orange-50 text-orange-700 border border-orange-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      campus.isHybrid ? "bg-emerald-500 animate-pulse" : "bg-orange-500"
                    }`}
                  ></span>
                  {campus.mode}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {campus.centre}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  <span className="font-semibold text-gray-800">{campus.pastor}</span>
                  <span className="text-gray-400 mx-1.5">•</span>
                  <span className="text-orange-600 font-medium">{campus.pastorRole}</span>
                </p>
              </div>
            </div>

            {/* Compact Body */}
            <div className="px-5 py-4 flex-grow space-y-3.5">
              {/* Service Times */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  <FiClock className="w-3.5 h-3.5 text-orange-500" />
                  <span>Service Times</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {campus.services.map((svc, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs"
                    >
                      <span className="text-[10px] font-bold text-orange-600 block uppercase tracking-wide">
                        {svc.badge}
                      </span>
                      <span className="font-semibold text-gray-800 truncate block mt-0.5">
                        {svc.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span>Venue</span>
                  </span>
                  <button
                    onClick={() => handleCopy(campus.id, campus.location)}
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-600 hover:text-orange-700 cursor-pointer"
                    title="Copy address"
                  >
                    {copiedId === campus.id ? (
                      <>
                        <FiCheck className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="px-3 py-2 rounded-xl bg-amber-50/40 border border-orange-100/60 text-xs text-gray-700 leading-snug">
                  {campus.location}
                </div>
              </div>

              {/* Contact Channels */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Connect
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${campus.phone}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-orange-50/60 border border-gray-100 hover:border-orange-200 text-gray-700 hover:text-orange-600 transition-colors truncate"
                    title={campus.phone}
                  >
                    <FiPhone className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="truncate font-medium">{campus.phone}</span>
                  </a>

                  <a
                    href={`mailto:${campus.email}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-orange-50/60 border border-gray-100 hover:border-orange-200 text-gray-700 hover:text-orange-600 transition-colors truncate"
                    title={campus.email}
                  >
                    <FiMail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="truncate font-medium">{campus.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Compact Action Footer */}
            <div className="px-5 py-3 bg-gray-50/60 border-t border-gray-100 flex items-center gap-2.5">
              <a
                href={campus.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs shadow-sm hover:shadow transition-all duration-150"
              >
                <FiNavigation className="w-3.5 h-3.5" />
                <span>Directions</span>
                <FiExternalLink className="w-3 h-3 opacity-70" />
              </a>

              {campus.streamUrl ? (
                <a
                  href={campus.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-white border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 font-semibold text-xs shadow-sm transition-all duration-150"
                >
                  <FiGlobe className="w-3.5 h-3.5 text-orange-500" />
                  <span>Stream</span>
                </a>
              ) : (
                <a
                  href={`tel:${campus.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-white border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 font-semibold text-xs shadow-sm transition-all duration-150"
                >
                  <FiPhone className="w-3.5 h-3.5 text-orange-500" />
                  <span>Call</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campuses1;