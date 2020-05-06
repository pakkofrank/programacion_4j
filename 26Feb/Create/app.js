//Constructor de mi objeto, es considerado como el prototipo
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return `${this.firstname} ${this.lastname}`
    }
}
// Nuevan forma de crear objetos
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
//Llamando a la funcion greet de mi objeto
console.log(john.greet());
console.log(jane.greet());
