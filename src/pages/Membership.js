import React from "react";
import preacher from "../Assets/Images/preacher.png";

const sections = [
  {
    title: "Governance",
    content:
      "The organization shall be governed by a Board of Directors, consisting of a President/Founder, Vice President, Secretary, Treasurer, and members of an executive committee that would relate in direct line with different groups in the membership.",
  },
  {
    title: "Membership",
    content:
      "Membership shall be open to all individuals who share our vision, mission, and core values.",
  },
  {
    title: "Rights and Responsibilities",
    content:
      "Members have the right to participate in all activities of the Ministry as pertains to them. They shall be responsible for upholding the organization's values and actively contributing to its mission.",
  },
  {
    title: "Leadership Structure",
    content:
      "Members have the right to participate in all activities of the Ministry as pertains to them. They shall be responsible for upholding the organization's values and actively contributing to its mission.",
  },
  {
    title: "Election and Terms",
    content:
      "Officers are selected by the President/Founder, Vice President, and Secretary, based on spiritual and physical scrutiny, and serve for a term of two years, with the possibility of re-selection. Executive committee members who serve as heads of various member groups will be elected by members.",
  },
  {
    title: "Meetings",
    content:
      "The Board of Directors meet regularly to discuss and make decisions regarding the organization's activities and direction. General membership meetings shall be held occasionally as determined by the Board of Directors.",
  },
];

const Membership = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-32">
      {/* Top Header with Image */}
      {/* <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Membership
          </h1>
          <p className="text-gray-600">
            Discover how to become part of our mission and the responsibilities
            of membership in our spiritual family.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={preacher}
            alt="Membership illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div> */}

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-orange-600 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
