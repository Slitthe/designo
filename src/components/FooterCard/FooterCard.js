import React from "react";
import Button from "@/components/Button/Button";

function FooterCard() {
  return (
    <div className="mt-[121px] md:mt-[105px] lg:mt-[160px] mx-small px-small md:px-[58px] lg:p-0 lg:mx-standard bg-primary-dark rounded-standard h-[379px] md:h-[350px] lg:h-[292px] text-center flex flex-col align-center items-center lg:grid lg:grid-cols-2">
      <div className="lg:ml-[95px] lg:h-100">
        <div className="lg:w-[298px] lg:text-left lg:p-0 mt-[64px] lg:mt-0 mb-[6px] text-light text-[32px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px]">
          Let’s talk about your project
        </div>
        <div className="lg:text-left text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </div>
      </div>

      <div className="lg:w-100">
        <div className="w-[152px] mt-[30px] lg:mt-0 lg:ml-auto lg:mr-[96px]">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
}

export default FooterCard;
