//Part 1: Type Converter
console.log("#### Ejercicio 1 ####");
let x=undefined;
console.log("number: ",Number(x));
console.log("string: ",String(x));
console.log("boolean: ",Boolean(x));


//Part 2: New contender
//Challenge 1: Create an Age Calculator
let boton1=document.getElementById("btnSubmit");
let birthYear=document.getElementById("birthYear");
let futureYear=document.getElementById("futureYear");

boton1.addEventListener("click",function(evento){
    console.log("#### Challenge 1 ####");
    let yearFInt=parseInt(futureYear.value); //year future parsed
    let yearBInt=parseInt(birthYear.value); //year birth parsed
    let ageFuture=edadFutura(yearBInt,yearFInt)
    console.log("If you were born in ",yearBInt, "then in",yearFInt,"you’ll be",ageFuture);
}); 

function edadFutura(a,b){
    return b-a;
}


//Challenge 2: Create an information card
let boton2=document.getElementById("btnSubmit2");
let nombre=document.getElementById("nombre");
let place=document.getElementById("place");
let hobby=document.getElementById("hobby");

boton2.addEventListener("click",function(evento){
    console.log("#### Challenge 2 ####");
    console.log(`Hi, my name is ${nombre.value}. I live in ${place.value} and I enjoy ${hobby.value}`);
}); 


//Part 3: Declare and Use Functions
//Exercise #1
let boton3=document.getElementById("btnSubmit3");
let amount=document.getElementById("amount");

boton3.addEventListener("click",function(evento){
    console.log("#### Exercise #1 ####");
    let amountNumeric=parseFloat(amount.value) 
    let cost=fees(amountNumeric);
    console.log("You must pay $"+cost.toFixed(2));
}); 

function fees(cantidad){
    return 3+(cantidad*1.001);
}


//Part 3: Declare and Use Functions
//Exercise #2
let boton4=document.getElementById("btnSubmit4");
let name1=document.getElementById("name1");
let year1=document.getElementById("year1");
let name2=document.getElementById("name2");
let year2=document.getElementById("year2");
let name3=document.getElementById("name3");
let year3=document.getElementById("year3");

boton4.addEventListener("click",function(evento){
    console.log("#### Exercise #2 ####");
    let y1=parseInt(year1.value); 
    let y2=parseInt(year2.value);
    let y3=parseInt(year3.value);
    
    let age1=calculaEdad(y1);
    let age2=calculaEdad(y2);
    let age3=calculaEdad(y3);
    
    console.log(`Welcome ${name1.value}, you are ${age1}. Welcome ${name2.value}, you are ${age2}. Welcome ${name3.value}, you are ${age3}`);
}); 

function calculaEdad(yearOfBirth){
    let date=new Date();
    let year=date.getFullYear();
    return year-yearOfBirth;
}
