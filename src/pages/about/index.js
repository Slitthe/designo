import FooterCard from "@/components/FooterCard/FooterCard";

import aboutHeroImg from "../../../public/about/desktop/image-about-hero.jpg";
import HeaderCard from "@/components/HeaderCard/HeaderCard";
import React from "react";
import LocationInfoCards from "@/components/LocationInfoCards/LocationInfoCards";

import talentImgMobile from "../../../public/about/mobile/image-world-class-talent.jpg";
import talentImgTablet from "../../../public/about/tablet/image-world-class-talent.jpg";
import talentImgDesktop from "../../../public/about/desktop/image-world-class-talent.jpg";

import heroImgMobile from "../../../public/about/mobile/image-about-hero.jpg";
import heroImgTablet from "../../../public/about/tablet/image-about-hero.jpg";
import heroImgDesktop from "../../../public/about/desktop/image-about-hero.jpg";

import realDealImgMobile from "../../../public/about/mobile/image-real-deal.jpg";
import realDealImgTablet from "../../../public/about/tablet/image-real-deal.jpg";
import realDealImgDesktop from "../../../public/about/desktop/image-real-deal.jpg";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default function About() {
  const { md, lg } = fullConfig.theme.screens;

  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <HeaderCard
        title={"About Us"}
        imageSrcset={{
          mobile: heroImgMobile.src,
          tablet: heroImgTablet.src,
          desktop: heroImgDesktop.src,
        }}
      >
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients’ audiences.
      </HeaderCard>

      <div
        className={`bg-primary-light mb-[120px] lg:mb-[160px] md:mx-standard md:rounded-standard text-center overflow-hidden lg:grid lg:grid-cols-10 md:mt-[120px] lg:mt-[160px] lg:text-left lg:min-h-[640px]`}
      >
        <div className="h-[325px] lg:col-span-4 lg:h-full relative">
          <picture className="w-full h-full absolute inset-0 object-cover">
            <source media={`(min-width:${lg})`} srcSet={talentImgDesktop.src} />
            <source media={`(min-width:${md})`} srcSet={talentImgTablet.src} />
            <img
              src={talentImgMobile.src}
              className="w-full h-full absolute inset-0 object-cover"
            />
          </picture>
        </div>
        <div className="md:mx-[60px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small md:px-0 lg:col-span-6 lg:py-[154px] lg:mx-[96px]">
          <div className="lg:p-0 text-primary-dark text-[32px] mb-[24px] md:text-[40px] md:leading-[48px] font-[500] leading-[36px] md:px-[119px] w-full">
            World-class talent
          </div>
          <div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px] mb-[24px]">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </div>

          <div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </div>
        </div>
      </div>

      <LocationInfoCards />

      <div
        className={`bg-primary-light my-[120px] md:mx-standard md:rounded-standard text-center overflow-hidden lg:grid lg:grid-cols-10 md:mt-[120px] lg:mt-[160px] lg:text-left lg:min-h-[640px]`}
      >
        <div className="h-[325px] lg:col-span-4 lg:h-full relative order-2">
          <picture className="w-full h-full absolute inset-0 object-cover">
            <source
              media={`(min-width:${lg})`}
              srcSet={realDealImgDesktop.src}
            />
            <source
              media={`(min-width:${md})`}
              srcSet={realDealImgTablet.src}
            />
            <img
              src={realDealImgMobile.src}
              className="w-full h-full absolute inset-0 object-cover"
            />
          </picture>
        </div>
        <div className="md:mx-[60px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small md:px-0 lg:col-span-6 lg:py-[154px] lg:mx-[96px]">
          <div className="lg:p-0 text-primary-dark text-[32px] mb-[24px] md:text-[40px] md:leading-[48px] font-[500] leading-[36px] md:px-[119px] w-full">
            The real deal
          </div>
          <div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px] mb-[24px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </div>

          <div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </div>
        </div>
        {/*<div className="md:mx-[60px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small md:px-0 lg:col-span-6">*/}
        {/*  <div className="lg:p-0 text-primary-dark text-[32px] mb-[24px] md:text-[40px] md:leading-[48px] font-[500] leading-[36px] md:px-[119px] w-full">*/}
        {/*    The real deal*/}
        {/*  </div>*/}
        {/*  <div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px] mb-[24px]">*/}
        {/*    As strategic partners in our clients’ businesses, we are ready to*/}
        {/*    take on any challenge as our own. Solving real problems require*/}
        {/*    empathy and collaboration, and we strive to bring a fresh*/}
        {/*    perspective to every opportunity. We make design and technology more*/}
        {/*    accessible and give you tools to measure success.*/}
        {/*  </div>*/}

        {/*<div className="text-dark-faded text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">*/}
        {/*  We are visual storytellers in appealing and captivating ways. By*/}
        {/*  combining business and marketing strategies, we inspire audiences to*/}
        {/*  take action and drive real results.*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>

      <FooterCard />
    </div>
  );
}
