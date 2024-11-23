import axios, { AxiosRequestConfig } from "axios";

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
    : `https://api.nostromo.com/${service}${path}`;

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
    withCredentials: true,
  }).then((response) => response.data);
}

/**
 * Sends an HTTP request with data as FormData, including files and other fields.
 *
 * @template T - The type of the response data.
 * @param {string} url - The endpoint URL.
 * @param {FormData} formData - The form data to be sent, including files.
 * @param {AxiosRequestConfig} [config={}] - The Axios request configuration.
 * @returns {Promise<T>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if an authenticated token is required but not found.
 */
export async function requestWithFile<T>(url: string, formData: FormData, config: AxiosRequestConfig = {}): Promise<T> {
  return axios({
    url,
    method: "POST",
    data: formData,
    headers: {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
    ...config,
  }).then((response) => response.data);
}
