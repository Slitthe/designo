import FooterCard from "@/components/FooterCard/FooterCard";

import aboutHeroImg from "../../../public/image-about-hero.jpg";
import HeaderCard from "@/components/HeaderCard/HeaderCard";
import React from "react";
import InfoCard from "@/components/InfoCard/InfoCard";
import InfoCardImg from "../../../public/illustration-resourceful.svg";
import Button from "@/components/Button/Button";

export default function About() {
  const infoCards = (
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

  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <HeaderCard title={"About Us"} imageSrc={aboutHeroImg.src}>
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients’ audiences.
      </HeaderCard>

      <div
        className={`bg-primary-light mb-[120px] md:mx-standard md:rounded-standard text-center overflow-hidden lg:grid lg:grid-cols-5 md:mt-[120px] lg:text-left lg:min-h-[640px]`}
      >
        <div className="h-[325px] lg:col-span-2 lg:h-full">
          <img src={aboutHeroImg.src} className="w-full h-full object-cover" />
        </div>
        <div className="md:mx-[70px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small lg:col-span-3">
          <div className="lg:p-0 text-primary-dark text-[32px] mb-[24px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px] w-full">
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

      {infoCards}

      <div
        className={`bg-primary-light mb-[120px] md:mx-standard md:rounded-standard text-center overflow-hidden lg:grid lg:grid-cols-5 md:mt-[120px] lg:text-left lg:min-h-[640px]`}
      >
        <div className="h-[325px] lg:order-2 lg:col-span-2 lg:h-full">
          <img src={aboutHeroImg.src} className="w-full h-full object-cover" />
        </div>
        <div className="md:mx-[70px] py-[80px] md:py-[64px] min-h-[325px] md:min-h[252px] flex flex-col align-center items-center justify-center px-small lg:col-span-3">
          <div className="lg:p-0 text-primary-dark text-[32px] mb-[24px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px] w-full">
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

      <FooterCard />
    </div>
  );
}
