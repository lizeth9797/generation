//https://github.com/jcGeneration/EjerciciosJavascript

// ##########  EJERCICIO 1  ##########  
let numeros=[-9, -5, -7, -1, -6];
function numMayor(array){
    let mayor=array[0];
    for(let i=1; i<array.length;i++){
        if(array[i]>mayor)
            mayor=array[i];
    }
    return console.log("Num mayor de "+array+": "+mayor);
}
//numMayor(numeros);

// ##########  EJERCICIO 2  ##########  
let numeros2=[1, -3, -4, -2, -6];
function numMenor(array){
    let menor=array[0];
    for(let i=1; i<array.length;i++){
        if(array[i]<menor) 
            menor=array[i];
    }
    return console.log("Num menor de "+array+": "+menor);
}
//numMenor(numeros2);

// ##########  EJERCICIO 3  ##########  
//Escribir una función que permita saber si un número se repite dentro de un arreglo.
let arr1=[1, 22, 5, 17, 10, 5, 40, 5];//5 se repite
let arr2=[7, 41, 5, 7, 10, 13, 2];//7 se repite
let arr3=[1, 22, 5, 14, 24, 31, 27, 15, 105];//no hay repetidos

function repetidos(arreglo){
    let repetido=false;
    let num=0;
    for(let i=0; i<arreglo.length;i++){
        //console.log("Entro al for con array:", arreglo[i]);
        num=arreglo[i];
        for(let j=i+1;j<arreglo.length;j++){
            if(num==arreglo[j]){
                console.log("El número ", num, " se repite");
                repetido=true;
                i=arreglo.length
                break;
            }
            //console.log("salgo de if y entro a 2do FOR");
        }
        //console.log("salgo de 2do FOR y estoy en 1er FOR");
    }
    if(!repetido){
        console.log("No hay números repetidos");
    }
}
//repetidos(arr3);

// ##########  EJERCICIO 4  ########## 
//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5] 
let ordenado=[1, 2, 5, 14, 24, 31, 50, 105];

function desordenamiento(array){
    let desordenado= [];
    let random;
    let position=[];
        for(let i=0; i<array.length;i++){ //se crea un arreglo con las posiciones desordenadas aleatoriamente
            random=Math.floor(Math.random() * (array.length - 0) + 0);                 
            if(position.includes(random)){
                let compare=random;
                do{
                    random=Math.floor(Math.random() * (array.length - 0) + 0);   
                }while(position.includes(random))
                position.push(random);
            }else{
                position.push(random);
            }
        }
        //console.log("positionArray: ",position);     
        position.forEach(element => {
            desordenado.push(array[element]);
        });  
        console.log("Array desordenado: ",desordenado );
}

desordenamiento(ordenado);
