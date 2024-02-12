//https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
let boton=document.getElementById("boton");
let boton2=document.getElementById("boton2");
/*
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
}); */

//Exercise #1
const bankLine=['Sofia','David','Juan'];
boton.addEventListener("click",function(event){
    //part1
    console.log("Fila inicial:",bankLine);
    bankLine.push('Sara','Augustin');
    //part2
    console.log("2 personas más se forman:",bankLine);
    console.log(`La persona siendo atendida por el cajero ${bankLine.shift()}`);//elimina el primer elemento del array
    //part3
    bankLine.splice(1,0,'Renata');
    console.log('Renata se forma atrás de David :',bankLine);
    bankLine.push('Elena');
    console.log("Elena se forma al final:",bankLine);
}); 

//Exercise #2
boton2.addEventListener("click",function(event){
    let asterisco='';
    for (let i = 0; i < 5; i++) {
        //console.log('primerFor',asterisco);
        for (let j = 0; j<1; j++) {
            asterisco=asterisco+'*';
            console.log(asterisco);
        }
    }
    //solución sin FOR anidado
    /*for(let i=0; i<5;i++){
        asterisco=asterisco+'*';
        console.log(asterisco);
    }*/
});

//Exercise #3
let xValue=document.getElementById("xValue");
let boton31=document.getElementById("boton31");

boton31.addEventListener("click",function(event){
    //print the value of the variable xValue;
    let x=Number(xValue.value)
    while(x>0){
        console.log(x);
        x-=0.5; 
    }
});

let boton32=document.getElementById("boton32");
boton32.addEventListener("click",function(event){
    //print all the odd numbers between 1 - 100
    /*for(let i=1; i<=100;i++){
        if(i%2 !=0){
            console.log(i);
        }
    }*/
    let cont=1;
    while(cont<=100){
        if(cont%2 !=0){
            console.log(cont);
        }
        cont++;
    }
});

let boton33=document.getElementById("boton33");
let number=document.getElementById("number");
boton33.addEventListener("click",function(event){
    //Write a method with a while loop to print 1 through n in square brackets. 
    //For example, if n = 6 print [1] [2] [3] [4] [5] [6]
    let n=parseInt(number.value); 
    let cont=1; 
    while(cont<=n){
        console.log('['+cont+']');
        cont++;
    }
});

let boton34=document.getElementById("boton34");
let numero=document.getElementById("numero");
boton34.addEventListener("click",function(event){
    //Write a method with a while loop that computes the sum of first n positive integers: 
    let n=Math.abs(parseInt(numero.value)); 
    let suma=0; 
    let cont=1;
    /*for (let i = 0; i <=n; i++) {
        suma+=i;
    }console.log(suma);*/
    while(cont<=n){
        suma=suma+cont;
        cont++;
    }console.log(suma);
});