import React, { useEffect, useState } from "react";
import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import Banner from "../Assets/Images/banner.png";
import Footer from "./Footer";
import { NavData } from "../Components/NavData";

const BaseLayout = () => {
  const location = useLocation();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setText1("Welcome To ");
      setText2("Recharge International Christian Centre");
    } else if (location.pathname === "/about") {
      setText1("oh well ");
      setText2("Recharge International Christian Centre");
    }
  }, [location]);

  console.log(location.pathname, text1, text2);
  return (
    <div className="">
      <div className="flex justify-between py-10 px-10 bg-white">
        <div className="w-[30%]">
          <img src={Logo} className="" />
        </div>

        <ul className=" flex w-[70%] items-center justify-between gap-10">
          {NavData.map((item, index) => (
            <li key={index} className="">
              <Link to={item.path} className="">
                {item.name}
              </Link>
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
              <p className="text-big-3xl font-semibold text-white leading-10">
                {text1}
              </p>
              <p className="text-big-3xl font-semibold text-accent">{text2}</p>
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
