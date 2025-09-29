import React, { useState } from "react";
import founderImage from "../Assets/Images/profile/CharlesAladeprofile1.jpg";
import corporateImage from "../Assets/Images/profile/CharlesAladeprofile1.jpg";
import ministryImage from "../Assets/Images/profile/CharlesAladeprofile2.jpg";


const Founder = () => {
  const [showCorporate, setShowCorporate] = useState(false);
  const [showMinistry, setShowMinistry] = useState(false);

  return (
    <div className="px-0 md:px-16 lg:px-24 py-12 bg-gray-50 text-gray-800">
      {/* Profile Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <img
          src={founderImage}
          alt="Charles Alade"
          className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mx-auto shadow-lg border-4 border-orange-500"
        />
        <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
          Apostle Charles Alade
        </h1>
        <p className="mt-2 text-lg px-6 md:px-0 md:text-xl font-medium text-gray-600">
          A Visionary Leader in Media, Business, and Ministry
        </p>
      </div>

      {/* Intro Section */}
      <div className="text-center px-6 md:px-0 max-w-4xl mx-auto mb-12">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Charles Alade is a dynamic figure whose influence spans across media, advertising, creative enterprise, and Christian ministry. He embodies the rare blend of strategic business leadership and prophetic spiritual insight, making him one of the most versatile voices of our generation.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
          Whether behind a microphone, in the boardroom, or on the prayer altar, Charles consistently delivers with excellence, impact, and authenticity.
        </p>
      </div>

      {/* Ministry Section */}
      <section className="bg-white shadow-lg p-2">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Ministry Image (optional) */}
          <img
            src={ministryImage}
            alt="Ministry Charles"
            className="w-full lg:w-1/3 object-cover p-3 bg-none"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-2">
              Apostle Charles Alade – The Catalyst
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond the corporate world, Charles Alade is also widely known as{" "}
              <span className="font-semibold">Apostle Charles Alade</span>, the President and Founder of{" "}
              <span className="font-semibold">
                Recharge Global Christian Network
              </span>
              .
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Driven by a divine mandate to “raise giants who display excellent
              spiritual leadership while maintaining undeniable earthly relevance,” he is a passionate preacher, prophetic intercessor, author, and convener of global prayer movements that ignite revival and transformation.
            </p>

            {!showMinistry ? (
              <button
                onClick={() => setShowMinistry(true)}
                className="mt-2 text-orange-600 text-center italic hover:underline"
              >
                Read Full Ministry Biography
              </button>
            ) : (
              <div className="mt-6 text-gray-700 leading-relaxed">
                <p>
                  Apostle Charles Alade is the President and Founder of Recharge Global Christian Network, a ministry with a divine mandate to raise giants who will display excellent spiritual leadership
                  while maintaining undeniable earthly relevance.
                </p>
                <p className="mt-3">
                  A passionate preacher of the Word, Apostle Charles ministers with an unusual prophetic grace and a rare ability to stir revival. Widely recognized among ministry leaders as{" "}
                  <span className="italic">“The Catalyst”</span>, he carries an unbridled intercessory anointing that ignites the fire of prayer and passion for God in the hearts of men.
                </p>
                <p className="mt-3">
                 He is the convener of “Acts of Apostles”, a city-wide crusade focused on the teaching of the Word and intense prayer. He also leads the Mountain Prayer Experience and the Global Prophetic Prayer Watch —a visionary movement dedicated to raising one million intercessors to keep the 8 Biblical Prayer Watches, accompanied by dry fasting within a 24-hour period.  
                </p>
                <p className="mt-3">
                    An accomplished author, Apostle Charles penned the best-selling book Overnight Success , a transformational resource that continues to impact lives globally.
                </p>
                <p className="mt-3">
                    His ministry is marked by a deep commitment to building believers who are spiritually sound, socially relevant, and unashamedly committed to advancing the Kingdom of God.
                </p>
                <p className="mt-3">
                    Apostle Charles is joyfully married to his beloved wife, Afolake Alade , and together they are blessed with two lovely children— Ireayomide and Momoreoluwa Alade. 
                </p>
                <p className="mt-3">
                    Wherever he ministers—whether from the pulpit, on the prayer mountain, or through his writings—Apostle Charles Alade remains a voice of revival, a prophetic intercessor, and a Kingdom builder with a global vision.
                </p>
                <button
                  onClick={() => setShowMinistry(false)}
                  className="mt-2 text-gray-600 text-center italic hover:underline"

                >
                  Hide Ministry Biography
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Corporate Executive Section */}
      <section className="bg-white shadow-lg rounded-1xl p-2 mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Corporate Image (optional) */}
          <img
            src={corporateImage}
            alt="Corporate Charles"
            className="w-full lg:w-1/3 object-cover p-3"
          />

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center text-center gap-2">
              Charles Alade – The Corporate Executive
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As the Chief Executive Officer of{" "}
              <span className="font-semibold">Hebbymix Studios Limited</span>,
              Charles leads one of Nigeria’s foremost multimedia solution companies specializing in advertising, media production, promotions, and training.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With extensive experience as a communications strategist and media executive, he has worked with top brands and organizations across industries, building high-impact campaigns and world-class productions.
            </p>

            {!showCorporate ? (
              <button
                onClick={() => setShowCorporate(true)}
                className="mt-2 text-orange-600 text-center italic hover:underline"
              >
                Read Full Corporate Profile
              </button>
            ) : (
              <div className="mt-3 text-gray-700 leading-relaxed">
                <p>
                  Charles Alade is an accomplished communications strategist, media and advertising executive with extensive experience in brand development, media production, and strategic marketing communications. He currently serves as the Chief Executive Officer and Team Lead at Hebbymix Studios Limited, a leading multimedia solutions company providing advertising, media production, promotions, and training services to clients worldwide.
                </p>
                <p className="mt-3">
                  A former General Manager of Royal Roots 92.9FM, Ibadan, Charles is a member of the Forbes Black Community and an Associate Member of the Advertising Regulatory Council of Nigeria <strong>(ARCON)</strong>. He is widely recognized for his expertise in crafting high-impact campaigns and innovative media solutions for brands and organizations across diverse industries.
                </p>
                <p className="mt-3">
                    Over the course of his career, Charles has successfully consulted for top-tier organizations, including WestGate LifeCare Mall, Dominican University, Chi Exotic, Paris Phones & Electronics, BuySimply, LINAR LTD, and many more. His professional voice has been featured in commercials, corporate videos, audiobooks, and promotional content for MTN Nigeria, itel, Zoostyle Fashion, Double Design Paints, Kolaq Alagbo, Mutual Trust Microfinance Bank, FoodCo Nigeria, and other prestigious brands.
                </p>
                <p className="mt-3">
                    An accomplished broadcaster, talent manager, and conference speaker, Charles has hosted programs on renowned radio stations such as Premier FM, Kings FM, Star FM, and Solutions FM, engaging audiences on topics ranging from culture and lifestyle to business and entertainment.
                </p>
                <p className="mt-3">
                    Beyond his executive role, Charles is an international voice artist and coach. He is the founder of Voiceover Bootcamp Africa, a pioneering platform that trains and exports professional African voice actors to the global market. In partnership with industry leaders, including veteran BBC broadcaster Peter Baker, he has trained over 1,200 voice talents across nine Nigerian states, empowering them to compete at an international level.
                </p>
                <p className="mt-3">
                    A multi-instrumentalist and recording artist, Charles has released notable works such as Alapanla, Caesar, and Special to Me. His achievements have earned him multiple recognitions, including the Nigeria Broadcasters Merit Award Team Song Winner (2018), the Create Naija Entertainment Award (2022), and two Most Impactful Media Personality in Nigeria nominations by the Naira Awards. He is also the author of the best-selling book Overnight Success.
                </p>
                <p className="mt-3">
                    Charles Alade embodies creativity, strategic vision, and industry leadership—qualities that continue to drive Hebbymix Studios Limited as a trusted partner in delivering world-class multimedia solutions.
                </p>
                <button
                  onClick={() => setShowCorporate(false)}
                  className="mt-2 text-gray-600 text-center italic hover:underline"
                >
                  Hide Corporate Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
