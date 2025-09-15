














import React, { useState } from 'react';
import { IoArrowForward, IoClose } from 'react-icons/io5';

const Founder = ({ FounderImage, CorporateLogo }) => { // Assume you pass in the images as props
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState(false);
  const [isMinistryModalOpen, setIsMinistryModalOpen] = useState(false);

  const corporateProfile = {
    title: 'Charles Alade – Chief Executive Officer, Hebbymix Studios Limited',
    text: `Charles Alade is an accomplished communications strategist, media and advertising executive with extensive experience in brand development, media production, and strategic marketing communications. He currently serves as the Chief Executive Officer and Team Lead at Hebbymix Studios Limited, a leading multimedia solutions company providing advertising, media production, promotions, and training services to clients worldwide.
    A former General Manager of Royal Roots 92.9FM, Ibadan, Charles is a member of the Forbes Black Community and an Associate Member of the Advertising Regulatory Council of Nigeria (ARCON). He is widely recognized for his expertise in crafting high-impact campaigns and innovative media solutions for brands and organizations across diverse industries.

    Over the course of his career, Charles has successfully consulted for top-tier organizations, including WestGate LifeCare Mall, Dominican University, Chi Exotic, Paris Phones & Electronics, BuySimply, LINAR LTD, and many more. His professional voice has been featured in commercials, corporate videos, audiobooks, and promotional content for MTN Nigeria, itel, Zoostyle Fashion, Double Design Paints, Kolaq Alagbo, Mutual Trust Microfinance Bank, FoodCo Nigeria, and other prestigious brands.

    An accomplished broadcaster, talent manager, and conference speaker, Charles has hosted programs on renowned radio stations such as Premier FM, Kings FM, Star FM, and Solutions FM, engaging audiences on topics ranging from culture and lifestyle to business and entertainment.

    Beyond his executive role, Charles is an international voice artist and coach. He is the founder of Voiceover Bootcamp Africa, a pioneering platform that trains and exports professional African voice actors to the global market. In partnership with industry leaders, including veteran BBC broadcaster Peter Baker, he has trained over 1,200 voice talents across nine Nigerian states, empowering them to compete at an international level.

    A multi-instrumentalist and recording artist, Charles has released notable works such as Alapanla, Caesar, and Special to Me. His achievements have earned him multiple recognitions, including the Nigeria Broadcasters Merit Award Team Song Winner (2018), the Create Naija Entertainment Award (2022), and two Most Impactful Media Personality in Nigeria nominations by the Naira Awards. He is also the author of the best-selling book Overnight Success.

    Charles Alade embodies creativity, strategic vision, and industry leadership—qualities that continue to drive Hebbymix Studios Limited as a trusted partner in delivering world-class multimedia solutions.`,
  };

  const ministryProfile = {
    title: 'Apostle Charles Alade – Ministry Biography',
    text: `Apostle Charles Alade is the President and Founder of Recharge Global Christian Network, a ministry with a divine mandate to raise giants who will display excellent spiritual leadership while maintaining undeniable earthly relevance. 
    
    A passionate preacher of the Word, Apostle Charles ministers with an unusual prophetic grace and a rare ability to stir revival. Widely recognized among ministry leaders as “The Catalyst” , he carries an unbridled intercessory anointing that ignites the fire of prayer and passion for God in the hearts of men.
    
    He is the convener of “Acts of Apostles”, a city-wide crusade focused on the teaching of the Word and intense prayer. He also leads the Mountain Prayer Experience and the Global Prophetic Prayer Watch —a visionary movement dedicated to raising one million intercessors to keep the 8 Biblical Prayer Watches, accompanied by dry fasting within a 24-hour period.

    An accomplished author, Apostle Charles penned the best-selling book Overnight Success , a transformational resource that continues to impact lives globally.

    His ministry is marked by a deep commitment to building believers who are spiritually sound, socially relevant, and unashamedly committed to advancing the Kingdom of God.

    Apostle Charles is joyfully married to his beloved wife, Afolake Alade , and together they are blessed with two lovely children— Ireayomide and Momoreoluwa Alade. 

    Wherever he ministers—whether from the pulpit, on the prayer mountain, or through his writings—Apostle Charles Alade remains a voice of revival, a prophetic intercessor, and a Kingdom builder with a global vision.`,
  };

  return (
    <div className="bg-gray-50 text-gray-800">      
      {/* Hero Section: Main Intro */}
      <section className="bg-orange-500 text-white py-20 px-6 md:px-12 lg:px-24 text-center relative">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            A Visionary Leader in Media, Business, and Ministry
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6">
            Charles Alade is a dynamic figure whose influence spans media, advertising, creative enterprise, and Christian ministry. He embodies the rare blend of strategic business leadership and prophetic spiritual insight, making him one of the most versatile voices of our generation.
          </p>
          <p className="text-base md:text-lg italic font-light">
            Whether behind a microphone, in the boardroom, or on the prayer altar, Charles consistently delivers with excellence, impact, and authenticity.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content Section */}
      <section className="relative -mt-16 z-10 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Corporate Profile Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-black transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Charles Alade – The Corporate Executive
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              As the Chief Executive Officer of Hebbymix Studios Limited, Charles leads one of Nigeria’s foremost multimedia solution companies specializing in advertising, media production, promotions, and training. With extensive experience as a communications strategist and media executive, he has worked with top brands and organizations across industries, building high-impact campaigns and world-class productions.
            </p>
            <button 
              onClick={() => setIsCorporateModalOpen(true)}
              className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Read Full Corporate Profile <IoArrowForward className="ml-2" />
            </button>
          </div>

          {/* Ministry Profile Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-orange-500 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Apostle Charles Alade – The Catalyst
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Beyond the corporate world, Charles Alade is also widely known as Apostle Charles Alade, the President and Founder of Recharge Global Christian Network. Driven by a divine mandate to “raise giants who display excellent spiritual leadership while maintaining undeniable earthly relevance,” he is a passionate preacher, prophetic intercessor, author, and convener of global prayer movements that ignite revival and transformation.
            </p>
            <button 
              onClick={() => setIsMinistryModalOpen(true)}
              className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Read Full Ministry Biography <IoArrowForward className="ml-2" />
            </button>
          </div>

        </div>
      </section>

      {/* Corporate Modal */}
      {isCorporateModalOpen && (
        <Modal 
          title={corporateProfile.title} 
          text={corporateProfile.text} 
          onClose={() => setIsCorporateModalOpen(false)} 
        />
      )}

      {/* Ministry Modal */}
      {isMinistryModalOpen && (
        <Modal 
          title={ministryProfile.title} 
          text={ministryProfile.text} 
          onClose={() => setIsMinistryModalOpen(false)} 
        />
      )}
    </div>
  );
};

// Reusable Modal Component
const Modal = ({ title, text, onClose }) => {
  return (
    <div className="fixed inset-0 z-[2000] bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative bg-white max-w-2xl max-h-[90vh] overflow-y-auto p-8 rounded-lg shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
          <IoClose size={28} />
        </button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Founder;