var util = require('util');

function Person (){
    this.firstname = 'john';
    this.lastname = 'doe';

}

Person.prototype.greet = function(){
    console.log('hello '+this.firstname+' '+this.lastname);
}

function Polisman(){
    Person.call(this);
    this.badgenumber = '12345';
}

Polisman.prototype.showcode = function(){
    console.log(`your code is ${this.badgenumber}`)
}

util.inherits(Polisman, Person);
var officer = new Polisman();
officer.greet();
officer.showcode();

