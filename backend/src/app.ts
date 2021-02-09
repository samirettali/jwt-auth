import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { PORT } from './constants';
import fs from 'fs';

type User = {
  username: string;
  password: string;
}

const app = express();
const users: User[] = JSON.parse(fs.readFileSync('./users.json', 'utf8'))

app.use(bodyParser());

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).json({"error": "Missing username"});
    return;
  }

  if (!password) {
    res.status(400).json({"error": "Missing username"});
    return;
  }

  const user = users.find(user => (
    user.username === username && user.password === password
  ));

  if (user) {
    const token = 'todo';
    res.status(200).json({ token });
  } else {
    res.status(401).json({ "error": "Invalid username or password" });
  }

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
