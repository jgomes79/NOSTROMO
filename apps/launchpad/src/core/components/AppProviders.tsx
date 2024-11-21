import React from "react";
import { Outlet } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { I18nProvider } from "@/i18n/i18n.provider";
import { WalletProvider } from "@/wallet/wallet.provider";

import { queryClient as defaultQueryClient } from "../queryClient";

interface AppProvidersProps {
  readonly queryClient?: QueryClient;
}

/**
 * AppProviders component that sets up the application-wide providers.
 *
 * @param {AppProvidersProps} props - The properties object.
 * @param {QueryClient} [props.queryClient=defaultQueryClient] - The QueryClient instance to be used by react-query.
 *
 * @returns {JSX.Element} The providers wrapped around the app.
 */
export function AppProviders({ queryClient = defaultQueryClient }: AppProvidersProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <I18nProvider>
          <Outlet />
        </I18nProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
}
