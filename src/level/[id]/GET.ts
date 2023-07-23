import { Request, Response } from 'express';
import Level from '@classes/Level';

/**
 * @openapi
 * /level/{id}:
 *  get:
 *      tags:
 *      - Level
 *      summary: Get a level by ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: The ID of the level
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Return a level object
 *              content:
 *                  application/json:
 *                      schema:
 *          404:
 *              description: Level does not exist
 */
export default async function (req: Request, res: Response) {
    const { id } = req.params
    const level = new Level(parseInt(id));
    level.init()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(() => {
            res.status(404).send()
        })
}