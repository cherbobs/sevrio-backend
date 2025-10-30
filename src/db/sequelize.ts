import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST?.replace("db.", "db."), // (on garde l'host)
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
    family: 4, // <-- forcer IPv4
  },
});
