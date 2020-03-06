//var util = require('util');
class Person {
    constructor() {
        this.firstname = 'john';
        this.lastname = 'doe';
    }
    greet() {
        console.log('hello ' + this.firstname + ' ' + this.lastname);
    }
}
class Polisman extends Person {
    constructor() {
        super();
        this.badgenumber = '12345';
    }
    showcode() {
        console.log(`your code is ${this.badgenumber}`)
    }
}
//aui se hace cambio de las funtiones y se comvierten 

//util.inherits(Polisman, Person);
var officer = new Polisman();
officer.greet();
officer.showcode();