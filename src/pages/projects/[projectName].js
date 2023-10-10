import React from "react";
import { projects } from "@/lib/data";
import { useRouter } from "next/router";
import HeaderCard from "@/components/HeaderCard/HeaderCard";
import FooterCard from "@/components/FooterCard/FooterCard";

function ProjectPage() {
  const router = useRouter();
  const { projectName } = router.query;

  const currentProject = projects.find(
    (project) => project.slug === projectName,
  );
  console.log({ currentProject });

  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <HeaderCard title={currentProject.name}>
        {currentProject.description}
      </HeaderCard>
      <FooterCard />
    </div>
  );
}

export default ProjectPage;
