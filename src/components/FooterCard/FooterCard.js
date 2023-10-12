import React from "react";
import Button from "@/components/Button/Button";
import Link from "next/link";

function FooterCard() {
  return (
    <div className="lg:mt-[160px] mx-small px-small md:px-[58px] lg:p-0 lg:mx-standard bg-primary-dark rounded-standard pb-[64px] md:mih-[350px] lg:min-h-[292px] text-center flex flex-col align-center items-center lg:grid lg:grid-cols-2 bg-callToActionCircles bg-no-repeat bg-cover">
      <div className="lg:ml-[95px] lg:py-[72px] lg:h-100">
        <div className="lg:w-[298px] lg:text-left lg:p-0 mt-[64px] lg:mt-0 mb-[6px] text-light text-[32px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px]">
          Let’s talk about your project
        </div>
        <div className="lg:text-left text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </div>
      </div>

      <div className="lg:w-100">
        <div className="w-[152px] mt-[32px] lg:mt-0 lg:ml-auto lg:mr-[96px]">
          <Link href={"/contact"}>
            <Button>Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterCard;
