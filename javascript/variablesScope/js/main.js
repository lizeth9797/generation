
const x="hi";
console.log(x); //"hi"
function reName(){
    const x="bye";
    console.log(x); //"bye"
    if(true){
         x="good bye"; 
         //TypeError: Assignment to constant variable.
    }
}




/*
--- Su valor no sale de los if/for ni funciones y tampoco podemos reasignar el valor de una constante dentro de un bloque {}. Sin embargo sí podemos volver a declarar una constante dentro de un statement(if/for) si antes fue definida en otro bloque o fuera de él.---

*/