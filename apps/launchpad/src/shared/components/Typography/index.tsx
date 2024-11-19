import React, { CSSProperties } from 'react';

import classNames from 'clsx';

import styles from './Typography.module.scss';

export interface TypographyProps {
  /**
   * Specifies the visual style of the text.
   * - 'heading': For headings.
   * - 'body': For standard body text.
   * - 'label': For label text.
   */
  variant?: 'heading' | 'body' | 'label';

  /**
   * Specifies the size of the text.
   * - 'xlarge': Extra large text.
   * - 'large': Large text.
   * - 'medium': Medium text (default).
   * - 'small': Small text.
   * - 'xsmall': Extra small text.
   */
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

  /**
   * The content to be rendered inside the Typography component.
   */
  children: React.ReactNode | string | number;

  /**
   * The HTML tag or React component to render. Defaults to 'span'.
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Sets the text alignment. Defaults to 'left'.
   */
  textAlign?: CSSProperties['textAlign'];

  /**
   * Additional CSS class names to apply to the component.
   */
  className?: string;
}

/**
 * Typography component for rendering text with consistent styles.
 *
 * @param {TypographyProps} props - The properties of the Typography component.
 * @returns {React.ReactElement} The rendered React element.
 */
export const Typography: React.FC<Readonly<TypographyProps>> = ({
  variant = 'body',
  size = 'medium',
  textAlign = 'left',
  children,
  className,
  as: Component = 'span',
}: TypographyProps): React.ReactElement => (
  <Component
    className={classNames(className, styles[variant], styles[size])}
    style={{ textAlign }}
  >
    {children}
  </Component>
);
