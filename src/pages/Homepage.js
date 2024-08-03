import React from "react";
import Block from "../Components/Block";
import Values from "../Components/Values";
import Mission from "../Components/Mission";

const Homepage = () => {
  return (
    <div>
      <p className="text-accent my-10 text-center">
        About Recharge International Christian Centre
      </p>

      <div>
        <p className="text-center text-3xl">
          Recharge International Christian Center is committed to
        </p>
        <div className="flex  my-10">
          <Block />
        </div>
      </div>

      <div className="my-[100px]">
        <p className="text-accent my-10 text-center">Core Values </p>
        <p className="text-center my-10 text-3xl">RICC Core Values</p>
        <Values />
      </div>

      <div>
        <Mission />
      </div>
    </div>
  );
};

export default Homepage;
