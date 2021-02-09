import express, { Request, Response } from 'express';
import { PORT } from './constants';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('It works');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
