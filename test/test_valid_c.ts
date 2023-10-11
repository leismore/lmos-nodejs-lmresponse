import { assert } from 'chai';
import axios from 'axios';
import {res_valid_c as resData} from './constants.js';

// LMResponse class: Testing 'send' method

describe('LMResponse Class', function(){

    it('Should return "res_valid_c" (Constants)', function(){

        return axios.get('http://localhost:8080').then(res=>{

            if ( resData.headers               === undefined  ||
                 'Etag'     in resData.headers === false )
            {
                throw new Error('missing HTTP headers');
            }

            assert( ( String(res.status)              === resData.statusCode  &&
                      res.statusText                  === 'No Content'        &&
                      res.headers['etag'] === resData.headers['Etag'] ),

                    ( 'Incorrect HTTP Response: \n\n' +
                      res.status + ' ' + res.statusText + '\n\n' +
                      'Etag: ' + res.headers['etag'] + '\n\n' ) );
                      
        }).catch(e=>{
            assert(false, String(e));
        });

    });

});
