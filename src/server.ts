//src/server.ts
import "./config/env.js";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { sequelize } from "./db/sequelize.js";
import { healthRoute } from "./routes/health.route.js";
import { authRoutes } from "./routes/auth.routes.js";
import { protectedRoutes } from "./routes/protected.route.js";


const app = Fastify();

await app.register(cors, {
  origin: "*", 
});

// Enregistre la route
app.register(protectedRoutes, { prefix: "/api/protected" });
app.register(healthRoute, { prefix: "/api" });
app.register(authRoutes, { prefix: "/api/auth" });

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Supabase Postgres");

    const port = Number(process.env.PORT) || 3000;

    await app.listen({ port, host: "0.0.0.0" });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();
