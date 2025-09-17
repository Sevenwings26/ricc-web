import React from "react";
// import Button from "./button";
// import Inputs from "./Inputs";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { NavData } from "../Components/NavData";
import { Link } from "react-router-dom";
import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import { IoLogoInstagram, IoMail, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { IconContext } from "react-icons";

const Footer = () => {
    const Social = [
    {
        icon: <IoLogoWhatsapp />,
        link: "https://wa.me/2348158639668",
    },
    {
        icon: <IoLogoInstagram />,
        link: "https://www.instagram.com/rechargechurchglobal?igsh=MWY2cWtndGx3eG02Nw%3D%3D&utm_source=qr",
    },
    {
        icon: <IoLogoFacebook />,
        link: "https://www.facebook.com/share/16KtFm2oPr/?mibextid=wwXIfr",
    },
    {
        icon: <IoMail />,
        link: "mailto:Info@rechargechurch.ng",
    },
    ];

  return (
    <div>

        <div className="bg-black text-white py-12 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">

            {/* Text and Title Section */}
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Ways to Give / Donate</h3>
                <p className="text-gray-300 mb-2 max-w-lg">
                We give not out of compulsion or fear, but out of a desire to see the gospel prosper in our day.
                </p>
            </div>

            {/* Donation Details Section */}
            <div className="md:w-1/2 md:text-right">
                <div className="flex flex-col space-y-4">
                <p className="text-lg font-semibold text-white">
                    Account Name: <span className="font-normal text-gray-300">Recharge Global Christian Network</span>
                </p>
                <div className="flex flex-col space-y-2">
                    {/* Donation Accounts */}
                    <div className="bg-white text-black p-2 rounded-lg shadow-inner">
                    <p className="font-semibold text-lg">Naira Account</p>
                    <p className="text-sm">1027684428</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-lg shadow-inner">
                    <p className="font-semibold text-lg">USD Account</p>
                    <p className="text-sm">3004627134</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-lg shadow-inner">
                    <p className="font-semibold text-lg">Pounds Account</p>
                    <p className="text-sm">3004627165</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

  {/* to get update? */}

        <footer className="bg-white text-gray-700 py-4 px-6 border-t border-gray-200 md:px-10">
            <div className="container mx-auto flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">

                {/* Logo Section */}
                <div className="w-full text-center inline-block md:w-auto md:text-left">
                    <div className="inline-block rounded-lg">
                        <img src={Logo} alt="Logo" className=""/>
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
