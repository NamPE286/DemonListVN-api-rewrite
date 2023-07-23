import { Request, Response } from 'npm:express';
import Player from '@classes/Player.ts';

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
export default function (req: Request, res: Response) {
    const { uid } = req.params
    const player = new Player(uid)

    player.init()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch((err) => {
            console.error(err)
            res.status(404).send()
        })
}