declare module "csurf";
declare module "jsonwebtoken";

declare namespace NodeJS {
  interface ProcessEnv {
    ENV: "dev" | "test" | "prod";
    PORT: string;

    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_PORT: number;
  }
}

declare namespace Express {
  namespace Multer {
    interface File {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      destination: string;
      filename: string;
      path: string;
      buffer: Buffer;
    }
  }
}
