import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import Cookies from "js-cookie";

import { ErrorCodes } from "../errors.types";

export const useErrorInterceptor = () => {
  /**
   * Configures Axios interceptors for request and response handling.
   * This function sets up interceptors to manage the configuration of requests and the handling of responses and errors.
   */
  function configureErrorInterceptors() {
    axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        await catchHandleError(error.response?.status as ErrorCodes);
        return Promise.reject(error);
      },
    );
  }

  /**
   * Asynchronously handles errors by executing specific actions based on the error code.
   * This function maps error codes to corresponding handler functions that perform actions such as
   * showing notifications or triggering authentication processes.
   *
   * @param {ErrorCodes} code - The error code to handle.
   * @returns {Promise<void>} A promise that resolves when the error handling is complete.
   */
  const catchHandleError = async (code: ErrorCodes): Promise<void> => {
    const errorHandlers = {
      [ErrorCodes.NOT_AUTHORIZED]: async () => {
        Cookies.remove("Authorization");
      },
    };

    const handler = errorHandlers[code];

    if (handler) {
      await handler();
    } else {
      throw Error(`Unexpected error code: ${code}`);
    }
  };

  return {
    configureErrorInterceptors,
  };
};
