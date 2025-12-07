import { FastifyReply, FastifyRequest } from "fastify";
import { supabaseAdmin } from "../lib/supabase.js";

export class AuthController {
  static async login(req: FastifyRequest, reply: FastifyReply) {
    const { email, password } = req.body as { email: string; password: string };

    if (!email || !password) {
      return reply.status(400).send({ error: "Email et mot de passe requis." });
    }

    // Appel Supabase
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.send({
      user: data.user,
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
    });
  }
}
