import { Sequelize } from "sequelize-typescript";

import { Currency } from "@/currency/currency.entity";
import { Project } from "@/project/project.entity";
import { User } from "@/user/user.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      });
      sequelize.addModels([Project, User, Currency]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
