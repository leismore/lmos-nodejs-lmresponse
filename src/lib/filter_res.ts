/**
 * 
 * filter_res function - Test and normalize a HTTP response (type Res)
 * @param  {Res}           res
 * @return {Res}
 * @throw  {ResError}      1 / 2 / 3
 * 
 */

import {Res}           from './type/Res.js';
import {ptnStatusCode} from './patterns.js';
import {ResError}      from './ResError.js';

function filter_res(res:Res):Res
{
  if (ptnStatusCode.test(res.statusCode) === false)
  {
    throw new ResError('invalid_http_statusCode', '1');
  }

  if (res.headers !== undefined && typeof res.headers !== 'object')
  {
    throw new ResError('invalid_http_header', '2');
  }
  else if (res.headers === undefined || Object.keys(res.headers).length === 0)
  {
    res.headers = undefined;
  }
  else
  {
    for (let k in res.headers)
    {
      if (k.length === 0 || res.headers[k].length === 0)
      {
        throw new ResError('invalid_http_header', '2');
      }
    }
  }

  return res;
}

export {filter_res};
