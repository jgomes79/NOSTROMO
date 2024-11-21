import React from "react";
import { RouteObject } from "react-router-dom";

import { deepmerge } from "deepmerge-ts";

import { LocaleResources } from "@/i18n/i18n.types";
import { AppLayout } from "@/shared/layouts/AppLayout";
import { ErrorPage } from "@/shared/pages/ErrorPage";

import { Module } from "../app.types";
import { AppProviders } from "../components/AppProviders";

export type GlobalThis = typeof globalThis & { APP_MODULES: Module[] };

// use globalThis to store modules as singleton
// avoid problems with vite.setup cached imports
if (!(globalThis as GlobalThis).APP_MODULES) {
  (globalThis as GlobalThis).APP_MODULES = [];
}

/**
 * Array to store registered modules.
 */
const modules: Module[] = (globalThis as GlobalThis).APP_MODULES;

/**
 * Retrieves all registered modules.
 * @returns {Module[]} An array of registered modules.
 */
export const getModules = (): Module[] => {
  return modules;
};

/**
 * Retrieves all locale resources from registered modules.
 * @returns {LocaleResources} An object containing all locale resources.
 */
export const getAllLocalesResources = (): LocaleResources => {
  return modules
    .filter((module) => !!module.locales)
    .reduce((acc, module) => {
      return deepmerge(acc, module.locales!);
    }, {} as LocaleResources);
};

/**
 * Retrieves all routes from registered modules.
 *
 * @returns {RouteObject[]} An array of route objects.
 *
 * This function iterates over all registered modules to gather their respective routes,
 * consolidates them into a single array, and appends a default 404 route at the end
 * to handle unknown paths.
 */
export const getAllRoutes = (): RouteObject[] => {
  const routes = modules.filter((module) => !!module.routes).flatMap((module) => module.routes) as RouteObject[];

  // Adding 404 error to the global routes.
  routes.push({
    path: "*",
    element: (
      <AppLayout>
        <ErrorPage
          code={"404"}
          title={"Page not found"}
          description={
            "Sorry, the page you are looking for does not exist. It might have been removed or you may have mistyped the URL. Please check and try again."
          }
        />
      </AppLayout>
    ),
  });

  return [
    {
      path: "",
      element: <AppProviders />,
      children: routes,
    },
  ];
};

/**
 * Registers a new module.
 * @param {Module} module - The module to register.
 */
export function registerModule(module: Module): void {
  modules.push(module);
}
