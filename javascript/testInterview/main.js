let buttom=document.getElementById("buttom");
let counter=document.getElementById("counter");

buttom.addEventListener("click",function(event){
    counter.innerText=updateCounter();
    console.log("hola");
});

let cont=0;

function updateCounter(){
    return cont ++;
}

