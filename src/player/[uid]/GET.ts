import { Request, Response } from 'express';

/**
 * @openapi
 * /player/{uid}:
 *  get:
 *      tags:
 *      - Player
 *      summary: Get a player by UID
 *      parameters:
 *        - name: uid
 *          in: path
 *          description: The UID of the player
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Return a player object
 *              content:
 *                  application/json:
 *                      schema:
 *          404:
 *              description: Player does not exist
 */
export default async function (req: Request, res: Response) {
    res.send({ timestamp: (new Date()).toISOString() })
}