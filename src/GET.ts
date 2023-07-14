import { Request, Response } from 'express';

/**
 * @openapi
 * /:
 *  get:
 *      summary: Get server's timestamp.
 *      description: Get server's timestamp.
 *      responses:
 *          200:
 *              description: App is up and running
 *              content:
 *                  application/json:
 *                      schema:
 */
export default async function (req: Request, res: Response) {
    res.send({ timestamp: (new Date()).toISOString() })
}