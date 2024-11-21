import { useMemo } from "react";

import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

/** Default query cache time in milliseconds (1 hour) */
export const QUERY_CACHE_TIME = 1000 * 60 * 60; // 1 hour

/**
 * Default configuration options for the QueryClient.
 */
export const defaultQueryClientOptions = {
  defaultOptions: {
    queries: {
      gcTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
    },
  },
};

/**
 * Factory function to create a new QueryClient instance.
 * @param options - Optional configuration to override default options.
 * @returns A new QueryClient instance.
 */
export function queryClientFactory(options?: QueryClientConfig) {
  return new QueryClient({ ...defaultQueryClientOptions, ...options });
}

/** Default QueryClient instance */
export const queryClient = queryClientFactory();

/**
 * Custom hook to provide query client cache options.
 * @returns An object containing gcTime and staleTime options.
 */
export function useQueryClientCacheOptions() {
  return useMemo(
    () => ({
      gcTime: QUERY_CACHE_TIME,
      staleTime: Number.POSITIVE_INFINITY,
    }),
    [],
  );
}
