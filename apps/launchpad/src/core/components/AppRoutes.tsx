import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { getAllRoutes } from "@/core/modules/modules.helpers";

/**
 * AppRoutes component.
 *
 * Sets up and provides the router for the application using all registered routes.
 *
 * @returns {JSX.Element} The RouterProvider component.
 */
export function AppRoutes(): JSX.Element {
  const router = createBrowserRouter(getAllRoutes(), { basename: "/" });

  return <RouterProvider router={router} />;
}
