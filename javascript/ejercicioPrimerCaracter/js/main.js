let input=document.getElementById("input");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(event){
  event.preventDefault();
  let cadena=[];
  cadena=input.value;
  //console.log(cadena[0],typeof(cadena[0]));

  const mayus=/^[A-Z]/;
  const minus=/^[a-z]/;
  const number=/^\d/;
  //console.log("Regex: ",number.test(cadena[0]));

  if(number.test(cadena[0])){
    console.log("number");
  }else if(mayus.test(cadena[0])){ //cadena.charCodeAt(0)>=65 && cadena.charCodeAt(0)<=90
    console.log("mayus");
  }else if(minus.test(cadena[0])){
    console.log("minus");
  }else{
    console.log("other");
  }



})