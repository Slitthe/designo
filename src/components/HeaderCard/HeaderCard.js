import React from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const { md, lg } = fullConfig.theme.screens;

function HeaderCard({ title, children, imageSrcset }) {
  return (
    <div
      className={`bg-primary-dark md:mx-standard md:rounded-standard text-center md:mt-[60px] overflow-hidden${
        imageSrcset ? " lg:grid lg:grid-cols-10 lg:text-left" : ""
      }`}
    >
      {imageSrcset && (
        <div className="h-[325px] lg:order-1 lg:col-span-4 lg:h-full relative">
          {/*<img src={imageSrc} className="w-full h-full object-cover" />*/}
          <picture className="w-full h-full absolute inset-0 object-cover">
            <source media={`(min-width:${lg})`} srcSet={imageSrcset.desktop} />
            <source media={`(min-width:${md})`} srcSet={imageSrcset.tablet} />
            <img
              src={imageSrcset.mobile}
              className="w-full h-full absolute inset-0 object-cover"
            />
          </picture>
        </div>
      )}
      <div
        className={`md:px-[70px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small lg:col-span-6 bg-heroCircle bg-[0 50%] bg-no-repeat${
          !imageSrcset
            ? " lg:px-[190px] md:bg-callToActionCircles md:bg-[-25%]"
            : " lg:px-[96px] lg:py-[135px] px-[60px]"
        }`}
      >
        <h1
          className={`lg:p-0 text-light text-[32px] mb-[24px] md:text-[48px] md:leading-[48px] font-[500] leading-[36px] md:px-[119px] w-full${
            imageSrcset ? " md:mb-[32px]" : " md:mb-[24px]"
          }`}
        >
          {title}
        </h1>
        <div className="text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
