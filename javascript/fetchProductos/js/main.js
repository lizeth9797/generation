function getData(){
    let promesa= fetch("https://fakestoreapi.com/products", {method:"GET"});

    promesa.then((res)=>{
        res.json()//el json es una promesa, entonces agregamos then y catch
        .then((data)=>createCards(data))
        .catch((err)=>console.log("Error en el JSON")); 
    })
    .catch((err)=>console.log("Ocurrio un error en la solicitud",err));
}


function createCards(prods){
    console.log(prods);
    console.log(prods.length);
    console.log(typeof(prods));
}


/* 
let cuerpoCard=document.getElementById("cuerpoCard");
let imagen=document.getElementById("imagen");
let titulo=document.getElementById("titulo");
let texto=document.getElementById("texto");

function getData(){
    let promesa = fetch("https://fakestoreapi.com/products", {method: "GET"});
    promesa.then((response)=> {
        response.json().then((data)=> {createCards(data)})
        .catch((err)=>{console.log("ocurrio un error en el json", err)});
    })
    .catch((err)=>{console.log("ocurrio un error en la solicitud", err)});
}

function createCards(prods){
    imagen.setAttribute("src",prods[0].image); 
    texto.innerText=prods[0].description;
   prods.forEach((r)=>{ 
        
        cuerpoCard.insertAdjacentHTML("beforeend",
        `
        <img src="${prods[r].image}">
        `);
     });
    console.log(prods.length);
    console.log(prods);
    console.log(prods[0].image);
}

getData(); */