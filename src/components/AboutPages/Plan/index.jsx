import React from "react";
import Img from "../../../assets/img/icons/pricing.png";
import Card from "./Card/index";

const data = [
  {
    id: 1,
    img: Img,
    title: "Free Plan",
    data: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    id: 2,
    img: Img,
    title: "Standard Plan",
    data: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9/mo ",
  },
  {
    id: 3,
    img: Img,
    title: "Premium Plan",
    data: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12/mo ",
  },
];

export default () => {
  return (
    <div>
      <div className="plan py-[70px] bg-[#F6F6F6]">
        <div className="title">
          <p className="text-center text-[34px] text-[#0B132A] font-[600]">
            Choose Your Plan
          </p>
        </div>
        <div className="text-[18px] text-[#4d5769] text-center">
          Let's choose the package that is best for you and explore it <br />{" "}
          happily and cheerfully.
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px] plan_cont">
          {data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              data={item.data}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
