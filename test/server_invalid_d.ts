import express from 'express';
import { LMResponse, LMResponseData } from '../src/index.js';
import { res_invalid_d as data } from './constants.js';

const app  = express();
const port = 8080;

app.get('/', (req:express.Request, res:express.Response) => {
  const resp = new LMResponse(res);
  try
  {
    resp.send(data);
  }
  catch(e)
  {
    let data:LMResponseData = {
        statusCode: '200',
        headers: {
            'Content-Type': 'application/json'
        },
        // @ts-ignore: e = LMResponseError
        body: e.error
    };
    resp.send(data);
  }
});

app.listen(port, () => {
  console.log(`@leismore/lmos-nodejs-lmresponse: The testing server is listening on http://localhost:${port}`);
});
