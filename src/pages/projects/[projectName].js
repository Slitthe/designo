import React, { useEffect, useState } from "react";
import { projects } from "@/lib/data";
import { useRouter } from "next/router";
import HeaderCard from "@/components/HeaderCard/HeaderCard";
import FooterCard from "@/components/FooterCard/FooterCard";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import classes from "./project.module.scss";
import Head from "next/head";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: projects.map((project) => {
      return { params: { projectName: project.slug } };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { projects },
  };
}

function ProjectPage({ projects }) {
  const router = useRouter();
  const { projectName } = router.query;

  const [currentProject, setCurrentProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState(null);

  console.log({ currentProject, otherProjects, projectName });

  useEffect(() => {
    if (projects) {
      setCurrentProject(
        projects.find((project) => project.slug === projectName),
      );
      setOtherProjects(
        projects.filter((project) => project.slug !== projectName),
      );
    }
  }, [projectName, projects]);

  const projectCards = (
    <div className="px-small md:px-standard flex flex-col lg:grid lg:grid-cols-2 gap-standard md:gap-[30px]">
      {otherProjects?.map((project, index) => {
        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`block relative w-full h-[250px] md:min-h-[200px] lg:h-[308px]${
              index === 0 ? " lg:row-span-2" : ""
            }`}
          >
            <ProjectCard imgSrc={project.imgSources}>
              {project.name}
            </ProjectCard>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="bg-leaf bg-no-repeat bg-[0_15%]">
      <Head>
        <title>Designo - {currentProject?.name}</title>
      </Head>
      <div className="max-w-container mx-auto relative">
        <HeaderCard title={currentProject?.name}>
          {currentProject?.description}
        </HeaderCard>

        <div
          className={`mt-[120px] lg:mt-[160px] mb-[96px] md:mb-[110px] lg:mb-[160px] flex flex-col gap-[40px] md:gap-[32px] mx-small md:mx-standard lg:grid lg:grid-cols-3 lg:gap-[30px]`}
        >
          {currentProject?.projectSamples.map((sample) => {
            return (
              <div
                className={`${classes.projectCard} rounded-standard overflow-hidden flex flex-col md:h-[310px] md:grid md:grid-cols-2 lg:flex lg:flex-col lg:h-[468px]`}
                key={sample.name}
              >
                <img
                  src={sample.imgSrc}
                  className="object-cover w-full min-h-[320px] md:h-full"
                />
                <div
                  className={`${classes.infoSection} min-h-[160px] text-center bg-primary-light flex flex-col gap-[16px] py-[32px] px-[30px] md:flex md:flex-col md:justify-center md:py-[41px] lg:pt-[30px] md:h-[310px]`}
                >
                  <div
                    className={`${classes.title} text-primary-dark text-[20px] font-[500] leading-[26px] tracking-[5px] uppercase`}
                  >
                    {sample.title}
                  </div>
                  <div
                    className={`${classes.description} text-dark-faded text-[16px] font-[400] leading-[26px]`}
                  >
                    {sample.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>{projectCards}</div>
        <div className="mt-[96px] md:mt-[110px]">
          <FooterCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
