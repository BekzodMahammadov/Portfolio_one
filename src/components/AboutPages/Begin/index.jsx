import React from "react";
import Card from "./Card/index";
import { RiUser3Fill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <RiUser3Fill />,
    count: "90+",
  },
  {
    id: 1,
    icon: <MdLocationPin />,
    count: "30+",
  },
  {
    id: 1,
    icon: <MdOutlineStorage />,
    count: "50+",
  },
];

export default () => {
  return (
    <div>
      <div className="py-4 px-[100px] begin_div">
        <div className="begin w-full h-[182px] rounded-md flex justify-between items-center px-[120px]">
          {data.map((item) => (
            <Card key={item.id} icon={item.icon} count={item.count} />
          ))}
        </div>
      </div>
    </div>
  );
};
