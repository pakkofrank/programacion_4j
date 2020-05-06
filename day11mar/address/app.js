const randomNum = require('random-num')

const request = require('request');

var n = (randomNum(1,70)) // Random Number from 1 to 10
var n2 = (randomNum(1,20)) // Random Number from 1 to 10

var uno = 89;
const url = 'https://swapi.co/api/people/' + n;
const url2 = 'http://direcciones.herokuapp.com/';

request({url, json: true}, (error, response)=>{
    console.log(response.body.name);
    
})
