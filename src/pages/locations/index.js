import { locations } from "@/lib/data";
import FooterCard from "@/components/FooterCard/FooterCard";

export default function Locations() {
  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <div className="flex flex-col gap-large px-standard md:gap-[120px] lg:mt-[60px] lg:gap-[32px]">
        {locations.map((location, index) => {
          return (
            <div className="md:flex md:flex-col md:gap-[31px] lg:grid lg:grid-cols-3">
              <div
                className={`overflow-hidden h-[320px] md:rounded-standard md:h-[326px]${
                  index % 2 === 0 ? " lg:order-0" : " lg:order-1"
                }`}
              >
                <img
                  src={location.locationImgSrc}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="lg:col-span-2 lg:w-full md:px-[80px] md:text-left md:min-h-[326px] min-h-[320px] bg-primary-light text-center flex flex-col justify-center text-dark-faded text-[15px] font-[400] leading-[25px] gap-standard md:rounded-standard">
                <div className="text-primary-dark text-[32px] font-[500] leading-[26px] md:text-[40px] md:leading-[40px]">
                  {location.name}
                </div>
                <div className="md:flex md:gap-[120px]">
                  <div>
                    <div className="font-[700]">{location.address.name}</div>
                    <div>{location.address.street}</div>
                    <div>{location.address.misc}</div>
                  </div>

                  <div>
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

      <FooterCard />
    </div>
  );
}
