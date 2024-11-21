import React from "react";

import classNames from "clsx";

import styles from "./Button.module.scss";
import { Loader } from "../Loader";
import { Typography } from "../Typography";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  caption: string;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "small" | "medium";
  color?: "primary" | "secondary";
}

/**
 * Index component with customizable icons, loading state, and styling variants.
 */
export const Button: React.FC<Readonly<ButtonProps>> = ({
  type = "button",
  size = "medium",
  color = "primary",
  iconLeft,
  iconRight,
  isLoading,
  caption,
  variant = "solid",
  disabled,
  className,
  ...props
}) => (
  <button
    aria-label="button"
    type={type}
    disabled={isLoading || disabled}
    className={classNames(
      styles.layout,
      isLoading && styles.withLoader,
      styles[variant],
      styles[size],
      styles[color],
      className,
    )}
    {...props}
  >
    {iconLeft && <div className={styles.icon}>{iconLeft}</div>}
    <div className={styles.caption}>
      <Typography variant={"label"} size={size}>
        {caption}
      </Typography>
    </div>
    {iconRight && <div className={styles.icon}>{iconRight}</div>}

    {isLoading && (
      <div className={styles.loader}>
        <Loader size={22} />
      </div>
    )}
  </button>
);
