import Image from "next/image";
import { Inter } from "next/font/google";
import webDesignImg from "../../public/image-web-design-large.jpg";
import Button from "@/components/Button/Button";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import InfoCardImg from "../../public/illustration-resourceful.svg";
import InfoCard from "@/components/InfoCard/InfoCard";
import imgHero from "../../public/image-hero-phone.png";
import mobileHero from "../../public/hero.png";
import FooterCard from "@/components/FooterCard/FooterCard";
import HomeHeaderCard from "@/components/HomeHeaderCard/HomeHeaderCard";
import HeaderCard from "@/components/HeaderCard/HeaderCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projectCards = (
    <div className="px-small md:px-standard flex flex-col lg:grid lg:grid-cols-2">
      <div className="w-full h-[250px] md:h-[200px] mb-small md:mb-standard lg:row-span-2 lg:h-full lg:pr-[30px]">
        <ProjectCard imgSrc={webDesignImg.src}>Web Design</ProjectCard>
      </div>
      <div className="w-full h-[250px]  md:h-[200px] mb-small md:mb-standard lg:mb-small lg:h-[308px]">
        <ProjectCard imgSrc={webDesignImg.src}>Web Design</ProjectCard>
      </div>
      <div className="w-full h-[250px] md:h-[200px] lg:h-[308px]">
        <ProjectCard imgSrc={webDesignImg.src}>Web Design</ProjectCard>
      </div>
    </div>
  );

  const infoCards = (
    <div className="mt-[120px] lg:mt-[160px] mx-small md:mx-standard lg:grid lg:grid-cols-3 lg:gap-[30px]">
      <div className="mb-[80px] md:mb-[32px]">
        <InfoCard img={<InfoCardImg />} title="passionate">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </InfoCard>
      </div>
      <div className="mb-[80px] md:mb-[32px]">
        <InfoCard img={<InfoCardImg />} title="passionate">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </InfoCard>
      </div>
      <div>
        <InfoCard img={<InfoCardImg />} title="passionate">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </InfoCard>
      </div>
    </div>
  );
  return (
    <main className="max-w-[1111px] mx-auto relative overflow-hidden">
      <HomeHeaderCard />
      {projectCards}
      {infoCards}
      <FooterCard />
    </main>
  );
}
