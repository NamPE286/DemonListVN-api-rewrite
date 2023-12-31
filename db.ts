import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_URL, SUPABASE_API_KEY } from "./env.ts";

export const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY, {
    auth: {
        persistSession: false
    }
})