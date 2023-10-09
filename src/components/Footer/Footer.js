import React from "react";
import FbIcon from "../../../public/icon-facebook.svg";
import YoutubeIcon from "../../../public/icon-youtube.svg";
import TwitterIcon from "../../../public/icon-twitter.svg";
import PinterestIcon from "../../../public/icon-pinterest.svg";
import InstagramIcon from "../../../public/icon-instagram.svg";
import Link from "next/link";

function Footer({ isOverlapped }) {
  return (
    <div
      className={`w-full bg-dark pb-[64px] pt-[64px] flex flex-col${
        isOverlapped ? " mt-[-190px]" : ""
      }`}
    >
      <div
        className={`flex justify-center${isOverlapped ? " mt-[190px]" : ""}`}
      >
        <Link href="/" className="flex items-center">
          <img
            className="mr-[16px]"
            src={"/header_icon.png"}
            alt={"Header image, semi-filled circle"}
          />
          <div className="tracking-[5px] uppercase font-bold text-[24px] text-light">
            Designo
          </div>
        </Link>
      </div>
      <div className="mx-[24px] bg-light opacity-10 h-[1px] my-[32px]"></div>
      <nav className="flex flex-col items-center gap-[32px] text-light text-[14px] font-normal tracking-[2px] leading-[14px] uppercase">
        <Link href={"/about"} className="hover:text-primary-dark">
          About
        </Link>
        <Link href={"/about"} className="hover:text-primary-dark">
          Locations
        </Link>
        <Link href={"/about"} className="hover:text-primary-dark">
          Contact
        </Link>
      </nav>
      <div className="flex text-light text-[16px] leading-[26px] flex-col text-center mt-[40px]">
        <div className="font-normal mb-[40px] opacity-50">
          <div className="font-bold">Designo Central Office</div>
          <div>3886 Wellington Street</div>
          <div>Toronto, Ontario M9C 3J5</div>
        </div>

        <div className="font-bold mb-[40px] opacity-50">
          <div>Contact Us (Central Office)</div>
          <div>P: +1 253-863-8967</div>
          <div>M: contact@designo.co</div>
        </div>

        <div className="flex gap-[16px] items-center justify-center">
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
