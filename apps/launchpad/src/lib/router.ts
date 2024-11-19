/**
 * Replaces route parameters with dynamic data.
 * @param route The route template with parameters.
 * @param params Object containing the dynamic data to replace in the route.
 * @returns The route with parameters replaced by dynamic data.
 */
export function getRoute(route: string, params: Record<string, string | number>): string {
  return Object.keys(params).reduce((updatedRoute, key) => {
    return updatedRoute.replace(`:${key}`, `${params[key]}`);
  }, route);
}
