import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";



function postData(urlApi, data) {
    const response = fetch(urlApi,{
        method: 'POST',
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
    "title": "2615",
    "price": 2615,
    "description": "A description",
    "categoryId": 4,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData("https://api.escuelajs.co/api/v1/products", data)
  .then(response => response.json())
  .then(data => console.log(data)) 