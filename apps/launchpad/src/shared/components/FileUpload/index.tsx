import React, { useCallback } from "react";
import { Accept, DropzoneOptions, useDropzone } from "react-dropzone";

import classNames from "clsx";

import { Typography } from "@/shared/components/Typography";

import styles from "./FileUpload.module.scss";

export type Value = string | File;

interface FileUploadProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  maxFiles: number;

  value: Value[];
  accept: "images" | "documents";
  onChange: (files: Value[]) => void;
  onRender: (files: Value[], getUrl: (file: Value) => string) => React.ReactNode;
}

/**
 * A map of accepted formats for file uploads.
 *
 * @type {Record<Required<FileUploadProps>["accept"], Accept>}
 * - images: Accepts PNG, JPEG, and GIF formats.
 * - documents: Accepts PDF format.
 */
const acceptedFormats: Record<Required<FileUploadProps>["accept"], Accept> = {
  images: {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "image/gif": [".gif"],
  },
  documents: {
    "application/pdf": [".pdf"],
  },
};

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({ icon, title, description, accept, maxFiles, value, onRender, onChange }, ref) => {
    /**
     * Handles the file drop event and triggers the onChange callback.
     *
     * @param {File[]} acceptedFiles - The files dropped by the user.
     */
    const onDrop = useCallback<NonNullable<DropzoneOptions["onDrop"]>>((acceptedFiles) => onChange(acceptedFiles), []);

    /**
     * Initializes the useDropzone hook with specified options.
     *
     * @see {@link https://react-dropzone.js.org/ React Dropzone Documentation}
     *
     * @param {DropzoneOptions} options - The dropzone options.
     * @param {Accept} options.accept - The accepted file formats.
     * @param {number} options.maxFiles - The maximum number of files.
     * @param {NonNullable<DropzoneOptions["onDrop"]>} options.onDrop - The function to handle file drops.
     *
     * @return {object} The props and state from useDropzone.
     */
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: acceptedFormats[accept],
      maxFiles,
      onDrop,
    });

    /**
     * Generates a URL for the provided file.
     *
     * @param {Value} file - The file or string URL to generate a URL for.
     * @returns {string} - The generated URL for the file.
     */
    const getURL = (file: Value): string => {
      if (file instanceof File) {
        return URL.createObjectURL(file).toString();
      }
      return file;
    };

    /**
     * Checks if there are any defined values in the array.
     *
     * @type {boolean}
     */
    const hasValue = value.some((e) => typeof e !== "undefined");

    return (
      <div
        ref={ref}
        {...getRootProps()}
        className={classNames([styles.layout, { [styles.isDragActive]: isDragActive, [styles.hasValue]: hasValue }])}
      >
        {hasValue ? (
          onRender(value, getURL)
        ) : (
          <>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.container}>
              <Typography variant={"heading"} size={"medium"} textAlign={"center"}>
                {title}
              </Typography>
              <Typography variant={"body"} size={"medium"} textAlign={"center"}>
                {description}
              </Typography>
            </div>
          </>
        )}
        <input {...getInputProps()} />
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";
