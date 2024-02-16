let encabezado=document.getElementById("encabezado");
let lista=document.getElementsByTagName("ul").item(0); //trae el primer elemento ul que encuentres
let listaAgrupada=document.getElementsByClassName("list-group-item");
let btnCambiar=document.getElementById("btnCambiar");

let elemento=document.querySelector("ul>a");
let elementos=document.querySelectorAll("ul>a");
let elementos2=document.querySelectorAll("ul>a:last-child");

console.log(elemento);
console.log("===================================")
console.log("h1: ",encabezado.innerHTML);
encabezado.innerHTML="DOM-<strong>JS</strong>"; //modificar el contenido de h1
console.log(lista.innerHTML); //todo lo que está dentro del ul
console.log("===================================")

//Recorriendo los elementos de la lista agrupada (que tiene todos los elementos con el nombre de clase 'list-group-item' )
for (let index = 0; index < listaAgrupada.length; index++) {
    //console.log(listaAgrupada.item(index));
}
console.log("===================================")


//Si quisieramos recorrer los elementos con un forEach debemos primero convertir la lista agrupada en un ARRAY porque de acuerdo a la documentación, cuando hacemos getElementsByClassName, nos trae algo asi como un Array (array-like) pero NO es un array
/*Array.from(listaAgrupada).forEach(function(element,index){
});   */

btnCambiar.addEventListener("click",function(event){
    event.preventDefault(); //evita la funcionalidad por default del botón (por ej si en el HTML dijimos que el botón es de tipo submit, evitamos que haga eso)
    let item=document.createElement("a"); 
    item.classList.add("list-group-item", "list-group-item-action", "list-group-item-success"); //agrega el elemento con estas clases
    item.setAttribute("href","#"); //para que nos ponga la manita con el cursos sobre el elemento "a"
    item.innerText="a simple new element group";
    console.log(item);
    //cualquiera de las siguientes opciones para insertar dentri o fuera están bien:
    //lista.append(item); //del elemento ul que seleccionamos en la lista, dentro vas a agregar el item que creamos y se colocará hasta el final
    //lista.prepend(item); //agrega el item al inicio del elememento (sera el primer hijo)
    //lista.before(item); //lo pondrá antes del elemento ul, no dentro
    //lista.after(item); //lo pondrá después del elemento ul, es decir, cuando acaba
    //lista.insertAdjacentElement("beforebegin",item); //(posicion, elemento)
    //lista.insertAdjacentElement("afterbegin",item);
    lista.insertAdjacentElement("beforeend",item);
    //lista.insertAdjacentElement("afterend",item);

    //Insertando HTML
    /*let message="New HTML Element"; //una ventaja es que aqui escribimos el html y le decimos qué atributos queremos, por ejemplo 'href=#' VS al elemento que tenemos que usar 'setAttribute'
    lista.insertAdjacentHTML("beforeend", `
    <a href="#" class="list-group-item list-group-item-action list-group-item-success">${message}</a>
    `)
    */

})

