import { useMutation } from "@tanstack/react-query";

import { ProjectFormValues } from "@/project/forms/ProjectForm";
import { createProject } from "@/project/project.service";

/**
 * Custom hook to create a new project using a mutation.
 */
export const useNewProject = () =>
  useMutation({
    mutationFn: (data: ProjectFormValues) => {
      const formData: FormData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("tokenPrice", String(data.tokenPrice));
      formData.append("tokensCreated", String(data.tokensCreated));
      formData.append("amountToRaise", String(data.amountToRaise));
      formData.append("instagramUrl", data.social.instagramUrl);
      formData.append("discordUrl", data.social.discordUrl);
      formData.append("xUrl", data.social.xUrl);
      formData.append("mediumUrl", data.social.mediumUrl);
      formData.append("telegramUrl", data.social.telegramUrl);
      formData.append("photo", data.photo);
      formData.append("banner", data.banner);
      formData.append("whitepaper", data.whitepaper);
      formData.append("tokenomics", data.tokenomics);
      formData.append("litepaper", data.litepaper);

      return createProject(formData);
    },
  });
