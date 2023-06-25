import React from "react";
import Logo from "../../../assets/img/icons/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default () => {
  return (
    <div>
      <div className="navbar w-full h-[74px] fixed-top bg-[#fff] flex items-center justify-between px-[120px] lg:px-[100px] md:px-[50px] sm:px-0">
        <div className="logo flex items-center gap-3">
          <img src={Logo} alt="" />
          <span>
            <span className="text-[19px] font-[500] text-[#0B132A]">
              Lasles
            </span>
            <span className="text-[19px] font-bold text-[#0B132A]">VPN</span>
          </span>
        </div>
        <div className="links text-base font-normal flex gap-[16px] ">
          {/* <div> */}
          <a href="#" className="text-[#F53838]">
            About
          </a>
          <a href="#" className="text-[#4d5769] ">
            Features
          </a>
          <a href="#" className="text-[#4d5769] ">
            Pricing
          </a>
          <a href="#" className="text-[#4d5769] ">
            Testimonials
          </a>
          <a href="#" className="text-[#4d5769] ">
            Help
          </a>
          {/* </div> */}
        </div>
        <div className="signIn">
          <button className="text-[16px] text-[#0b132a] font-medium py-[5px] px-[32px] hover:underline">
            Sign in
          </button>
          <button className="navbar_btn text-[16px] text-[#F53838] font-medium border border-[#F53838] py-[5px] px-[32px] rounded-full hover:bg-[#F53838] hover:text-[#fff] hover:transition-all">
            Sign Up
          </button>
        </div>
        <div className="hamburger" style={{ display: "none" }}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};
