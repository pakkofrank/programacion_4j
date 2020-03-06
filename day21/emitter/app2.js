var Emitter = require('./app');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('greeting ocurred:');
});

console.log('hello');
emtr.emit('greet');