import { RouteObject } from "react-router-dom";

import { registerModule } from "@/core/modules/modules.helpers";
import { ProjectDetails } from "@/project/pages/ProjectDetails";
import { AppLayout } from "@/shared/layouts/AppLayout";

import { MODULE_PROJECT, PROJECT_ROUTES } from "./project.constants";

const routes: RouteObject[] = [
  {
    path: PROJECT_ROUTES.MAIN,
    element: <AppLayout />,
    children: [
      {
        path: PROJECT_ROUTES.DETAILS,
        element: <ProjectDetails />,
      },
    ],
  },
];

registerModule({
  name: MODULE_PROJECT,
  routes,
});
