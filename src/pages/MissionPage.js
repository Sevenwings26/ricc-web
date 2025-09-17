import React from "react";
import banner1 from "../Assets/Images/banner2.jpg";
import banner2 from "../Assets/Images/banner3.jpg";
import CoreValues from "../Components/CoreValues";

const MissionPage = () => {
  return (
    <section className="px-6 md:px-16 py-12">
      {/* Page Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Our Mission & Vision
      </h2>

      <div className="space-y-16">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full h-56 rounded-lg overflow-hidden mb-2">
            <img
              src={banner2}
              alt="Mission illustration"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Mission Text */}
          <div className="py-0 px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We are on a mission to empower individuals to impact the world
              profoundly, embodying Kingdom values while achieving success and
              significance in all areas of life whilst boldly raising the banner of
              Christ anywhere they are.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to achieve this through outreaches, mentorship programs,
              bootcamps, media storms, and other initiatives.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image */}
          <div className="w-full h-56 rounded-lg overflow-hidden mb-2">
            <img
              src={banner1}
              alt="Vision illustration"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Vision Text */}
          <div className="py-0 px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed italic">
              "Our vision is to raise Kingdom giants who are both kings and priests,
              demonstrating excellence in spiritual leadership and earthly relevance."
            </p>
          </div>
        </div>

        <div className="py-0 px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-orange-500 mt-5 mb-2 text-3xl md:text-4xl font-bold uppercase lg:text-4xl">
            Core Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The principles that define who we are, guide our actions, and shape our spiritual mission.
          </p>
          <CoreValues />
        </div>

      </div>
    </section>
  );
};

export default MissionPage;
