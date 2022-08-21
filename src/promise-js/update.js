import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";



function putData(urlApi, data) {
    const response = fetch(urlApi,{
        method: 'PUT',
        mode: 'cors',
        crdentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });

  return response;
}
const data= {
    "title": "AYP",
    "price": 265,
   
  }

  putData("https://api.escuelajs.co/api/v1/products/235", data)
  .then(response => response.json())
  .then(data => console.log(data)) 



  // id 235