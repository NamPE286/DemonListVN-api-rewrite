declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SUPABASE_API_URL: string;
            SUPABASE_API_KEY: string;

        }
    }
}

export { }