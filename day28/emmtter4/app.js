'use strict';
var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'hello world';
    }
    greet(data){
        console.log(`${ this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}
var greeter1 = new Greetr(); //es un emisor de evento

greeter1.on('greet', function(data){ //el metodo on le dice que greet hace algo
    console.log('someone greeted: ' + data);
});
let data = 'corona';
var greeter1 = new Greetr();
greeter1.greet(data);
//se le agregar el valor de data y donde se invoca se agrego el 'tony'
//greeter1.greet('tony'); se invoca greet, lo toma desde el constructor

//puedo tener varias respuestas para el mismo evento 

//call invoca argumentos, .apply invoca vectores