import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';

dotenv.config()

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API Docs",
            version: '1.0.0',
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`Docs available at http://${process.env.EXPRESS_IP}:${port}/docs`);
}

export default swaggerDocs;