//este demuetra hacerca del tema de la herencia

var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

//aqui se esta definiendo desde la variable de la funcion
var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'doe';

var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'doe';

console.log(john.greet());

console.log(jane.greet());