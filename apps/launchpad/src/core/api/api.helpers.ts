import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

import { ServiceNames } from "./api.types";

/**
 * Retrieves the API endpoint from the environment variables.
 *
 * @param {ServiceNames} service - The name of the service.
 * @param {string} path - The specific path for the service.
 * @returns {string} - The API endpoint URL.
 */
export const getEndpoint = (service: ServiceNames, path: string): string =>
  import.meta.env.VITE_APP_ENDPOINT
    ? `${import.meta.env.VITE_APP_ENDPOINT}/${service}${path}`
    : `https://api.mindney.com/${service}${path}`;

/**
 * Sends a generic HTTP request with the Bearer token from localStorage injected into the header.
 *
 * @template T - The type of the response data.
 * @param {string} url - The endpoint URL.
 * @param {AxiosRequestConfig} [config={}] - The Axios request configuration.
 * @returns {Promise<T>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if an authenticated token is required but not found.
 */
export async function request<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
  const token = Cookies.get("Authorization");

  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      if (config.params[key] === null) {
        delete config.params[key];
      }
    });
  }

  return axios({
    url,
    ...config,
    headers: {
      ...config.headers,
      Authorization: `${token}`,
    },
    withCredentials: true,
  }).then((response) => response.data);
}