import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
    res.send({ timestamp: (new Date()).toISOString() })
}