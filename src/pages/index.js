import { Inter } from "next/font/google";
import webDesignImg from "../../public/web-design/image-web-design-small.jpg";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import InfoCardImg from "../../public/illustration-resourceful.svg";
import InfoCard from "@/components/InfoCard/InfoCard";
import FooterCard from "@/components/FooterCard/FooterCard";
import HomeHeaderCard from "@/components/HomeHeaderCard/HomeHeaderCard";
import {projects} from "@/lib/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projectCards = (
    <div className="px-small md:px-standard flex flex-col lg:grid lg:grid-cols-2 gap-standard md:gap-[30px]">
        {projects.map((project, index) => {
            return <Link key={project.slug} href={`/projects/${project.slug}`} className={`block relative w-full h-[250px] md:h-[200px] lg:h-[308px]${index === 0 ? " lg:row-span-2 lg:h-full" : ""}`}>
                <ProjectCard imgSrc={project.iconSrc}>{project.name}</ProjectCard>
            </Link>;
        })}
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
