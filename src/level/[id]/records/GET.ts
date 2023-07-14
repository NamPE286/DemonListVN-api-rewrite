import { Request, Response } from 'express';
import Level from '@classes/Level';

/**
 * @openapi
 * /level/{id}/records:
 *  get:
 *      tags:
 *      - Level
 *      summary: Get a level's records by ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: The ID of the level
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Return an array of records
 *              content:
 *                  application/json:
 *                      schema:
 *          404:
 *              description: Invalid ID or level does not exist
 */
export default async function (req: Request, res: Response) {
    const { id } = req.params
    const level = new Level(parseInt(id));
    level.fetchRecords()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(() => {
            res.status(404).send()
        })
}