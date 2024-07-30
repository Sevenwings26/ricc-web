import React from "react";
import Logo from "../Assets/Icons/RECHARGE CHRISTION CENTER LOGO 1.svg";
import { Link } from "react-router-dom";

const BaseLayout = () => {
  const NavData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About RICC",
      path: "/",
    },
    {
      name: "Our Mission",
      path: "/",
    },
    {
      name: "Membership",
      path: "/",
    },
    {
      name: "Programs",
      path: "/",
    },
    {
      name: "More",
      path: "/",
    },
  ];
  return (
    <div className="flex justify-between ">
      <div className="border-black border-2">
        <img src={Logo} />
      </div>

      <ul className="border border-black list-none">
        {NavData.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaseLayout;
