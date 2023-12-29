import React from "react";

import { Img, List } from "components";

type PropertyDetailsListstartwoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PropertyDetailsListstartwo: React.FC<PropertyDetailsListstartwoProps> = (
  props,
) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col h-6 items-center justify-start w-full">
          <Img
            className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
            src="images/img_star2_24.svg"
            alt="starTwo"
          />
        </div>
        <div className="flex flex-col h-6 items-center justify-start w-full">
          <Img
            className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
            src="images/img_star2_25.svg"
            alt="starTwo"
          />
        </div>
        <div className="flex flex-col h-6 items-center justify-start w-full">
          <Img
            className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
            src="images/img_star2_26.svg"
            alt="starTwo"
          />
        </div>
        <div className="flex flex-col h-6 items-center justify-start w-full">
          <Img
            className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
            src="images/img_star2_27.svg"
            alt="starTwo"
          />
        </div>
        <div className="flex flex-col h-6 items-center justify-start w-full">
          <Img
            className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
            src="images/img_star2_28.svg"
            alt="starTwo"
          />
        </div>
      </List>
    </>
  );
};

PropertyDetailsListstartwo.defaultProps = {};

export default PropertyDetailsListstartwo;
