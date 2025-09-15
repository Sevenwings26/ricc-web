import React from "react";
import Block from "../Components/Block";
import Values from "../Components/Values";
import Mission from "../Components/Mission";
import Boxcomponent from "../Components/Boxcomponent";
import Button from "../Resources/button";
import MinistryComponent from "../Components/MinistryComponent";
import Activities from "../Components/Activities";

const Homepage = () => {
  return (
    <div className="w-full">
      {/* <p className="text-accent my-10 text-center"> */}
      <div className="py-6 px-2 md:px-12 lg:px-24">
        {/* <p className="text-orange-500 mb-2 text-center text-lg mt-5 lg:text-4xl font-semibold uppercase tracking-wide"></p> */}
        <p className="text-center text-3xl">
          We are committed to
        </p>
        <div className="mt-2">
          <Block />
        </div>
      </div>

      <div className="py-6 px-6 md:px-12 lg:px-24">
        <p className="text-orange-500 mb-2 text-center text-lg mt-5 lg:text-4xl font-semibold uppercase tracking-wide">
          Our Core Values
        </p>
        <Values />
      </div>

      {/* <div className=" h-[600px] px-[150px] mobile:p-10 smtab:p-10">
        <Mission />
      </div> */}

      {/* <div className="my-10  px-[150px] mobile:p-10 smtab:p-10">
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
      </div> */}

      <div className="py-6 px-6 md:px-12 lg:px-24">
        <p className="text-orange-500 mb-2 text-center text-lg mt-5 lg:text-4xl font-semibold uppercase tracking-wide">
          Ministries
        </p>
        <MinistryComponent />
      </div>

        
       {/* updated membership section */}
      <div className="py-6 px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-orange-500 mb-2 text-center text-lg mt-5 lg:text-4xl font-semibold uppercase tracking-wide">
          {/* <h2 className="text-orange-500 mb-4 text-2xl lg:text-3xl font-extrabold uppercase tracking-widest"> */}
            Membership and Governance
          </p>
          {/* </h2> */}
          <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            The organization shall be governed by a Board of Directors, consisting of a President/Founder, Vice President, Secretary, Treasurer, and members of an executive committee that would relate in direct line with different groups in the membership.
          </p>
          <Button outline btnName="Learn more" className=""/>
          {/* <Button outline btnName="See All Ministries" /> */}
        </div>
      </div>

        {/* membership section  */}
      {/* <div className="my-20 bg-black px-[150px] mobile:p-10 py-10 mobile:my-10">
        <Boxcomponent
          headStyle="leading-10 mobile:text-center"
          bodyStyle="flex-row-reverse gap-10  "
          imageSize="w-[100%] h-[100%] mobile:w-full"
          title="Membership And Governance"
          textBody="The organization shall be governed by a Board of Directors, consisting of a President/Founder, Vice President, Secretary, Treasurer, and members of an executive committee that would relate in direct line with different groups in the membership"
          textStyle="text-white w-[50%] mobile:w-[100%] mobile:text-center"
          bodyImage={preacher}
        >
          <div className="my-5 flex items-center mobile:justify-center">
            <Button btnName="Learn more" />
          </div>
        </Boxcomponent>
      </div> */}


      <div className="py-0 px-0 md:px-12 lg:px-24">
        <p className="text-orange-500 text-center text-lg mt-1 lg:text-4xl font-semibold uppercase tracking-wide">
          Activities And Programs
        </p>
        <Activities />
      </div>
    </div>
  );
};

export default Homepage;
