import express from 'express';
import { LMResponse } from '../src/index.js';
import { res_valid_b as data } from './constants.js';

const app  = express();
const port = 8080;

app.get('/', (req:express.Request, res:express.Response) => {
  const resp = new LMResponse(res);
  resp.send(data);
});

app.listen(port, () => {
  console.log(`@leismore/lmos-nodejs-lmresponse: The testing server is listening on http://localhost:${port}`);
});
