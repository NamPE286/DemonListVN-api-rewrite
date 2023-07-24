import app from './app.ts';
// import swaggerDocs from '@utils/swagger.ts'

app.listen(
    5050,
    () => {
        console.log(`Server running on http://localhost:5050`)
        // swaggerDocs(app, 5050)
    }
)