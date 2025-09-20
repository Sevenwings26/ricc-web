import React from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../Components/NavData";
import Logo1 from "../Assets/Icons/RC-black-logo.jpg";
import { IoIosMail } from "react-icons/io";
import { FaYoutube, FaSpotify, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer = () => {
    const Social = [
    {
        icon: <FaWhatsapp />,
        link: "https://wa.me/2348158639668",
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/rechargechurchglobal?igsh=MWY2cWtndGx3eG02Nw%3D%3D&utm_source=qr",
    },
    {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/share/16KtFm2oPr/?mibextid=wwXIfr",
    },
    {
        icon: <FaYoutube />,
        link: "https://youtube.com/@rechargechurchglobal?si=t15oi5oh-YDipKy5",
    },
    {
        icon: <FaSpotify />,
        link: "https://open.spotify.com/show/2X9j6F5KZl6PpSeKGC8yp0",
    },
    {
        icon: <IoIosMail />,
        link: "mailto:Info@rechargechurch.ng",
    },
    ];

  return (
    <div>

    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6 md:px-12">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
        <h3 className="text-3xl font-bold text-orange-500">Ways to Give / Donate</h3>
        <p className="text-gray-300 leading-relaxed max-w-lg">
            Giving is an act of worship and a way to partner with God’s work on earth. 
            Every seed sown helps us advance the gospel, reach nations, and transform lives. 
            Thank you for being a part of this mission.
        </p>
        </div>

        {/* Donation Cards Section */}
        <div className="space-y-6">
        <p className="text-lg font-semibold">Account Name: 
            <span className="block font-normal text-gray-200">
            Recharge Global Christian Network
            </span>
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
            {/* Naira */}
            <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:scale-105 transform transition">
            <p className="font-semibold  text-gray-600 text-lg">Naira Account</p>
            <p className="text-xl">1027684428</p>
            </div>

            {/* USD */}
            <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:scale-105 transform transition">
            <p className="font-semibold text-gray-600 text-lg">USD Account</p>
            <p className="text-xl">3004627134</p>
            </div>

            {/* Pounds */}
            <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:scale-105 transform transition">
            <p className="font-semibold text-gray-600 text-lg">Pounds Account</p>
            <p className="text-xl">3004627165</p>
            </div>
        </div>
        </div>
    </div>
    </div>

  {/* to get update? */}

        <footer className="bg-white text-gray-700 py-4 px-6 border-t border-gray-200 md:px-10">
            <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">

                {/* Logo Section */}
                <div className="w-full text-center inline-block md:w-auto md:text-left">
                    <div className="inline-block rounded-lg">
                        <img src={Logo1} alt="Logo" className="h-10 sm:h-30 object-contain"/>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col items-center space-y-2 text-xl md:flex-row md:space-x-8 md:space-y-0 md:text-base">
                {NavData.map((item, index) => (
                    <li key={index}>
                    <NavLink to={item.path} className="text-gray-700 hover:text-black transition-colors duration-200">
                        {item.name}
                    </NavLink>
                    </li>
                ))}
                </ul>

                {/* Social Media Links */}
                <div className="w-full text-center md:w-auto md:text-left">
                <p className="font-semibold text-gray-800 mb-2">Connect with us</p>
                <IconContext.Provider value={{ size: "25px", color: "#4b5563" }}>
                    <div className="flex items-center justify-center space-x-4 md:justify-start">
                    {Social.map((item, index) => (
                        <div key={index}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        >
                            {item.icon}
                        </a>
                        </div>
                    ))}
                    </div>
                </IconContext.Provider>
                </div>

            </div>
        </footer>
        <div>
            <p className=" bg-orange-500 text-gray-700 text-center lg:text-3xl md:text-2xl sm:text-sm py-4">
            &copy;2025 Recharge International Christian Centre. Rights reserved
            </p>
        </div>
    </div>
  );
};

export default Footer;
