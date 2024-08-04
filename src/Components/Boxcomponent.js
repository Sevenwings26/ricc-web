import React from "react";

const Boxcomponent = ({
  title,
  textBody,
  textStyle,
  bodyImage,
  bodyStyle,
  headStyle,
  children,
  imageSize,
  textBox,
  index,
}) => {
  return (
    <div className={`flex ${bodyStyle} mobile:flex-col  `} key={index}>
      <div className={`${textBox}  my-5`}>
        <p className={`text-accent text-2xl leading-10 ${headStyle}`}>
          {title}
        </p>
        <p className={textStyle}>{textBody}</p>
        {children}
      </div>
      <div className={`${imageSize}`}>
        <img
          src={bodyImage}
          alt="images"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Boxcomponent;
