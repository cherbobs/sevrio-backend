import fp from "fastify-plugin";
import { supabaseAdmin } from "../lib/supabase.js";

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}

export default fp(async (fastify) => {
  fastify.addHook("preHandler", async (req, _reply) => {
    const auth = req.headers.authorization;
    if (!auth?.startsWith("Bearer ")) return;
    const token = auth.substring("Bearer ".length);

    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (!error && data.user) {
      req.userId = data.user.id;
    }
  });
});
