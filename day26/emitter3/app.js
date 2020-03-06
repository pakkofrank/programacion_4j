var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'hello world!!!'
}
//aqui se diapara

util.inherits(Greetr, EventEmitter);//util es de la libreria de nodejs

Greetr.prototype.greet = function(data){
    console.log(this.greeting+': '+data);
    this.emit('greet', data);
//emit es una pequeña funcion
}

var greeter1 = new Greetr(); //es un emisor de evento

greeter1.on('greet', function(data){ //el metodo on le dice que greet hace algo
    console.log('someone greeted: ' + data);
});
//se le agregar el valor de data y donde se invoca se agrego el 'tony'
greeter1.greet('tony');//se invoca greet, lo toma desde el constructor

//puedo tener varias respuestas para el mismo evento 

//call invoca argumentos, .apply invoca vectores