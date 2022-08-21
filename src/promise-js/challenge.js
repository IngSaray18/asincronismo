import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
// .then(response=>response.json())
// .then(products =>{
//     console.log(products);
// })
// .catch(error => console.log(error));}

fetchData(`${API}/products`)
.then((response) => response.json())
.then(products=>{
    console.log(products);
    return fetchData(`${API}/products/${products[25].id}`)
})
.then(response=> response.json())
.then(product=>{
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response=> response.json())
.then(category=>{
    console.log(category.name);
})
.catch(err => console.log(err));

/*

💾 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟭: 𝗙𝗲𝘁𝗰𝗵𝟭𝟭/𝟮𝟭 💾
.
Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.
.
🛠️ Para poder usar fetch, primero tenemos que instalarlo:
.

Ir a la terminal e instalar fetch con: npm i node-fetch
Para poder compilar desde VSC, debemos registrar el modulo en package.json, abrimos el archivo y al final se agrega:

Importante agregar una coma (,) a la llave que cierra a “dependencies”.
En la ruta src/promise crear el archivo challenge.js
En el archivo challenge.js inicialmente se debe importar lo que acabamos de instalar, agregando el código: import fetch from 'node-fetch';
Dado que la API es una constante, nunca va a cambiar, por convección se coloca en letras mayúsculas: const API = 'https://api.escuelajs.co/api/v1';
Ahora se crea la lógica con fetch, then y catch:
*/