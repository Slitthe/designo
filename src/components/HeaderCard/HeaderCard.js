import React from "react";
import Button from "@/components/Button/Button";

function HeaderCard({ title, children, imageSrc }) {
  return (
    <div
      className={`bg-primary-dark md:mx-standard md:rounded-standard text-center md:mt-[60px] overflow-hidden${
        imageSrc ? " lg:grid lg:grid-cols-5 lg:text-left" : ""
      }`}
    >
      {imageSrc && (
        <div className="h-[325px] lg:order-1 lg:col-span-2 lg:h-full">
          <img src={imageSrc} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="md:mx-[70px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small lg:col-span-3">
        <div className="lg:p-0 text-light text-[32px] mb-[24px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px] w-full">
          {title}
        </div>
        <div className="text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
