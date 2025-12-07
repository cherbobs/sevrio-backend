import { FastifyInstance } from "fastify";
import { verifyToken } from "../middlewares/auth.js";

export async function protectedRoutes(app: FastifyInstance) {
  app.get("/me", { preHandler: verifyToken }, async (req, reply) => {
    return { ok: true, user: req.user };
  });
}
