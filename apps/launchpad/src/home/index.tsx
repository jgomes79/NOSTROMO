import { RouteObject } from "react-router-dom";

import { registerModule } from "@/core/modules/modules.helpers";
import { AppLayout } from "@/shared/layouts/AppLayout";

import { MODULE_HOME, HOME_ROUTES } from "./home.constants";
import { HomePage } from "./pages/HomePage";

const routes: RouteObject[] = [
  {
    path: HOME_ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

registerModule({
  name: MODULE_HOME,
  routes,
});
