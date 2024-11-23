import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "clsx";
import { RiFileAddLine, RiImageAddLine } from "react-icons/ri";

import { Button } from "@/shared/components/Button";
import { FileUpload } from "@/shared/components/FileUpload";
import { TextArea } from "@/shared/components/TextArea";
import { TextInput } from "@/shared/components/TextInput";

import styles from "./ProjectForm.module.scss";
import { ProjectFormValues, ProjectFormSchema, ProjectFormProps } from "./ProjectForm.types";

export const ProjectForm: React.FC<ProjectFormProps> = ({ defaultValues, onSubmit }) => {
  const { register, setValue, handleSubmit, watch } = useForm<ProjectFormValues>({
    defaultValues,
    resolver: zodResolver(ProjectFormSchema),
    reValidateMode: "onBlur",
    mode: "all",
  });

  const photo = watch("photo"),
    banner = watch("banner"),
    whitepaper = watch("whitepaper"),
    litepaper = watch("litepaper"),
    tokenomics = watch("tokenomics");

  /**
   * Handles the form submission.
   *
   * @param {ProjectFormValues} data - The data from the form.
   */
  const onSubmitHandler: SubmitHandler<ProjectFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
      <fieldset className={styles.field}>
        <legend>Basic information</legend>
        <div className={styles.inner}>
          <TextInput label="Project Name" type="text" {...register("name")} placeholder="Project Name" />
          <TextArea label="Project Description" {...register("description")} placeholder="Project Description" />

          <div className={classNames(styles.grid, styles.two)}>
            <FileUpload
              icon={<RiImageAddLine />}
              title={"Project Photo"}
              description={"Drag and drop, or click to upload the main photo of your project"}
              maxFiles={1}
              accept="images"
              value={[photo]}
              onChange={(files) => setValue("photo", files[0])}
              onRender={(photos, getUrl) => (
                <div className={styles.imagePreview}>
                  <img src={getUrl(photos[0])} />
                </div>
              )}
            />
            <FileUpload
              icon={<RiImageAddLine />}
              title={"Cover Photo"}
              description={"Drag and drop, or click to upload the cover photo of your project"}
              maxFiles={1}
              accept="images"
              value={[banner]}
              onChange={(files) => setValue("banner", files[0])}
              onRender={(photos, getUrl) => (
                <div className={styles.imagePreview}>
                  <img src={getUrl(photos[0])} />
                </div>
              )}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.field}>
        <legend>Tokenomics</legend>
        <div className={styles.inner}>
          <div className={classNames(styles.grid, styles.three)}>
            <TextInput
              label="Amount to Raise"
              type="number"
              {...register("amountToRaise")}
              placeholder="Amount to Raise"
            />
            <TextInput label="Token Price" type="number" {...register("tokenPrice")} placeholder="Token Price" />
            <TextInput
              label="Tokens Created"
              type="number"
              {...register("tokensCreated")}
              placeholder="Tokens Created"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.field}>
        <legend>Social Networks</legend>
        <div className={styles.inner}>
          <div className={classNames(styles.grid, styles.two)}>
            <TextInput
              label="Discord URL"
              type="text"
              {...register("social.discordUrl")}
              placeholder="https://discord.com/invite..."
            />
            <TextInput
              label="Instagram URL"
              type="text"
              {...register("social.instagramUrl")}
              placeholder="https://www.instagram.com/..."
            />
            <TextInput
              label="Medium URL"
              type="text"
              {...register("social.mediumUrl")}
              placeholder="https://medium.com/@..."
            />
            <TextInput label="X URL" type="text" {...register("social.xUrl")} placeholder="https://x.com/..." />
            <TextInput
              label="Telegram URL"
              type="text"
              {...register("social.telegramUrl")}
              placeholder="https://t.me/..."
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.field}>
        <legend>Documentation</legend>
        <div className={styles.inner}>
          <div className={classNames(styles.grid, styles.three)}>
            <FileUpload
              icon={<RiFileAddLine />}
              title={"Whitepaper"}
              description={"Drag and drop, or click to upload the project whitepaper"}
              maxFiles={1}
              accept="documents"
              value={[whitepaper]}
              onChange={(files) => setValue("whitepaper", files[0])}
              onRender={(photos, getUrl) => (
                <div className={styles.imagePreview}>
                  <img src={getUrl(photos[0])} />
                </div>
              )}
            />
            <FileUpload
              icon={<RiFileAddLine />}
              title={"Tokenomics"}
              description={"Drag and drop, or click to upload the tokenomics document"}
              maxFiles={1}
              accept="documents"
              value={[tokenomics]}
              onChange={(files) => setValue("tokenomics", files[0])}
              onRender={(photos, getUrl) => (
                <div className={styles.imagePreview}>
                  <img src={getUrl(photos[0])} />
                </div>
              )}
            />
            <FileUpload
              icon={<RiFileAddLine />}
              title={"Litepaper"}
              description={"Drag and drop, or click to upload the project litepaper"}
              maxFiles={1}
              accept="documents"
              value={[litepaper]}
              onChange={(files) => setValue("litepaper", files[0])}
              onRender={(photos, getUrl) => (
                <div className={styles.imagePreview}>
                  <img src={getUrl(photos[0])} />
                </div>
              )}
            />
          </div>
        </div>
      </fieldset>

      <div className={styles.actions}>
        <div className={classNames(styles.grid, styles.two)}>
          <Button variant={"ghost"} caption={"Cancel"} />
          <Button caption={"Submit for Review"} />
        </div>
      </div>
    </form>
  );
};
