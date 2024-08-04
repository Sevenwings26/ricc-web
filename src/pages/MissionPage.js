import React from "react";
import Mission from "../Components/Mission";
import Boxcomponent from "../Components/Boxcomponent";
import congregation from "../Assets/Images/congregate.png";

const MissionPage = () => {
  return (
    <div className="px-[150px] py-20 mobile:p-10">
      <div className=" h-[600px] ">
        <Mission />
      </div>

      <div>
        <div className="my-10  px-[150px] mobile:p-10">
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
      </div>
    </div>
  );
};

export default MissionPage;
