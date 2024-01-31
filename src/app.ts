import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { validateEndpointOneRequestBody, validateEndpointTwoRequestBody } from './schemas/creators';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use(express.json());

app.post('/endpoint-one', async (req: Request, res: Response) => {
  const { error } = validateEndpointOneRequestBody(req.body);

  if (error) {
    console.warn(error);
    return res.status(400).send(error.details[0].message);
  }

  const result = {
    type: 'one',
  };

  res.send(result);
});

app.post('/endpoint-two', async (req: Request, res: Response) => {
  const { error } = validateEndpointTwoRequestBody(req.body);

  if (error) {
    console.warn(error);
    return res.status(400).send(error.details[0].message);
  }

  const result = {
    type: 'two',
  };

  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
