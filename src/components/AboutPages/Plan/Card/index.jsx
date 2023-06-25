import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default (props) => {
  return (
    <div>
      <div className="plan_card w-auto h-auto p-[60px] bg-[#fff] border-2 border-[#DFDFDF] rounded-xl">
        <div className="flex justify-center">
          <img src={props.img} alt="" />
        </div>
        <div className="mt-[28px] text-[20px] text-[#0B132A] font-[600] text-center">
          {props.title}
        </div>
        <div className="flex items-center h-[250px]">
          <div className="mt-[40px] flex flex-col gap-[15px]">
            {props.data.map((item) => (
              <p className="text-[18px] text-[#4d5769] flex gap-2 text-center plan_Text">
                <span className="text-[#2FAB73] ">
                  <BsCheckLg />
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center text-[33px] text-[#0B132A] font-[600] mt-[60px]">
          {props.price}
        </div>
        <div className="mt-5 flex justify-center ">
          <button className="plan_btn text-[16px] text-[#F53838] font-medium border border-[#F53838] py-[5px] px-[32px] rounded-full hover:bg-[#F53838] hover:text-[#fff] hover:transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
