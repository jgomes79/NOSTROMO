import React from "react";

import styles from "./TextInput.module.scss";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ label, ...props }, ref) => {
  return (
    <div className={styles.layout}>
      <label htmlFor={props.name}>{label}</label>
      <input className={styles.input} ref={ref} {...props} />
    </div>
  );
});
