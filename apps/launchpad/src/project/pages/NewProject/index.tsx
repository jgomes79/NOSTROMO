import React, { useCallback } from "react";

import { ProjectForm } from "@/project/forms/ProjectForm";
import { useNewProject } from "@/project/hooks/useNewProject";

import styles from "./NewProject.module.scss";
import { ProjectFormValues } from "../../forms/ProjectForm";

export const NewProject: React.FC = () => {
  const newProjectMutation = useNewProject();

  /**
   * Handles the submit button click event and triggers the new project mutation with the provided form values.
   *
   * @param {ProjectFormValues} values - The form values from the project form.
   */
  const handleClickSubmit = useCallback((values: ProjectFormValues) => {
    console.log(values);
    newProjectMutation.mutate(values);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.form}>
        <ProjectForm onSubmit={handleClickSubmit} onCancel={() => console.log("onCancel")} />
      </div>
    </div>
  );
};
