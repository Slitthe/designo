import React from "react";
import InfoCardImg from "../../../public/illustration-resourceful.svg";
import Button from "@/components/Button/Button";

function LocationInfoCards(props) {
  return (
    <div className="mt-[120px] lg:mt-[160px] mx-small md:mx-standard lg:grid lg:grid-cols-3 lg:gap-[30px]">
      <div className="mb-[80px]">
        <div className="flex flex-col items-center lg:flex">
          <div className="w-[202px] h-[202px] row-span-2">
            <InfoCardImg />
          </div>

          <div className="md:ml-[18px] text-center md:text-left lg:text-center ">
            <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">
              passionate
            </div>
            <div className="text-[16px] font-normal leading-[26px]">
              <Button isDark>Test</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[80px]">
        <div className="flex flex-col items-center lg:flex">
          <div className="w-[202px] h-[202px] row-span-2">
            <InfoCardImg />
          </div>

          <div className="md:ml-[18px] text-center md:text-left lg:text-center ">
            <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">
              passionate
            </div>
            <div className="text-[16px] font-normal leading-[26px]">
              <Button isDark>Test</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[80px]">
        <div className="flex flex-col items-center lg:flex">
          <div className="w-[202px] h-[202px] row-span-2">
            <InfoCardImg />
          </div>

          <div className="md:ml-[18px] text-center md:text-left lg:text-center ">
            <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">
              passionate
            </div>
            <div className="text-[16px] font-normal leading-[26px]">
              <Button isDark>Test</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfoCards;
