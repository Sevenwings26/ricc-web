import React from "react";
import fathertochild from "../Assets/Images/fathertochild.png";
import Button from "./button";
import Inputs from "./Inputs";
import { NavData } from "../Components/NavData";
import { Link } from "react-router-dom";
import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import { IoLogoInstagram, IoLogoTwitter, IoMail } from "react-icons/io5";
import { IconContext } from "react-icons";

const Footer = () => {
  const Social = [
    {
      icon: <IoLogoInstagram />,
      link: "/",
    },
    {
      icon: <IoMail />,
      link: "/",
    },
    {
      icon: <IoLogoTwitter />,
      link: "/",
    },
    {
      icon: <IoLogoInstagram />,
      link: "/",
    },
  ];
  return (
    <div className=" border-2 bg-black bg-opacity-50 bg-gather  bg-cover bg-center bg-blend-overlay">
      <div className="relative top-[-100px] h-[200px] bg-hands bg-blend-overlay  bg-opacity-10 bg-accent bg-cover bg-center mx-[100px] flex items-center justify-center rounded-lg">
        <div className="text-center">
          <p className="my-[24px] text-small-xl font-semibold">Ways to Give</p>
          <p className="my-5">
            We give not out of compulsion or fear but a desire to see the gospel
            prosper in our day.
          </p>

          <Button btnName="Give Here" />
        </div>
      </div>

      <div className="px-[100px] flex  flex-col items-center justify-center">
        <p className="text-center text-white mb-5 text-3xl">
          Wants To Get Update From Us?
        </p>

        <div className="flex items-center gap-10">
          <Inputs />
          <Button btnName="Submit" />
        </div>
      </div>

      <div className="flex justify-between py-10 px-10 text-white border-y border-white my-10">
        <div className=" bg-white rounded-lg">
          <img src={Logo} className="" />
        </div>

        <ul className=" flex  gap-10 items-center justify-between">
          {NavData.map((item, index) => (
            <li key={index} className="">
              <Link to={item.path} className="">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="">
          <p>Connect with us</p>
          <IconContext.Provider value={{ size: "25px    " }}>
            <div className="flex item-center justify-between">
              {Social.map((item, index) => (
                <div>
                  <Link to={item.link}>{item.icon}</Link>
                </div>
              ))}
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <p className="text-white text-center text-[14px] my-10 mb-2">
        &copy;2024 Recharge International Christian Centre. rights reserved
      </p>
    </div>
  );
};

export default Footer;
