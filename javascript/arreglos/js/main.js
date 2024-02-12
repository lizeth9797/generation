let button=document.getElementById("button");
let calificacion=document.getElementById("calificacion");
let alertResultado=document.getElementById("alertResultado");
const marcas=['HP','Dell','Lenovo','Acer'];

button.addEventListener("click",function(event){
    console.log("======== FOR ========");
    for (let cont = 0; cont <100; cont+=5) {
        console.log(cont);
    }//for

    console.log("======== WHILE ========");
    let cont=0;
    while(cont<100){
        console.log(cont);
        cont+=5;
    }//while

    //console.log("contador:",cont);
    //cont=0;
    //console.log("contador:",cont);

    console.log("======== DO WHILE ========");
    cont=0;
    do {
        console.log(cont);
        cont+=5;
    } while (cont<100);

    console.log("======== FOR EACH ========");
    marcas.forEach(function(element,index){
        console.log(index+".- "+element.toUpperCase());
    });//forEach 
}); 