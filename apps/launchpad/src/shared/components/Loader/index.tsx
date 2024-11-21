import React from "react";

import classNames from "clsx";

import styles from "./Loader.module.scss";

/**
 * Props for Loader component.
 * @param variant - The visual style variant of the loader, either "default" or "full".
 * @param size - The size of the loader in pixels.
 */
interface LoaderProps {
  variant?: "default" | "full";
  color?: "orange" | "gray";
  size?: number;
}

/**
 * Loader component that displays a loading animation.
 *
 * @param props - The properties passed to the Loader component.
 * @returns The Loader component with specified variant and size.
 */
export const Loader: React.FC<LoaderProps> = ({ color = "orange", variant = "default", size = 42 }) => (
  <div className={classNames(styles[variant], styles[color])}>
    <div
      className={styles.loader}
      style={{
        width: `${size}px`,
      }}
    />
  </div>
);
