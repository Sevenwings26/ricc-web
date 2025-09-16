import { useState } from 'react';
import behindbars from "../Assets/Images/flyers/behindbars.jpg";
import biblestudy from "../Assets/Images/flyers/bible-study.jpg";
import mountainprayer from "../Assets/Images/flyers/mountainprayer.jpg";
import pbootcamp from "../Assets/Images/flyers/p-bootcamp.jpg";
import prayerwatch from "../Assets/Images/flyers/prayer-watch.jpg";
import rechargeOAU from "../Assets/Images/flyers/rechargeOAU.jpg";
import sundays from "../Assets/Images/flyers/sundays.jpg";
import { IoArrowForward, IoClose } from 'react-icons/io5';

  
const Activities = () => {
  const Activities = [
      {
        image: biblestudy,
        title: "Bible Study",
        text: "The organization shall conduct regular outreaches to spread the gospel and serve the community.",
      },
      {
        image: behindbars,
        title: "Jesus Behind Bars",
        text: "It is a prison outreach",
      },
      {
        image: pbootcamp,
        title: "Prophetic Bootcamp",
        text: "Prophetic training",
      },
      {
        image: prayerwatch,
        title: "Prayer Watch",
        text: "Praying at intervals, pray without seizing",
      },
      {
        image: mountainprayer,
        title: "Mountain Prayer",
        text: "Mountain Prayer meeting comes up........",
      },
      {
        image: rechargeOAU,
        title: "Campus Misson",
        text: "Taking Jesus to our campus",
      },
      {
        image: sundays,
        title: "Sunday service",
        text: "Sunday Services",
      },
    ];

  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

return (
    <section className="bg-white py-1">
      <div className="overflow-hidden w-full">
        {/* Single container for the scrolling images */}
        <div className="flex animate-slideshow">
          {Activities.map((activity, index) => (
            <div
              key={index}
              // className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1"
              className="flex-shrink-0 w-1/2 px-1 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div
                className="w-full h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(activity.image)}
              >
                <img
                  src={activity.image}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  alt={activity.title}
                />
              </div>

              <div className="my-5">
                <p className="flex items-center text-lg font-bold">
                  <span>{activity.title}</span>
                  <IoArrowForward className="ml-2 text-orange-500" />
                </p>
                <p className="text-sm text-gray-600 mt-1">{activity.text}</p>
              </div>
            </div>
          ))}
          {/* We duplicate the content here for a seamless loop */}
          {Activities.map((activity, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-1/2 px-2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div
                className="w-full h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(activity.image)}
              >
                <img
                  src={activity.image}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  alt={activity.title}
                />
              </div>

              <div className="my-5">
                <p className="flex items-center text-lg font-bold">
                  <span>{activity.title}</span>
                  {/* <IoArrowForward className="ml-2 text-orange-500" /> */}
                </p>
                <p className="text-sm text-gray-600 mt-1">{activity.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image popup */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 z-[2000] bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] p-4 bg-white rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <IoClose size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full-screen view"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="mt-4 text-center">
              <a 
                href={selectedImage} 
                download 
                className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-full transition-colors hover:bg-orange-600"
              >
                Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );


};

export default Activities;
