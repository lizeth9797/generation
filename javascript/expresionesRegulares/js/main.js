let btnValidar=document.getElementById("btnValidar");
let txtDato=document.getElementById("txtDato");
let alertResultado=document.getElementById("alertResultado");


btnValidar.addEventListener("click",function(event){
    event.preventDefault();
    let regex=new RegExp("^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$");//solo mayusculas, si quisieramos May/Min sería: "[A-Za-z]" y con guiones: [A-Z]{4}-[0-9], para min/max: "{4,6}", si queremos que extrictamente inicie con algo y termine con algo: "^[A-Z]{4,6}[0-9]{6}[A-Z0-9]{3}$" usamos '^ y $'
    if(regex.test(txtDato.value)){
        alertResultado.innerHTML="";
    }else{
        alertResultado.innerHTML="Formato RFC incorrecto";
    }
    txtDato.focus();
    

});