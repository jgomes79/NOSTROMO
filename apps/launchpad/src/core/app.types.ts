import { RouteObject } from "react-router-dom";

import { LocaleResources } from "@/i18n/i18n.types";

export interface Module {
  name: string;
  parent?: string;
  locales?: LocaleResources;
  routes?: RouteObject[];
}
