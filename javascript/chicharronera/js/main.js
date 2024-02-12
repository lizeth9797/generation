let a=document.getElementById("a");
let b=document.getElementById("b");
let c=document.getElementById("c");
let btnSubmit=document.getElementById("btnSubmit");
let resultado=document.getElementById("resultado");

btnSubmit.addEventListener("click",function(evento){
    resultado.innerHTML=chicharronera(parseInt(a.value),parseInt(b.value),parseInt(c.value));
});

function chicharronera(a,b,c){
    let x1=((-b+(Math.sqrt(Math.abs((b*b)-4*(a*c)))))/(2*a));
    let x2=((-b-(Math.sqrt(Math.abs((b*b)-4*(a*c)))))/(2*a));
    return ("x1: "+x1.toFixed(3)+", x2: "+x2.toFixed(3));
}