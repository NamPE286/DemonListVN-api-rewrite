import app from './app.ts';
import swaggerDocs from '@utils/swagger.ts'
import { EXPRESS_IP } from './env.ts';

app.listen(
    5050,
    EXPRESS_IP,
    () => {
        console.log(`Server running on http://${EXPRESS_IP}:5050`)
        swaggerDocs(app, 5050)
    }
)