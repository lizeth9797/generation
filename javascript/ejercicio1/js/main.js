console.log("dentro del JS");

let nombre="CH37"; //string
let edad=5; //number
let termino=false; //boolean

console.log(nombre,edad,termino);
console.log(typeof(nombre),typeof(edad),typeof(termino));

/*
let x="adios";
console.log('before if:', x)
if(true){
    let x="hola";
    console.log(x);
}
console.log("afuera: ",x);

var y="adios";
console.log('before if:', y)
if(true){
    var y="hola";
    console.log(y);
    var y="hola again";

}
console.log("afuera: ",y);

const z="adios";
console.log('before if:', z)
if(true){
    const z="hola";
    console.log(z);
}
console.log("afuera: ",z);
*/

let button=document.getElementById("btnSubmit");
let year=document.getElementById("txtYear");
button.addEventListener("click",function(evento){//el listener es como agregar una oreja para que escuche en este caso un click
    console.log(isNaN(year.value)); //Not a Number
    console.log(typeof(year.value)); 
    let nextYear=Number(year.value)+1; //solo va a convertir el string si todo es un num, no puede haber letras
    console.log(nextYear,typeof(nextYear));
    let y=parseInt(year.value) //lo que hace es imprimir la parte entera unicamente
    console.log("y:",y);
    y=parseFloat(year.value) //imprime todo el decimal pero ya lo toma como tipo de dato numerico, además se detendrá hasta donde encuentre una letra, Ej '200.40abc22' = 200.40
    console.log("yFloat:",typeof(y),y);
    let s=String(y)
    console.log("s:",s,typeof(s));
    console.log("y.toString:",y.toString(),typeof(y.toString()));
    console.log("y.toFixed:",y.toFixed(2),typeof(y.toFixed(2)));  //toFixed regresa una cadena

    let hoy=new Date();
    console.log(hoy);
    console.log("Tu edad es:",hoy.getFullYear()-y);

}); 