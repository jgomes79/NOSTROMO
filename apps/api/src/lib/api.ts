import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Makes an HTTP request using Axios.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to request.
 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration.
 * @returns {Promise<AxiosResponse<T>>} The Axios response.
 * @throws {Error} Throws an error if the request fails.
 */
export async function request<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  try {
    return await axios.request<T>({
      url,
      ...config,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Request error:", error.message);
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
}
