// src/config/env.ts
import "dotenv/config";

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error(
    "Les variables SUPABASE_URL et SUPABASE_ANON_KEY doivent être définies dans .env"
  );
}
