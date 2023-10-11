import React from "react";
import CardCaret from "../../../public/card_caret.svg";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

function ProjectCard({ children, imgSrc }) {
  const { md, lg } = fullConfig.theme.screens;
  return (
    <div
      className="w-full h-full cursor-pointer before:hidden hover:before:block before:absolute before:inset-0 before:bg-primary-dark relative before:rounded-[15px] before:z-10 before:opacity-70 text-[28px] uppercase font-[500] flex items-center flex-col justify-center text-light rounded-[15px]"
      // style={{ background: `url(${imgSrc})`, backgroundSize: "cover" }}
    >
      {/*<img*/}
      {/*  className="w-full h-full absolute inset-0 object-cover rounded-standard"*/}
      {/*  src={imgSrc}*/}
      {/*/>*/}

      <picture className="w-full h-full absolute inset-0 object-cover rounded-standard brightness-[50%]">
        <source media={`(min-width:${lg})`} srcSet={imgSrc.desktop} />
        <source media={`(min-width:${md})`} srcSet={imgSrc.tablet} />
        <img
          src={imgSrc.mobile}
          className="w-full h-full absolute inset-0 object-cover rounded-standard"
        />
      </picture>
      <div className="z-10 mb-[12px] md:mb-[24px] leading-[36px] tracking-[1.4px] md:text-[40px] md:tracking-[2px] md:leading-[48px]">
        {children}
      </div>
      <div className="z-10 flex gap-[16px] items-center text-[15px] tracking-[5px]">
        View Projects <CardCaret />{" "}
      </div>
    </div>
  );
}

export default ProjectCard;
