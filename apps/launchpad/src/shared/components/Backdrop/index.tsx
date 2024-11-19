import React, { ReactNode } from "react";

import classNames from "clsx";

import styles from "./Backdrop.module.scss";

interface BackdropProps {
  /**
   * The content to be rendered inside the backdrop.
   */
  children: ReactNode;

  /**
   * The visual style variant of the backdrop.
   * - "dialog": Used specifically for dialog modals.
   * - "default": Used for general purposes.
   */
  variant?: "dialog" | "default";
}

/**
 * Backdrop component - A full-screen overlay with a blurred background, typically used for modals or loading screens.
 *
 * @param {BackdropProps} props - The properties for the Backdrop component.
 * @returns {React.ReactElement} The rendered Backdrop component.
 */
export const Backdrop: React.FC<BackdropProps> = ({
  variant = "default",
  children,
}: BackdropProps): React.ReactElement => (
  <div className={classNames(styles.layout, styles[variant])}>
    <div className={styles.container}>{children}</div>
  </div>
);
