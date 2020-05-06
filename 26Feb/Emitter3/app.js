//LLamamos a dos modulos nativos de javascript
var EventEmitter = require('events');
var util = require('util');

function Greetr () {
    this.greeting = 'Hello world!';
}
// es un evento hererado de el modulo util
util.inherits(Greetr, EventEmitter);
// Se hixo un cambio y las funciones nos pide un dato extra
Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}
// Creamos un nuevo atributo
var greeter1 = new Greetr();
//Aqui metemos al emisor la funcion greet
greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
    
})
// aqui pasamos el dato 'Tony'
greeter1.greet('Tony');

