// @deno-types="npm:@types/express"
import { Request, Response, NextFunction } from 'npm:express';

export function checkUser(req: Request, res: Response, next: NextFunction): void {
    next()
}

export function setCaching(req: Request, res: Response, next: NextFunction): void {
    res.set('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=3600')
    next()
}
