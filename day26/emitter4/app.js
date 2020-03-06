var obj = {
    name: 'john doe',
    greet:function(param, param2){
        console.log(`hello ${ this.name} ${param} ${param2}`);
        //aqui recibimo el parametro
    }
}

//la funcion recibe el paremetro y lo coloc en el console

var name2 = 'jos';
var name3 = 'lol';
obj.greet(name2, name3);
//forma de llamarlo con call 

//en call solo le ponemos una coma y luego el parametro para que jale
obj.greet.call({name: 'jane doe'}, name2,name3);//lista de argumentos
//en apply lo llamamos como un vector 
obj.greet.apply({name: 'jane doe'}, [name2, name3]);//en vector