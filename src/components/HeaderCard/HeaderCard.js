import React from "react";
import Button from "@/components/Button/Button";

function HeaderCard({ title, children }) {
  return (
    <div className="bg-primary-dark mb-[120px] md:mx-standard md:rounded-standard text-center md:mt-[60px] flex flex-col align-center items-center justify-center h-[325px] md:h[252px] px-small">
      <div>
        <div className="lg:p-0 text-light text-[32px] mb-[24px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px]">
          {title}
        </div>
        <div className="md:mx-[20%]  text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
