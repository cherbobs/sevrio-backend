import Fastify from "fastify";
import { sequelize } from "./db/sequelize"; // <-- importer Sequelize

const app = Fastify();

app.get("/", async () => {
  return { message: "Sevrio backend is running" };
});

const start = async () => {
  try {
    // ✅ Test de connexion à la DB Supabase
    await sequelize.authenticate();
    console.log("✅ Connected to Supabase Postgres");

    await app.listen({ port: 3000 });
    console.log("🚀 Server running at http://localhost:3000");
  } catch (err) {
    console.error("❌ Error starting server:", err);
    process.exit(1);
  }
};

start();
