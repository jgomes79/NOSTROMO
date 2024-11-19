interface ImportMetaEnv {
  VITE_APP_ENV: "prod" | "sta" | "dev";
  VITE_APP_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
