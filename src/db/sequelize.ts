import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: console.log,
  //   dialectOptions: {
  //     ssl: { require: true, rejectUnauthorized: false },
  //     family: 4,
  //     keepAlive: true,
  //   },
});
