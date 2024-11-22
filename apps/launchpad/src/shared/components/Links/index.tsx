import React from "react";

import styles from "./Links.module.scss";

/**
 * Props for Loader component.
 * @param variant - The visual style variant of the loader, either "default" or "full".
 * @param size - The size of the loader in pixels.
 */
interface LinksProps {
  data: Array<{
    path: string;
    icon: React.ReactNode;
  }>;
}

/**
 * Loader component that displays a loading animation.
 *
 * @param props - The properties passed to the Loader component.
 * @returns The Loader component with specified variant and size.
 */
export const Links: React.FC<LinksProps> = ({ data = [] }) => (
  <nav className={styles.layout}>
    {data.map((link, index) => (
      <a href={link.path} target={"_blank"} className={styles.link} rel="noreferrer" key={`--link-${index.toString()}`}>
        {link.icon}
      </a>
    ))}
  </nav>
);
