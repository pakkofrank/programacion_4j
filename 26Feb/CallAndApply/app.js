var obj = {
    name: 'John Doe',
    greet: function(param) {
        console.log(`Hello ${this.name} ${param}`);
        
    }
}
// esta variable se llevara comko parametro a las funciones
var name2 = 'Rasputin'
obj.greet(name2);
//Aqui llamamos a la funcion Call para sobreescribir lo del constructor, ademas le pasamos el parametro name2 para agregarcelo a la funcion
obj.greet.call({name: 'Jane Doe'}, name2);
//Aqui llamamos a la funcion Apply para sobreescribir lo del constructor, ademas le pasamos el parametro name2 para agregarcelo a la funcion
obj.greet.apply({name: 'Jane Doe'}, [name2]);