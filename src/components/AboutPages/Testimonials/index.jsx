import React from "react";
import Img1 from "../../../assets/img/gallery/user-1.png";
import Img2 from "../../../assets/img/gallery/user-2.png";
import Img3 from "../../../assets/img/gallery/user-3.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsStarFill, BsCircleFill } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="testimonials py-[60px]">
        <div className="title text-center text-[34px] text-[#0B132A] font-[600]">
          Trusted by Thousands of <br /> Happy Customer
        </div>
        <div className="text-[18px] text-[#4d5769] text-center">
          These are the stories of our customers who have joined us <br /> with
          great pleasure when using this crazy feature.
        </div>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators test">
          <button
            className=" text-[#f53838] myBtn "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active "
            aria-current="true"
            aria-label="Slide 1"
          >
            <BsCircleFill />
          </button>
          <button
            className=" text-[#f53838]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <BsCircleFill />
          </button>
          <button
            className=" text-[#f53838]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <BsCircleFill />
          </button>
        </div>
        <div class="carousel-inner myCorusel">
          <div class="carousel-item active  ">
            <div className="mt-[60px] flex justify-center gap-[30px] test_cont ">
              <div className="test_card w-[345px] h-[195px] p-[16px] mb-[50px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img1} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “Wow...I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img2} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Kim Young Jou
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        Seoul, South Korea
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img3} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.8
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="mt-[60px] flex justify-center gap-[30px] test_cont ">
              <div className="test_card w-[345px] h-[195px] mb-[50px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img1} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “Wow...I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img2} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Kim Young Jou
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        Seoul, South Korea
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img3} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.8
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="mt-[60px] flex justify-center gap-[30px] test_cont ">
              <div className="test_card w-[345px] h-[195px] mb-[50px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img1} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “Wow...I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img2} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Kim Young Jou
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        Seoul, South Korea
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    5
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
              <div className="test_card w-[345px] h-[195px] p-[16px] border border-[#DFDFDF] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={Img3} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#0B132a] font-semibold">
                        Viezh Robert
                      </span>
                      <span className="text-[11px] text-[#4d5769] font-[400]">
                        arsaw, Poland
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#4F5665] flex gap-2 items-center">
                    4.8
                    <span className="text-[#FEA250]">
                      <BsStarFill />
                    </span>
                  </div>
                </div>
                <div className="text-[16px] text-[#4d5769] mt-3 ">
                  “I like it because I like to travel far and still can connect
                  with high speed.”
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className=""
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <div className=" w-[64px] h-[32px] rounded-full  test_Btn  flex justify-center items-center ml-[2100px] mt-[270px]">
            <span className="text-[#F53838]">
              <AiOutlineArrowLeft />
            </span>
          </div>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <div>
            <div className="w-[32px] h-[32px] rounded-full test_Btn flex justify-center items-center mr-[130px] mt-[270px]">
              <span className="text-[#F53838]">
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
