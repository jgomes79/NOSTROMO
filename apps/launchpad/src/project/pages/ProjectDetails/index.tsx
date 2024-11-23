import React from "react";
import { useParams } from "react-router-dom";

import { Button } from "@/shared/components/Button";
import { Loader } from "@/shared/components/Loader";
import { Typography } from "@/shared/components/Typography";
import { ErrorPage } from "@/shared/pages/ErrorPage";

import styles from "./ProjectDetails.module.scss";
import { useProject } from "../../hooks/useProject";

type ProjectDetailsParams = {
  slug: string;
};

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<ProjectDetailsParams>();

  const project = useProject(slug);

  if (project.isLoading && !project.data) {
    return <Loader variant={"full"} size={42} />;
  }

  if ((!project.isLoading && !project.data) || !project.data) {
    return (
      <ErrorPage
        code={"404"}
        title={"Project Not Found"}
        description={"We're sorry, but the project you're looking for is either unavailable or doesn't exist."}
        actions={[<Button key={"home"} caption={"Return Home"} />]}
      />
    );
  }

  return (
    <div className={styles.layout}>
      <img src={project.data.photoUrl} width={256} height={256} alt={`${project.data.name} photo`} />
      <img src={project.data.bannerUrl} width={256} height={256} alt={`${project.data.name} banner`} />
      <Typography>{project.data.name}</Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: project.data.description }} />
      </Typography>
    </div>
  );
};
