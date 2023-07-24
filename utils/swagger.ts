// @deno-types="npm:@types/express"
import { Express, Request, Response } from "express";
import swaggerJsdoc from "npm:swagger-jsdoc";
import swaggerUi from "npm:swagger-ui-express";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

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
        res.header("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`Docs available at /docs`);
}

export default swaggerDocs;