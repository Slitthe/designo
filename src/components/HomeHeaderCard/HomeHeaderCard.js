import React from "react";
import Button from "@/components/Button/Button";
import mobileHero from "../../../public/hero.png";

function HomeHeaderCard() {
  return (
    <div className="md:m-standard bg-primary-dark px-standard text-center mb-[120px] pt-[80px] md:mt-[60px] md:rounded-standard lg:grid lg:grid-cols-2">
      <div className="lg:text-left md:mx-[58px]">
        <div className="mb-[24px] text-light text-[32px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] pb-[14px]">
          Award-winning custom designs and digital branding solutions
        </div>
        <div className="text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px] pb-[24px] md:mx-[58px] lg:mx-0">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </div>
        <div className="w-full flex flex-col items-center lg:items-start">
          <div className="w-[152px]">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={mobileHero.src} alt={"TODO: CHANG ME"} />
      </div>
    </div>
  );
}

export default HomeHeaderCard;
