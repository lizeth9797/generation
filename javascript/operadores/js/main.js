//Operadores
let boton=document.getElementById("btnSubmit");
let score=document.getElementById("score");
let alertResultado=document.getElementById("alertResultado")

boton.addEventListener("click",function(evento){
    let num=Number(score.value);
    let grade="";
    if(num==10){
        grade="MB";
        //alertResultado.innerText="MB";
    }else if(num>=8 && num<10){
        grade="B";
        //alertResultado.innerHTML="<strong>B</strong>";
    }else if(num>=6 && num<8){
        grade="S";
    }else if(num<6){
        grade="NA";
    }else{
        grade="Dato incorrecto";
        alertResultado.innerText="Dato incorrecto";
    }
    alertResultado.innerHTML="<strong>"+grade+"</strong>";
    score.focus(); //posiciona el cursor dentro del campo
    score.select(); //permite presionar tab y enter
}); 
