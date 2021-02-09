import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { TOKEN_SECRET } from './constants';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];

  const token = header && header.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const payload = jwt.verify(token, TOKEN_SECRET);
    const { username } = payload as any;
    req.username = username;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
}
