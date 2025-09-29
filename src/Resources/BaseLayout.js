import React, { useEffect, useState } from "react";
// import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import Logo1 from "../Assets/Icons/RC-black-logo.jpg";
// import Logo1 from "../Assets/Icons/RC-black-logo1.jpg";
// import Logo2 from "../Assets/Icons/rechargelogo.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import HeroImages from "../Components/CarouselImages"
import Footer from "./Footer";
import { NavData } from "../Components/NavData";
import { IoMenu } from "react-icons/io5";
import { IconContext } from "react-icons";
import ScrollToTop from "./ScrollToTop";

const BaseLayout = () => {
  const location = useLocation();
  const [text1, setText1] = useState("");
  const [nav, setNav] = useState(false);
  const [current, setCurrent] = useState(0);

  // Routing hero properties
  useEffect(() => {
    if (location.pathname === "/") {
      setText1("Welcome to ");
    } else if (location.pathname === "/about") {
      setText1("Our Statement of Faith At ");
    } else if (location.pathname === "/mission") {
      setText1("Our Mission And Vision At");
    } else if (location.pathname === "/membership") {
      setText1("Membership And Governance At");
    } else if (location.pathname === "/programs") {
      setText1("Programs And Activities");
    } else if (location.pathname === "/ministries") {
      setText1("Ministries");
    // } else if (location.pathname === "/founder"){
    //   setText1("Founder");
    }

    //
  }, [location]);

  // autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeroImages.length);
    }, 4000); // 4s interval
    return () => clearInterval(interval);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const closed = () => {
    setNav(false);
  };

  return (
    <div className="">
      <ScrollToTop />
      {/* header section starts */}   
      <header className="flex justify-between items-center py-0 px-4 sm:py-4 relative shadow-sm">
        <div className="w-2/3 sm:w-1/2 flex items-center">
          <img src={Logo1} alt="Logo" className="h-32 sm:h-6 md:h-24 object-contain" />
        </div>


        {/* Hamburger icon */}
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <IconContext.Provider value={{ size: "28px" }}>
            <IoMenu />
          </IconContext.Provider>
        </div>

        {/* Navigation list */}
        <ul
          className={`
            fixed top-[60px] left-0 w-2/3 bg-white z-[1000]
            flex flex-col items-center pt-5 transition-transform duration-200 ease-in-out
            md:static md:flex md:flex-row md:items-center md:justify-end md:w-3/4 md:h-auto md:space-x-6 md:p-0
            ${nav ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          {NavData.map((item, index) => (
            <li key={index} className="w-full text-center md:w-auto mb-3 md:mb-0">
              <NavLink
                to={item.path}
                className="relative text-base font-medium text-gray-700 hover:text-orange-700 transition-colors duration-300 block py-1
                after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full"
                onClick={closed}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>

      {/* header section ends */}
      <div className="">
        {location.pathname !== "/founder" && (
        <div className="relative h-screen overflow-hidden">
        {HeroImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.backgroundImage}
              alt={slide.title}
              className="object-cover w-full h-full"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text overlay */}
            <div className="flex flex-col items-center justify-center absolute inset-0 text-center px-6 md:px-12 lg:px-24">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-white leading-tight mb-2">
                {text1}
              </h1>

              {/* Sub-heading */}
              <p className="text-5xl md:text-3xl lg:text-7xl font-bold text-orange-500 uppercase">
                Recharge Church
              </p>

              {location.pathname === "/" && (
                <p className="text-2xl md:text-base lg:text-xl text-white mt-4 max-w-3xl">
                  We are dedicated to raising Kingdom giants who are both kings
                  and priests, demonstrating excellence in spiritual leadership
                  and earthly relevance, do hereby establish{" "}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Hero Carousel indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {HeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      )}
    
    <div className="">
      <Outlet />
      <Footer />
    </div>
  </div>
  </div>
  );
};

export default BaseLayout;
