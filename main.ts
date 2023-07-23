import app from './app.ts';
import swaggerDocs from '@utils/swagger.ts'
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

app.listen(
    5050,
    config().EXPRESS_IP,
    () => {
        console.log(`Server running on http://${config().EXPRESS_IP}:5050`)
        swaggerDocs(app, 5050)
    }
)