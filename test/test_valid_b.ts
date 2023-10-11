import { assert } from 'chai';
import axios from 'axios';
import {res_valid_b as resData} from './constants.js';

// LMResponse class: Testing 'send' method

describe('LMResponse Class', function(){

    it('Should return "res_valid_b" (Constants)', function(){

        return axios.get('http://localhost:8080').then(res=>{
            assert( ( String(res.status)              === resData.statusCode  &&
                      res.statusText                  === 'No Content' ),
                    ( 'Incorrect HTTP Response: \n\n' +
                      res.status + ' ' + res.statusText + '\n\n' ) );
        }).catch(e=>{
            assert(false, String(e));
        });

    });

});
