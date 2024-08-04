import React from "react";
import preacher from "../Assets/Images/preacher.png";

const Membership = () => {
  return (
    <div className="mb-[150px] mt-20 px-[150px] mobile:p-10 mobile:my-10">
      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Membership</p>
        <p>
          The organization shall be governed by a Board of Directors, consisting
          of a President/Founder, Vice President
        </p>
      </div>

      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Eligibility</p>
        <p>
          Membership shall be open to all individuals who share our vision,
          mission, and core values
        </p>
      </div>

      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Right And Responsibilities</p>
        <p>
          Members shall have the right to participate in all activities of the
          Ministry as pertains to them. They shall be responsible for upholding
          the organization's values and actively contributing to its mission.
        </p>
      </div>

      <div className="mb-10">
        <p className="text-accent text-center">Governance</p>
        <div className="h-[300px]">
          <img
            src={preacher}
            alt="..."
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Leadership Structure</p>
        <p>
          Members shall have the right to participate in all activities of the
          Ministry as pertains to them. They shall be responsible for upholding
          the organization's values and actively contributing to its mission.
        </p>
      </div>
      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Election and Terms</p>
        <p>
          Officers shall be SELECTED by the President/Founder, Vice President,
          and Secretary, based on spiritual and physical scrutiny, and serve for
          a term of two years, with the possibility of re-selection. While
          executive committee members who serve as heads of various member
          groups will be elected by members.
        </p>
      </div>
      <div className="mobile:text-center mb-10">
        <p className="text-accent text-center">Meetings</p>
        <p>
          The Board of Directors shall meet regularly to discuss and make
          decisions regarding the organization's activities and direction.
          General membership meetings shall be held occasionally as determined
          by the Board of Directors.
        </p>
      </div>
    </div>
  );
};

export default Membership;
