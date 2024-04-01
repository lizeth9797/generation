let container=document.getElementById("container");
let button=document.getElementById("button");

//API call
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
    prods.forEach(p => {
        //console.log(p);
        container.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" style="object-fit:contain; width:100%; height:250px;" src=${p.image} alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <h5 class="card-title">${p.category}</h5>
          <h4 class="card-title text-end text-danger">$${p.price} USD</h4>
          <p class="card-text">${p.description.slice(0,100)}</p>          
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${p.id}">Details</button>
        </div>
        <div class="card-footer text-end">
          <small class="text-body-secondary">${p.rating.rate}★</small>
        </div>
      </div>

        <!--MODAL-->
        <div class="modal fade" id="exampleModal_${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${p.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${p.description}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
      

        `);

    });


}

getData();


/* 
let cuerpoCard=document.getElementById("cuerpoCard");
let imagen=document.getElementById("imagen");
let titulo=document.getElementById("titulo");
let texto=document.getElementById("texto");

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