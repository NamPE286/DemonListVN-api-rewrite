// deno-lint-ignore-file
import { load } from "https://deno.land/std@0.195.0/dotenv/mod.ts";

async function getEnv(key: string) {
    return String(Deno.env.get(key) ? Deno.env.get(key) : (await load())[key])
}

export const SUPABASE_API_KEY: string = await getEnv("SUPABASE_API_KEY")
export const SUPABASE_API_URL: string = await getEnv("SUPABASE_API_URL")
