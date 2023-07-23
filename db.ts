import { createClient } from "npm:@supabase/supabase-js";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

export const supabase = createClient(config().SUPABASE_API_URL, config().SUPABASE_API_KEY)