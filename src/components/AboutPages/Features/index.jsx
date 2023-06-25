import React from "react";
import Img from "../../../assets/img/illustrations/2.png";
import { BsCheckCircleFill } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="features py-[64px] flex justify-center items-center gap-[70px]">
        <div className="item">
          <img src={Img} alt="" />
        </div>
        <div className="item">
          <div>
            <p className="text-[34px] font-[600] text-[#0B132A] ">
              We Provide Many <br /> Features You Can Use
            </p>
          </div>
          <div className="text-[16px] text-[#4d5769] mt-4 features_text">
            You can explore the features that we provide with fun and <br />{" "}
            have their own functions each feature.
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <p className="flex gap-2 text-[16px] text-[#4d5769] feat_text">
              <span className="text-[#2FA973]">
                <BsCheckCircleFill />
              </span>
              Powerfull online protection.
            </p>
            <p className="flex gap-2 text-[16px] text-[#4d5769] feat_text">
              <span className="text-[#2FA973]">
                <BsCheckCircleFill />
              </span>
              Internet without borders.
            </p>
            <p className="flex gap-2 text-[16px] text-[#4d5769] feat_text">
              <span className="text-[#2FA973]">
                <BsCheckCircleFill />
              </span>
              Supercharged VPN.
            </p>
            <p className="flex gap-2 text-[16px] text-[#4d5769] feat_text">
              <span className="text-[#2FA973]">
                <BsCheckCircleFill />
              </span>
              Internet without borders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
