import { Request, Response } from 'express';
import Level from '@classes/Level';

export default async function (req: Request, res: Response) {
    const { id } = req.params
    const level = new Level(parseInt(id));
    res.send(JSON.stringify(await level.init()))
}