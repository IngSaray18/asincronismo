const promise = new promise (function(resolve, reject){
    resolve("hey");
})

const cows = 4;

const countCows= new Promise(function(resolve,reject){
    if (cows>10){
        resolve("we have "+cows);
    }else{
        reject("there are no enought cows");
    }
})
countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally (()=>{console.log("fin")});

/*
.
🪃 Un callback devuelve una función en los parámetros, cuando llamamos varias veces un callback, estaremos colocando 
muchas lineas de código y sería engorroso, por eso nacen las promesas, éstas optimizan y permiten 
leer mejor el código con pocas lineas.
.
🫱🏼‍🫲🏾 Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente 
y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar 
a entrar en ejecución al mismo tiempo.
.
Las promesas pueden suceder:
.

Ahora
En el futuro
Nunca
.
🛠️ Para crear una promesa:
.
Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. 
Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject.

El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
El parámetro reject, se usa en el que caso de que no funcione. 
*/