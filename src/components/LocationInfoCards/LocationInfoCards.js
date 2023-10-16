import React from "react";
import Button from "@/components/Button/Button";
import { locations } from "@/lib/data";
import Link from "next/link";

function LocationInfoCards() {
  return (
    <div className="mt-[120px] lg:mt-[160px] mx-small md:mx-standard lg:grid lg:grid-cols-3 lg:gap-[30px] pb-[120px] lg:pb-[160px]">
      {locations.map((location, index, array) => {
        return (
          <div
            className={`${
              index !== array.length - 1 ? "mb-[80px] lg:mb-0" : ""
            }`}
            key={location.name}
          >
            <div className="flex flex-col items-center lg:flex">
              <div className="w-[202px] h-[202px] row-span-2 relative bg-smallCircle bg-no-repeat">
                <img
                  src={location.illustrationSrc}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:ml-[18px] text-center md:text-left lg:text-center flex flex-col items-center">
                <div className="mb-[32px] lg:mb-[32px] mt-[48px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">
                  {location.name}
                </div>
                <div className="text-[16px] font-normal leading-[26px] w-[152px]">
                  <Link href={"/locations"}>
                    <Button isDark>See Location</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/*<div className="mb-[80px]">*/}
      {/*  <div className="flex flex-col items-center lg:flex">*/}
      {/*    <div className="w-[202px] h-[202px] row-span-2">*/}
      {/*      <InfoCardImg />*/}
      {/*    </div>*/}

      {/*    <div className="md:ml-[18px] text-center md:text-left lg:text-center ">*/}
      {/*      <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">*/}
      {/*        passionate*/}
      {/*      </div>*/}
      {/*      <div className="text-[16px] font-normal leading-[26px]">*/}
      {/*        <Button isDark>Test</Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="mb-[80px]">*/}
      {/*  <div className="flex flex-col items-center lg:flex">*/}
      {/*    <div className="w-[202px] h-[202px] row-span-2">*/}
      {/*      <InfoCardImg />*/}
      {/*    </div>*/}

      {/*    <div className="md:ml-[18px] text-center md:text-left lg:text-center ">*/}
      {/*      <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">*/}
      {/*        passionate*/}
      {/*      </div>*/}
      {/*      <div className="text-[16px] font-normal leading-[26px]">*/}
      {/*        <Button isDark>Test</Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="mb-[80px]">*/}
      {/*  <div className="flex flex-col items-center lg:flex">*/}
      {/*    <div className="w-[202px] h-[202px] row-span-2">*/}
      {/*      <InfoCardImg />*/}
      {/*    </div>*/}

      {/*    <div className="md:ml-[18px] text-center md:text-left lg:text-center ">*/}
      {/*      <div className="mb-[32px] md:mb-[16px] lg:mb-[32px] mt-[48px] md:mt-[40px] lg:mt-[48px] text-dark-faded text-[20px] font-[500] tracking-[5px] leading-[26px] uppercase">*/}
      {/*        passionate*/}
      {/*      </div>*/}
      {/*      <div className="text-[16px] font-normal leading-[26px]">*/}
      {/*        <Button isDark>Test</Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default LocationInfoCards;
