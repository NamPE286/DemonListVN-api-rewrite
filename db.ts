import { createClient } from "npm:@supabase/supabase-js";
import { load } from "https://deno.land/std@0.195.0/dotenv/mod.ts";

export const supabase = createClient((await load()).SUPABASE_API_URL, (await load()).SUPABASE_API_KEY)