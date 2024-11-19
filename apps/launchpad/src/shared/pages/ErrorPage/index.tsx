import React from "react";

import { Typography } from "@/shared/components/Typography";

import styles from "./ErrorPage.module.scss";

interface ErrorPageProps {
  code?: string | React.ReactNode;
  title: string;
  description: string;
  actions?: React.ReactNode[];
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ code, title, description, actions = [] }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.field}>
        {code && (
          <Typography as="div" variant="heading" size="xlarge" className={styles.title} textAlign="center">
            {code}
          </Typography>
        )}
        <Typography as="h1" variant="heading" size="large" textAlign="center">
          {title}
        </Typography>
        <Typography as="p" textAlign="center" size="medium">
          {description}
        </Typography>

        {(actions && actions.length) > 0 && (
          <footer className={styles.footer}>
            <div className={styles.actions}>{actions.map((action) => action)}</div>
          </footer>
        )}
      </div>
    </div>
  );
};
