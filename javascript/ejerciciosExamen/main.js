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
numMayor(numeros);

let numeros2=[1, -3, -4, -2, -6];
function numMenor(array){
    let menor=array[0];
    for(let i=1; i<array.length;i++){
        if(array[i]<menor) 
            menor=array[i];
    }
    return console.log("Num menor de "+array+": "+menor);
}
numMenor(numeros2);

// ##########  EJERCICIO 2  ##########  
let arr1=[1, 22, 5, 17, 10, 5, 40, 5];//5 se repite
let arr2=[7, 41, 5, 7, 10, 13, 2];//7 se repite
let arr3=[1, 22, 5, 14, 24, 31, 27, 15, 105];//no hay repetidos




// ##########  EJERCICIO 3  ##########  
let ordenado=[1, 2, 5, 14, 24, 31, 50, 105];

function desordenado(array){
    

}