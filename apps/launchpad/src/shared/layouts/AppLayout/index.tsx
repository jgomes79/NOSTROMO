import React, { ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useErrorInterceptor } from "@/core/errors/hooks/useErrorInterceptor";
import { AppBar } from "@/shared/components/AppBar";

import styles from "./AppLayout.module.scss";

export interface AppLayoutProps {
  readonly children?: ReactNode;
}

/**
 * AppLayout component - Provides the layout structure for authenticated pages.
 * Includes an optional header and an Outlet for nested routes.
 *
 * @param {AppLayoutProps} props - The properties for the AppLayout component.
 * @returns {React.ReactElement} The rendered AppLayout component.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps): React.ReactElement => {
  const { configureErrorInterceptors } = useErrorInterceptor();

  /**
   * Effect to configure error interceptors on component mount.
   */
  useEffect(() => {
    configureErrorInterceptors();
  }, []);

  return (
    <div className={styles.container}>
      <AppBar />
      <Outlet />
      {children}
    </div>
  );
};
