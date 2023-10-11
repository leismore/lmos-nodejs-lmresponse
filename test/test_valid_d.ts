import { assert } from 'chai';
import axios from 'axios';
import {res_valid_d as resData} from './constants.js';

// LMResponse class: Testing 'send' method

describe('LMResponse Class', function(){

    it('Should return "res_valid_d" (Constants)', function(){

        return axios.get('http://localhost:8080').then(res=>{

            assert( ( String(res.status)  === resData.statusCode  &&
                      res.statusText      === 'OK'                &&
                      res.data            === resData.body ),

                    ( 'Incorrect HTTP Response: \n\n' +
                      res.status + ' ' + res.statusText + '\n\n' +
                      res.data + '\n\n' ) );
                      
        }).catch(e=>{
            assert(false, String(e));
        });

    });

});
