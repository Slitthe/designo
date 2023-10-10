import Image from "next/image";
import { Inter } from "next/font/google";
import webDesignImg from "../../public/image-web-design-large.jpg";
import Button from "@/components/Button/Button";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[1111px] mx-auto relative">
      Home
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectCard imgSrc={webDesignImg.src}>Web Design</ProjectCard>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="w-full bg-primary-dark text-light text-center border-b-light">
        asd
      </div>
    </main>
  );
}
