import FooterCard from "@/components/FooterCard/FooterCard";
import Head from "next/head";
import dynamic from "next/dynamic";
import { locations } from "@/lib/data";

const MapCard = dynamic(() => import("../../components/MapCard/MapCard"), {
  ssr: false,
});

export default function Locations() {
  return (
    <>
      <Head>
        <title>Designo - Locations</title>
      </Head>

      <div className="max-w-container mx-auto relative overflow-hidden">
        <div className="flex flex-col gap-large md:gap-[120px] lg:mt-[60px] lg:gap-[32px] md:mt-[64px] md:px-standard">
          {locations.map((location, index) => {
            return (
              <div
                className="md:flex md:flex-col md:gap-[31px] lg:grid lg:grid-cols-3"
                key={location.name}
              >
                <div
                  className={`overflow-hidden h-[320px] z-10 md:rounded-standard lg:h-full md:min-h-[326px]${
                    index % 2 === 0 ? " lg:order-1" : " lg:order-0"
                  }`}
                >
                  <MapCard coordinates={location.coordinates} />
                </div>
                <div className="bg-threeCircles bg-cover md:bg-twoCircles col-span-2 py-[80px] px-small md:py-[96px] lg:w-full md:px-[75px] lg:pl-[96px] md:text-left md:min-h-[326px] min-h-[320px] bg-primary-light text-center flex flex-col justify-center text-dark-faded text-[15px] font-[400] leading-[25px] gap-standard md:rounded-standard">
                  <h2 className="text-primary-dark text-[32px] font-[500] leading-[36px] md:text-[40px] md:leading-[48px]">
                    {location.name}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-[24px] md:gap-[30px] justify-between md:text-[16px] md:leading-[26px]">
                    <div className="flex-1">
                      <div className="font-[700]">{location.address.name}</div>
                      <div>{location.address.street}</div>
                      <div>{location.address.misc}</div>
                    </div>

                    <div className="flex-1">
                      <div className="font-[700]">Contact</div>
                      <div>P: {location.contact.phone}</div>
                      <div>M: {location.contact.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-[120px]">
          <FooterCard />
        </div>
      </div>
    </>
  );
}
