
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
button.addEventListener("click",function(evento){
    let edad=calculaEdad(parseInt(year.value));
    console.log("Tu edad es:",edad);
    //console.log("prueba:", year.valueAsNumber,typeof( year.valueAsNumber));
}); 

function calculaEdad(yearOfBirth){
    let date=new Date();
    let year=date.getFullYear();
    return year-yearOfBirth;
}

console.log(suma(4,5)); //aqui si funciona la funcion suma antes de que llegue a la linea 46 porque JS lo que hace es cargar funciones o variables(sin inicializarlas) primero, como los consol.log. A este término se le conoce como 'Hoisting' que quiere decir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.
// FUNCION COMÚN
function suma(a,b){
    let res=a+b;
    return res;
}
//console.log(multiplica(4,5));   // nos mara error porque dice que NO puede acceder a la variable antes de su inicialización y como la func de abajo está definida en una constante, no la va a cargar en memoria
// FUNCION DEL TIPO EXPRESIÓN
const multiplica= function(c,d){
    let res=c*d;
    return res;
};

//FUNCION FLECHA
const divide=(dividendo,divisor) => (dividendo/divisor);