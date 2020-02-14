// function statement
function greet(){
    console.log('h1')
}

greet();

//igual
/*let greet = () =>{
    console.log(`H1`);
}
greet();*/


/*var a = 1;
var b = 2;

console.log("hola soy la variable a"+a+" y b"+b);
console.log(`hola soy variable a ${a} y variable b ${b}`);*/



/*function logGreeting(fn){
    fn();
}
logGreeting(greet);*/


/*let logGreeting = (fn) =>{
    fn();
}*/


let logGreeting=(()=>{console.log(`H1`);});
logGreeting(greet);