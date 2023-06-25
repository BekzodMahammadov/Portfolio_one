import React from "react";

export default (props) => {
  return (
    <div>
      <div
        className="cards flex gap-[60px] begin_card items-center"
        key={props.key}
      >
        <div className="w-14 h-14 bg-[#FEEBEB] rounded-full flex items-center justify-center text-[22px] text-[#F53838]">
          {props.icon}
        </div>
        <div>
          <div className="text-[#0B132A ] text-[18px] font-extrabold">
            {props.count}
          </div>
          <div className="font-[400] text-[#5A6474]">Users</div>
        </div>
      </div>
    </div>
  );
};
