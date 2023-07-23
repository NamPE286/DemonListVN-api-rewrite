import { Request, Response } from 'express';
import Player from '@classes/Player';

/**
 * @openapi
 * /player/{id}/records:
 *  get:
 *      tags:
 *      - Player
 *      summary: Get a level's records by UID
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
export default async function (req: Request, res: Response) {
    const { uid } = req.params
    const player = new Player(uid);
    
    player.fetchRecords()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch((err) => {
            console.error(err)
            res.status(404).send()
        })
}