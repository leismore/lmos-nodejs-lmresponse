# lmos-nodejs-lmresponse

A general HTTP Response class for [LMOS for Node.js](https://nodejs.lmos.leismore.org) project

## Features

* Sending HTTP responses
* Sending [LMError](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror) and other Errors as HTTP responses

## Environment

* [Node.js](https://nodejs.org)          20
* [Express.js](https://expressjs.com)    4

## Installation

`npm install @leismore/lmos-nodejs-lmresponse`

## Test

`npm test`

## Build

`npm run build`

## Example

```typescript
import { LMResponse, LMResponseData } from '@leismore/lmos-nodejs-lmresponse';

// In Express.js routing handler
function(req, res, next)
{
  const resp = new LMResponse(res);

  let data:LMResponseData = {
    statusCode:    '200',
    headers:     { 'Content-Type': 'application/json' },
    body:        { 'result': 'OK' }
  };

  resp.send(data);
}

// In Express.js error handler
function(error, req, res, next)
{
  const resp = new LMResponse(res);
  resp.sendERROR(error);
}
```

## LMResponse Class

### Data Types

```typescript
type LMResponseData = {                                 // HTTP response
  readonly statusCode:  string,                         // HTTP response status code
           headers?:   {readonly [key:string]: string}, // HTTP headers
           body?:       any                             // HTTP body
};
```

### LMResponseError

```typescript
/**
 * LMResponseError
 *   1  invalid_http_statusCode
 *   2  invalid_http_header
 *   3  invalid_http_body
 */

class LMResponseError extends LMError
{
  public constructor(message:string, code:string, previous?:Error)
}
```

Refer to [LMError](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror)

### LMResponse Class

#### Properties

```typescript
import {Response as ResExpress} from 'express';

protected readonly res:ResExpress;
```

#### Methods

```typescript
import {Response as ResExpress} from 'express';


public constructor(res:ResExpress)


/**
 * Send HTTP response
 * @param   {LMResponseData}   response   - HTTP response data
 * @throws  {LMResponseError}             - 1/2/3
 */
public send(response:LMResponseData):void


/**
 * Server-side error -> Stop this whole application
 * 
 * Exit Code: 1
 */
public sendERROR(error:Error):void
```

Refer to [LMError](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror)

## Donation

[![Donate with PayPal button](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif "PayPal - The safer, easier way to pay online!")](https://www.paypal.com/donate/?hosted_button_id=7JP6Y2PKH3G8L)

## License

© [Leismore](https://www.leismore.co) 2024

GNU AFFERO GENERAL PUBLIC LICENSE v3

## Authors

* [Kyle Chine](https://kyle-chine.leismore.co) since 04 Sep 2019

## Credits

* [@leismore/response](https://www.npmjs.com/package/@leismore/response) (Obsoleted)




---

[![Leismore Logo](https://logos.leismore.co/en/3-0-0/light/textual-margins.svg)](https://lmos.leismore.org)

Product of [Leismore OpenSource](https://lmos.leismore.org)

[Leismore](https://www.leismore.co) (Australian Business Number: 25 935 862 619) is *your affordable and reliable business software provider* since 2021
