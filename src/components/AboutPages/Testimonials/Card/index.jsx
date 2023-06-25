import React from "react";
import { BsStarFill } from "react-icons/bs";

export default (props) => {
  return (
    <div>
      <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img src={props.img} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#0B132a] font-semibold">
                {props.name}
              </span>
              <span className="text-[11px] text-[#4d5769] font-[400]">
                {props.city}
              </span>
            </div>
          </div>
          <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
            {props.rating}
            <span className="text-[#FEA250]">
              <BsStarFill />
            </span>
          </div>
        </div>
        <div className="text-[16px] text-[#4d5769] mt-3 ">{props.about}</div>
      </div>
    </div>
  );
};
