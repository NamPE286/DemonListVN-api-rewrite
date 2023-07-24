// @deno-types="npm:@types/express"
import { Request, Response } from 'express';
import Player from '@classes/Player.ts';

/**
 * @openapi
 * /player/{uid}/records:
 *  get:
 *      tags:
 *      - Player
 *      summary: Get level's records by UID
 *      parameters:
 *        - name: uid
 *          in: path
 *          description: The UID of the player
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Return an array of record objects
 *              content:
 *                  application/json:
 *                      schema:
 *          404:
 *              description: Player does not exist
 */
export default function (req: Request, res: Response) {
    const { uid } = req.params
    const player = new Player(uid);
    
    player.fetchRecords(true)
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch((err) => {
            console.error(err)
            res.status(404).send()
        })
}