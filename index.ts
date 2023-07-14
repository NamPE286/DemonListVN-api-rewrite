import app from './app';
import swaggerDocs from 'utils/swagger'
import dotenv from 'dotenv';

dotenv.config()

app.listen(
    5050,
    process.env.EXPRESS_IP,
    () => {
        console.log(`Server running on http://${process.env.EXPRESS_IP}:5050`)
        swaggerDocs(app, 5050)
    }
)