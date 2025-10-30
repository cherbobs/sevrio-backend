// src/lib/supabase.ts

import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE! // service key (gardée côté serveur uniquement)
);
