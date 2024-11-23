import React from "react";

import { ProjectForm } from "@/project/forms/ProjectForm";

import styles from "./NewProject.module.scss";

export const NewProject: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.form}>
        <ProjectForm onSubmit={(e) => console.log(e)} onCancel={() => console.log("onCancel")} />
      </div>
    </div>
  );
};
