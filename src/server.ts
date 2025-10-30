import Fastify from "fastify";
import { sequelize } from "./db/sequelize.js";

const app = Fastify();

app.get("/", async () => {
  return { message: "Sevrio backend is running" };
});

const start = async () => {
  try {
    // ✅ Test de connexion à la DB Supabase
    await sequelize.authenticate();
    console.log("✅ Connected to Supabase Postgres");

    const port = Number(process.env.PORT) || 3000;

    await app.listen({ port, host: "0.0.0.0" });
    console.log(`🚀 Server running on port ${port}`);
  } catch (err) {
    console.error("❌ Error starting server:", err);
    process.exit(1);
  }
};

start();
