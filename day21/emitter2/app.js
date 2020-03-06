var Emitter = require('events');
//AQUI SE CAMBIO LA VARIABLE DONDE SE MANDA A LLAMAR 
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere, someone said hello');
});

var emtr = new Emitter();
emtr.on('greet', function(){
    console.log('greeting ocurred:');
});

console.log('hello');
emtr.emit(eventConfig.GREET);