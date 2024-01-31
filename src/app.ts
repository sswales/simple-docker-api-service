import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/endpoint-one', async (req: Request, res: Response) => {
  const user = req.body.userId;

  //   const result = await func();
  const result = { type: 'one' };
  res.send(result);
});

app.post('/endpoint-two', async (req: Request, res: Response) => {
  const user = req.body.userId;

  //   const result = await func();
  const result = {
    type: 'two',
  };
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
