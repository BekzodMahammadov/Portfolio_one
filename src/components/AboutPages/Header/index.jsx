import React from "react";
import Img from "../../../assets/img/illustrations/1.png";

export default () => {
  return (
    <div>
      <div className="header flex justify-center items-center py-[100px] ">
        <div className="item ">
          <div>
            <h1 className="text-[39px] font-[600] text-[#0B132A] ">
              Want anything to be <br /> easy with{" "}
              <span className="font-[700]">LaslesVPN.</span>
            </h1>
          </div>
          <div>
            <p className="text-[16px] text-[#4d5769] font-[400] w-[530px] mt-4">
              Provide a network for all your needs with ease and fun using
              <span className="font-[700]"> LaslesVPN </span> discover
              interesting features from us.Most people make the mistake of
              forcing themselves to network.Or they pretend to be outgoing to
              make new connections.
            </p>
          </div>
          <div className="head_btn_div">
            <button className=" header_btn py-3 px-16 bg-[#F53838] text-[#fff] font-[500] capitalize text-base border border-[#F53838] rounded-lg mt-6">
              get started
            </button>
          </div>
        </div>
        <div>
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};
