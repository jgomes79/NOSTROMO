import React from "react";

import styles from "./TextArea.module.scss";

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, ...props }, ref) => {
  return (
    <div className={styles.layout}>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        ref={ref}
        className={styles.input}
        style={{ height: "auto", overflowY: "hidden" }}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
        {...props}
      />
    </div>
  );
});
