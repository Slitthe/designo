import React from "react";
import FbIcon from "../../../public/icon-facebook.svg";
import YoutubeIcon from "../../../public/icon-youtube.svg";
import TwitterIcon from "../../../public/icon-twitter.svg";
import PinterestIcon from "../../../public/icon-pinterest.svg";
import InstagramIcon from "../../../public/icon-instagram.svg";
import Link from "next/link";
import logoLight from "../../../public/logo-light.png";

// 64 190
function Footer({ isOverlapped = true }) {
  return (
    <div
      className={` pb-[60px] md:pb-[80px] w-full bg-dark items-center flex flex-col${
        isOverlapped ? " mt-[-190px] md:mt-[-80px] lg:mt-[-74px]" : ""
      }`}
    >
      <div
        className={`pt-[64px] md:pt-[80px] lg:pt-[74px] px-[24px] md:px-[40px] md:flex w-full max-w-container${
          isOverlapped ? " mt-[190px]  md:mt-[80px]  lg:mt-[74px] " : ""
        }`}
      >
        <div className={`flex justify-center${isOverlapped ? " " : ""}`}>
          <Link
            href="/"
            className="flex items-center text-light hover:text-primary-dark"
          >
            <img src={logoLight.src} className="h-[24px]" />
            {/*<img*/}
            {/*  className="mr-[16px]"*/}
            {/*  src={"/header_icon.png"}*/}
            {/*  alt={"Header image, semi-filled circle"}*/}
            {/*/>*/}
            {/*<div className="tracking-[5px] uppercase font-bold text-[24px] ">*/}
            {/*  Designo*/}
            {/*</div>*/}
          </Link>
        </div>
        <div className="md:hidden bg-light opacity-10 h-[1px] my-[32px]"></div>

        <nav className="md:ml-auto flex flex-col md:flex-row items-center gap-[32px] md:gap-[42px] lg:gap-[42px] text-light text-[14px] font-normal tracking-[2px] leading-[14px] uppercase">
          <Link href={"/about"} className="hover:text-primary-dark">
            Our company
          </Link>
          <Link href={"/locations"} className="hover:text-primary-dark">
            Locations
          </Link>
          <Link href={"/contact"} className="hover:text-primary-dark">
            Contact
          </Link>
        </nav>
      </div>

      <div className="relative px-[24px] md:px-[40px] hidden md:block self-stretch opacity-10 mx-auto mb-[31px] mt-[41px] w-full max-w-container before:absolute before:h-[1px] before:bg-light before:left-[40px] before:right-[40px]"></div>

      <div className="px-[24px] md:px-[40px] w-full flex text-light text-[16px] leading-[26px] flex-col md:flex-row text-center md:text-left mt-[40px] md:mt-0 max-w-container">
        <div className="font-normal mb-[40px] md:mb-0 opacity-50 md:w-[223px] lg:w-[450px] md:mr-[10px]">
          <div className="font-bold">Designo Central Office</div>
          <div>3886 Wellington Street</div>
          <div>Toronto, Ontario M9C 3J5</div>
        </div>

        <div className="font-bold mb-[40px] md:mb-0 opacity-50 md:w-[223px] lg:w-[450px]">
          <div>Contact Us (Central Office)</div>
          <div>P: +1 253-863-8967</div>
          <div>M: contact@designo.co</div>
        </div>

        <div className="flex gap-[16px] items-center justify-center md:ml-auto md:items-end">
          <a href="#" target={"_blank"}>
            <FbIcon className="fill-primary-dark hover:fill-light" />
          </a>
          <a href="#" target={"_blank"}>
            <YoutubeIcon className="fill-primary-dark hover:fill-light" />
          </a>
          <a href="#" target={"_blank"}>
            <TwitterIcon className="fill-primary-dark hover:fill-light" />
          </a>
          <a href="#" target={"_blank"}>
            <PinterestIcon className="fill-primary-dark hover:fill-light" />
          </a>
          <a href="#" target={"_blank"}>
            <InstagramIcon className="fill-primary-dark hover:fill-light" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
