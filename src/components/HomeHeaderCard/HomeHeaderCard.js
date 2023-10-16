import React from "react";
import Button from "@/components/Button/Button";
import classes from "./HomeHeaderCard.module.css";
import desktopHeroImg from "../../../public/image-hero-phone.png";
import mobileHeroImg from "../../../public/hero_cut.png";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const { lg } = fullConfig.theme.screens;

function HomeHeaderCard() {
  return (
    <div
      className={`${classes.root} md:m-standard lg:mb-0 px-small md:px-[60px] lg:pr-0 lg:pt-[144px] text-center mb-[120px] pt-[80px] md:pt-[60px] md:mt-[60px] md:rounded-standard lg:pl-[96px] lg:grid lg:grid-cols-12`}
    >
      <div className="lg:col-span-7 lg:mb-[144px] lg:text-left">
        <h1 className="mb-[24px] md:mb-[8px] text-light text-[32px] md:text-[48px] md:leading-[48px] font-[500] leading-[36px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <div className="text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px] pb-[24px] lg:pb-[40px] md:mx-[58px] lg:mx-0">
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
      <div className="lg:col-span-5 flex justify-center mt-[80px] md:mt-[64px] lg:mt-0 drop-shadow-homeImg relative">
        <picture className="max-w-[350px] w-full h-full inset-0 object-contain mx-[15%] md:mx-[25%] lg:mx-[48px] lg:flex lg:items-end">
          <source media={`(min-width:${lg})`} srcSet={desktopHeroImg.src} />
          <img
            src={mobileHeroImg.src}
            className="w-full h-full lg:h-auto inset-0 object-contain"
          />
        </picture>
      </div>
    </div>
  );
}

export default HomeHeaderCard;
