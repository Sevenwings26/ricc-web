import React from "react";
import Block from "../Components/Block";
import Values from "../Components/Values";
import Mission from "../Components/Mission";
import Boxcomponent from "../Components/Boxcomponent";
import congregation from "../Assets/Images/congregate.png";
import preacher from "../Assets/Images/preacher.png";
import Button from "../Resources/button";
import MinistryComponent from "../Components/MinistryComponent";
import Activities from "../Components/Activities";

const Homepage = () => {
  return (
    <div>
      <p className="text-accent my-10 text-center">
        About Recharge International Christian Centre
      </p>

      <div className="px-[150px] mobile:p-10 smtab:p-10">
        <p className="text-center text-3xl">
          Recharge International Christian Center is committed to
        </p>
        <div className="flex  my-10 ">
          <Block />
        </div>
      </div>

      <div className="my-[100px] px-[150px] mobile:p-10 mobile:my-10 smtab:p-10 smtab:my-0">
        <p className="text-accent my-10 text-center">Core Values </p>
        <p className="text-center my-10 text-3xl">RICC Core Values</p>
        <Values />
      </div>

      <div className=" h-[600px] px-[150px] mobile:p-10 smtab:p-10">
        <Mission />
      </div>

      <div className="my-10  px-[150px] mobile:p-10 smtab:p-10">
        <Boxcomponent
          headStyle="text-center"
          bodyStyle="items-center gap-10"
          title="Vision"
          textBody="Our vision is to raise Kingdom giants 
                    who are both kings and priests, 
                    demonstrating excellence in spiritual 
                    leadership and earthly relevance."
          textStyle="text-center"
          bodyImage={congregation}
        />
      </div>

      <div className="my-20 bg-black px-[150px] mobile:p-10 py-10 mobile:my-10">
        <Boxcomponent
          headStyle="leading-10 mobile:text-center"
          bodyStyle="flex-row-reverse gap-10  "
          imageSize="w-[40%] h-[50%]  mobile:w-full"
          title="Membership And Governance"
          textBody="The organization shall be governed by a Board of Directors, consisting of a President/Founder, Vice President, Secretary, Treasurer, and members of an executive committee that would relate in direct line with different groups in the membership"
          textStyle="text-white w-[50%] mobile:w-[100%] mobile:text-center"
          bodyImage={preacher}
        >
          <div className="my-5 flex items-center justify-center">
            <Button btnName="Learn more" />
          </div>
        </Boxcomponent>
      </div>

      <div className="px-[150px] mobile:p-10">
        <p className="text-center my-10 text-accent">Ministries</p>
        <MinistryComponent />
      </div>

      <div className="p-[100px] mobile:p-10">
        <p className="text-center font-semibold leading-10">
          Activities And Programs
        </p>
        <Activities />
      </div>
    </div>
  );
};

export default Homepage;
