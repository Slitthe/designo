import React from "react";
import CardCaret from "../../../public/card_caret.svg";

function ProjectCard({ children, imgSrc }) {
  return (
    <div
      className="cursor-pointer before:hidden hover:before:block before:absolute before:inset-0 before:bg-primary-dark relative before:rounded-[15px] before:opacity-70 text-[28px] uppercase font-[500] flex items-center flex-col justify-center text-light rounded-[15px] h-[250px] w-[327px]"
      style={{ background: `url(${imgSrc})` }}
    >
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
