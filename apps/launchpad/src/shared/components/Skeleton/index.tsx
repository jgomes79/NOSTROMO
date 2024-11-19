import React from "react";

import classNames from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  count: number;
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  width?: "random" | "full";
  height?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  count,
  width = "random",
  height = 18,
  isLoading,
  className = "",
  children,
}) => {
  if (!isLoading) {
    return children;
  }

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key="skeleton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classNames(styles.layout, className)}
      >
        {[...Array(count)].map((_, index) => (
          <div
            key={`--skeleton-${index}`}
            className={styles.row}
            style={{ width: width === "random" ? `${60 + Math.random() * 40}%` : "100%", height: `${height}px` }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
