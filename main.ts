import app from './app.ts';
import swaggerDocs from '@utils/swagger.ts'
import { load } from "https://deno.land/std@0.195.0/dotenv/mod.ts";

const ip = (await load()).EXPRESS_IP

app.listen(
    5050,
    ip,
    () => {
        console.log(`Server running on http://${ip}:5050`)
        swaggerDocs(app, 5050)
    }
)