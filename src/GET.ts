// @deno-types="npm:@types/express"
import { Request, Response } from 'npm:express';

/**
 * @openapi
 * /:
 *  get:
 *      summary: Get server's timestamp
 *      responses:
 *          200:
 *              description: App is up and running
 *              content:
 *                  application/json:
 *                      schema:
 */
export default function (req: Request, res: Response) {
    res.send({ timestamp: (new Date()).toISOString() })
}