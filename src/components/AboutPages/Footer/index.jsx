import React from "react";
import Img from "../../../assets/img/icons/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="footer ">
        <div className="flex justify-center">
          <div className="subscribe w-[1100px] h-[240px] flex justify-between p-[48px] items-center bg-[#fff] rounded-lg">
            <div>
              <div className="title text-center text-[34px] text-[#0B132A] font-[600]">
                Subscribe Now for <br /> Get Special Features!
              </div>
              <div className="text-[18px] text-[#4d5769] text-center">
                Let's subscribe with us and find the fun.
              </div>
            </div>
            <div>
              <button className="capitalize py-[16px] px-[68px] bg-[#F53838] border-[#F53838] text-[16px] font-[600] text-[#fff] rounded-lg subscribe_btn">
                subscribe now
              </button>
            </div>
          </div>
        </div>
        <div className="footer_cont flex justify-center gap-[190px] bg-[#F5F5F5] w-full h-auto py-10 pt-[150px] mt-[-105px]">
          <div>
            <div className="item flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={Img} alt="" />
                <span>
                  <span className="text-[19px] font-[500] text-[#0B132A]">
                    Lasles
                  </span>
                  <span className="text-[19px] font-bold text-[#0B132A]">
                    VPN
                  </span>
                </span>
              </div>
              <div className="text-[16px] text-[#4d5469] font-semibold">
                <span>LaslesVPN</span> is a private virtual network that <br />{" "}
                has unique features and has high security.
              </div>
              <div className="text-[16px] text-[#F53838] flex gap-3">
                <a href="#">
                  <BsFacebook />
                </a>
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
              </div>
              <div className="text-[16px] text-[#4d5469] font-semibold">
                © 2020 Your Company
              </div>
            </div>
          </div>

          <div className="flex gap-[170px] cont_foot">
            <div className="item  flex flex-col gap-5">
              <div className="text-[19px] font-[500] text-[#0B132A]">
                product
              </div>
              <div className="flex flex-col gap-[8px] text-[#4F5665 ]">
                <a href="#">Download</a>
                <a href="#">Pricing</a>
                <a href="#">Locations</a>
                <a href="#">Server</a>
                <a href="#">Countries</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="item  flex flex-col gap-5">
              <div className="text-[19px] font-[500] text-[#0B132A]">
                Engage
              </div>
              <div className="flex flex-col gap-[8px] text-[#4F5665 ]">
                <a href="#">LaslesVPN ?</a>
                <a href="#">FAQ</a>
                <a href="#">Tutorials</a>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
            <div className="item  flex flex-col gap-5">
              <div className="text-[19px] font-[500] text-[#0B132A]">
                Earn Money
              </div>
              <div className="flex flex-col gap-[8px] text-[#4F5665 ]">
                <a href="#">Affiliate</a>
                <a href="#">Become Partner</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F5F5F5] flex justify-center foot">
          <p className="text-[16px] text-[#7a839e] w-[1100px] border-t-[1px] text-center py-[16px]">
            This template is made with by ❤️
            <a href="#" className="text-[#4d5769]">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
