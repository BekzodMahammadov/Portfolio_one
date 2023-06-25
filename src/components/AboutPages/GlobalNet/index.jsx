import React from "react";
import Img from "../../../assets/img/gallery/map.png";
import Neftlix from "../../../assets/img/gallery/netflix.png";
import Reddit from "../../../assets/img/gallery/reddit.png";
import Amazon from "../../../assets/img/gallery/amazon.png";
import Discord from "../../../assets/img/gallery/discord.png";
import Spotify from "../../../assets/img/gallery/spotify.png";

export default () => {
  return (
    <div>
      <div className="global_net py-[60px] bg-[#F6F6F6] h-auto">
        <div className="title text-center text-[34px] text-[#0B132A] font-[600]">
          Huge Global Network <br /> of Fast VPN
        </div>
        <div className="text-[18px] text-[#4d5769] text-center">
          See LaslesVPN everywhere to make it easier for you when <br /> you
          move locations.
        </div>
        <div className="w-full flex justify-center">
          <img
            src={Img}
            alt=""
            style={{ width: "100%" }}
            className="mt-[100px]"
          />
        </div>
        <div className="w-full h-[150px] bg-[#F6F6F6] flex items-center justify-center gap-[40px] pt-[120px] global_Cont">
          <div>
            <img src={Neftlix} alt="" />
          </div>
          <div>
            <img src={Reddit} alt="" />
          </div>
          <div>
            <img src={Amazon} alt="" />
          </div>
          <div>
            <img src={Discord} alt="" />
          </div>
          <div>
            <img src={Spotify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
