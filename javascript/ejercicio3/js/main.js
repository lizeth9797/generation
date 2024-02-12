//Part 1: Type Converter
/*console.log("#### Ejercicio 1 ####");
let x=undefined;
console.log("number: ",Number(x));
console.log("string: ",String(x));
console.log("boolean: ",Boolean(x));*/


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



//Challenge Yourself
let boton5=document.getElementById("btnSubmit5");
let score=document.getElementById("score");

boton5.addEventListener("click",function(evento){
    console.log("#### Challenge ####");
    console.log(rubric(parseFloat(score.value)));
    score.focus(); //posiciona el cursor dentro del campo
    score.select(); //permite presionar tab y enter
}); 

function rubric(n){
    let aprobado=(n>=5)?true:false
    console.log("student passes?: ",aprobado);
    if(n==11){
         console.log("Perfect");
    }else if(n>8){
         console.log("Excellent");
    }
}

//Operators
//console.log("1+2**3*4/5",1+2**3*4/5);

////https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow
//JS-03 Control Flow part1
let boton6=document.getElementById("btnSubmit6");
let dayNumber=document.getElementById("dayNumber");
let hourNumber=document.getElementById("hourNumber");
let bhResultado=document.getElementById("bhResultado")

boton6.addEventListener("click",function(evento){
    bhResultado.innerText=businessHours(dayNumber.value,hourNumber.value);
    score.select(); 
}); 

function businessHours(dayNumber, hourNumber){
    let business= ((hourNumber>=9 && hourNumber<=18) && (dayNumber>=1 && dayNumber<=5))?true:false; 
    return business;
} 


//JS-03 Control Flow part2
let boton7=document.getElementById("btnSubmit7");
let janFirstDayNumber=document.getElementById("janFirstDayNumber");
let yearDayNumber=document.getElementById("yearDayNumber");
let dayResultado=document.getElementById("dayResultado")

boton7.addEventListener("click",function(evento){
    dayResultado.innerText=getDayNumber(parseInt(janFirstDayNumber.value),parseInt(yearDayNumber.value))
    score.select(); 
}); 

function getDayNumber(janFirstDayNumber, yearDayNumber){
    let numberDay=(yearDayNumber+(janFirstDayNumber-1))%7;
    return numberDay;
} 

//JS-03 Control Flow part3
let btnSubmit8=document.getElementById("btnSubmit8");
let yearDayNumber2=document.getElementById("yearDayNumber2");
let hourNumber2=document.getElementById("hourNumber2");
let bHourandDay=document.getElementById("bHourandDay")

btnSubmit8.addEventListener("click",function(evento){

    let fecha= new Date();
    let newfecha=new Date(fecha.getFullYear()+" 01-01");
    let firstDayNumber=newfecha.getDay();
    let currentyearDay=fecha.getDay();
    console.log("currentyearDay: ",currentyearDay);
    /*Opción de JC:
    let fecha=new Date();
    fecha.setDate(1); //día 1
    fecha.setMonth(0) //mes 0
    let dia=getDayNumber(fecha.getDay(),currentyearDay); 
    */
    let dia=getDayNumber(firstDayNumber,currentyearDay); 
    //bHourandDay.innerHTML=businessHours(dia,parseInt(hourNumber2.value));

    //CHALLENGE: Replace the yearDayNumber and hourNumber parameters with a Date() variable.
    console.log("hora actual:",fecha.getHours());
    bHourandDay.innerHTML=businessHours(dia,fecha.getHours());

}); 


// DESPUES DE CALCULAR EL FirstDay, calcular hourNumber AND just take the 0-24 value
