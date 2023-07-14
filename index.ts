import app from './app';
import swaggerDocs from 'utils/swagger'

app.listen(
    5050,
    () => {
        console.log(`Server running on http://localhost:5050`)
        swaggerDocs(app, 5050)
    }
)