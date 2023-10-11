import { assert } from 'chai';
import axios from 'axios';
import { LMResponseData as ResData } from '../src/index.js';

const resData:ResData = {
    statusCode: '200',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        message: 'invalid_http_header',
        code: '2'
    }
};

// LMResponse class: Testing 'send' method

describe('LMResponse Class', function(){

    it('Should return "HTTP: 200 OK | application/json | 2 invalid_http_header"', function(){

        return axios.get('http://localhost:8080').then(res=>{

            if ( resData.headers                       === undefined  ||
                 'Content-Type'     in resData.headers === false )
            {
                throw new Error('missing HTTP headers');
            }

            assert( ( String(res.status)              === resData.statusCode                        &&
                      res.statusText                  === 'OK'                                      &&
                      String(res.headers['content-type']).includes(resData.headers['Content-Type']) &&
                      res.data.message                === resData.body.message                      &&
                      res.data.code                   === resData.body.code ),

                    ( 'Incorrect HTTP Response: \n\n' +
                      res.status + ' ' + res.statusText + '\n\n' +
                      'Content-Type: ' + res.headers['content-type'] + '\n\n' +
                      'message: ' + res.data.message + '\n' +
                      'code: ' + res.data.code + '\n\n' ) );
                      
        }).catch(e=>{
            assert(false, String(e));
        });

    });

});
