/*array de funciones
 */

 var arr = [];

 arr.push(function(){
     console.log('hello world 1')
 });
 arr.push(function(){
    console.log('hello world 2')
});
arr.push(function(){
    console.log('hello world 3')
});

arr.forEach(function(item){
    item();

});
//aqui se manda a llamar a las funciones del array y de resulto te da las 3 notas de hello world