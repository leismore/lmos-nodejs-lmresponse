import { assert } from 'chai';
import axios from 'axios';
import {res_valid_a as resData} from './constants.js';

// LMResponse class: Testing 'send' method

describe('LMResponse Class', function(){

    it('Should return "res_valid_a" (Constants)', function(){

        return axios.get('http://localhost:8080').then(res=>{

            if ( resData.headers                       === undefined  ||
                 'Content-Type'     in resData.headers === false      ||
                 'Content-Language' in resData.headers === false )
            {
                throw new Error('missing HTTP headers');
            }

            assert( ( String(res.status)              === resData.statusCode                        &&
                      res.statusText                  === 'OK'                                      &&
                      String(res.headers['content-type']).includes(resData.headers['Content-Type']) &&
                      res.headers['content-language'] === resData.headers['Content-Language']       &&
                      res.data.title                  === resData.body.title                        &&
                      res.data.description            === resData.body.description ),

                    ( 'Incorrect HTTP Response: \n\n' +
                      res.status + ' ' + res.statusText + '\n\n' +
                      'Content-Type: ' + res.headers['content-type'] + '\n' +
                      'Content-Language: ' + res.headers['content-language'] + '\n\n' +
                      'title: ' + res.data.title + '\n' +
                      'description: ' + res.data.description + '\n\n' ) );
        }).catch(e=>{
            assert(false, String(e));
        });

    });

});
