import React from "react";

import styles from "./SkyBox.module.scss";

interface SkyBoxProps {
  children: React.ReactNode;
}

/**
 * SkyBox Component
 *
 * Renders a skybox layout with stars, twinkling, and clouds effects.
 *
 * @param {SkyBoxProps} props - The props for the SkyBox component.
 * @returns {JSX.Element} The rendered SkyBox component.
 */
export const SkyBox: React.FC<SkyBoxProps> = ({ children }: SkyBoxProps): JSX.Element => (
  <div className={styles.layout}>
    <div className={styles.container}>{children}</div>
  </div>
);
