import React from "react";

function InfoCard({ title, children, img }) {
  return (
    <div className="flex flex-col md:gap-[48px] items-center md:grid md:grid-cols-infoCard lg:flex">
      <div className="w-[202px] h-[202px] row-span-2 bg-smallCircle bg-no-repeat">
        {img}
      </div>

      <div className="text-center md:text-left lg:text-center ">
        <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">
          {title}
        </div>
        <div className="text-[16px] font-normal leading-[26px] text-dark-faded">
          {children}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
