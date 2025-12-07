import jwt from "jsonwebtoken";
import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const auth = request.headers.authorization;

    if (!auth) {
      return reply.status(401).send({ error: "No token provided" });
    }

    const token = auth.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET!);

    request.user = decoded; // tu peux stocker l'utilisateur ici
  } catch (error) {
    return reply.status(401).send({ error: "Invalid token" });
  }
}
