import React, { useEffect, useState } from "react";
import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Banner from "../Assets/Images/banner.png";
import Footer from "./Footer";
import { NavData } from "../Components/NavData";

const BaseLayout = () => {
  const location = useLocation();
  const [text1, setText1] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setText1("Welcome To ");
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
    }

    //
  }, [location]);

  return (
    <div className="">
      <div className="flex justify-between py-10 px-10 bg-white mobile:py-5 mobile:px-5">
        <div className="w-[30%]">
          <img src={Logo} className="" />
        </div>

        <ul className="w-[50%] flex items-center justify-between gap-10 mobile:hidden">
          {NavData.map((item, index) => (
            <li key={index} className="">
              <NavLink to={item.path} className=" actives">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="  q">
          {/**use loops... if the value index is 1 change the image to... if index value is 2... set timeout too... */}
          <div className="h-[80vh] relative">
            <img
              src={Banner}
              alt="banner"
              className="object-cover h-full w-full"
            />
            <div className=" flex flex-col items-center absolute z-50 top-[50%] left-[50%]  w-full text-center translate-x-[-50%] translate-y-[-50%]">
              <p className="text-big-3xl font-semibold text-white leading-10 mobile:text-small-xl">
                {text1}
              </p>
              <p className="text-big-3xl font-semibold text-accent mobile:text-small-xl">
                Recharge International Christian Centre
              </p>
              {location.pathname === "/" && (
                <p className="text-white w-[70%]">
                  We are dedicated to raising Kingdom giants who are both kings
                  and priests, demonstrating excellence in spiritual leadership
                  and earthly relevance, do hereby establish{" "}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
