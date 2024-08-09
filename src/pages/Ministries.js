import React from "react";
import Boxcomponent from "../Components/Boxcomponent";
import couple from "../Assets/Images/couple.png";
import campus from "../Assets/Images/campus.png";
import prison from "../Assets/Images/prison.png";
import mountain from "../Assets/Images/mountain.png";
import codered from "../Assets/Images/codered.png";
import talk from "../Assets/Images/talk.png";

const Ministries = () => {
  const ministry = [
    {
      title: "Singles/Married Ministry",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: couple,
    },
    {
      title: "Campus Ministry",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: campus,
    },
    {
      title: "Prison Ministry",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: prison,
    },
    {
      title: "Mountain Prayer Experience",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: mountain,
    },
    {
      title: "Code Redd",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: codered,
    },
    {
      title: "Talk to Big Brother",
      text: "Singles/Married Ministry of Recharge International Christian Centre. Our vision is to see all Singles and Married people celebrating endless life in Christ. We are passionate about teaching them the principle of pre and post marriage dealings and who will in turn disciple others for Christ. Under the leadership of the Founder, we are committed to partnering with you and your spouse for your progress and joy of faith.",
      picture: talk,
    },
  ];
  return (
    <div className="px-[150px] py-[100px] mobile:p-10 mobile:my-20">
      <div className="text-center mb-5">
        <p className="text-accent mb-10">Ministries</p>
        <p className="text-3xl">There’s A Place For Everyone</p>
        <p>The organization shall include the following ministries:</p>
      </div>

      <div className="flex flex-col gap-10 ">
        {ministry?.map((item, index) => (
          <div key={index}>
            <Boxcomponent
              // index={index}
              title={item.title}
              textBody={item.text}
              bodyImage={item.picture}
              headStyle="text-center"
              bodyStyle=" flex gap-10 items-center mobile:odd:flex-col"
              imageSize="w-full"
              textBox="w-[70%] mobile:w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;
