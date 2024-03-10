//referenciamos los 4 elementos por ID (2 botones y 2 inputs)
let btnAgregar=document.getElementById("btnAgregar");
let btnClear=document.getElementById("btnClear");
let name=document.getElementById("name");
let number=document.getElementById("number");
let tablaListaCompras=document.getElementById("tablaListaCompras");
let cuerpoTabla=tablaListaCompras=document.getElementsByTagName("tbody").item(0);
let contadorProductos=document.getElementById("contadorProductos");
let productosTotal=document.getElementById("productosTotal");
let precioTotal=document.getElementById("precioTotal");
let alertValidacionesTexto=document.getElementById("alertValidacionesTexto");
let alertValidaciones=document.getElementById("alertValidaciones");
let precio=0;
let isValid=true;
let row=0;
let totalProd=0;
let total=0;
let contador=0;
let numberInt; //la cantidad convertida a numEntero para que se haga la suma con el contador 'totalProd' 

let datos=new Array();

//agregamos 'oreja' al botón limpiar
btnClear.addEventListener("click",function(event){
    event.preventDefault();
    name.value="";
    number.value="";
    alertValidaciones.style.display="none";//en caso de que el div alerta esté pintado, lo va a ocultar
    //limpiamos TODOS LOS VALORES
    name.style.border="";
    number.style.border="";
    row=0;
    totalProd=0;
    total=0;
    contador=0;
    contadorProductos.innerText=contador;
    productosTotal.innerText=totalProd;
    precioTotal.innerText=total;
    cuerpoTabla.innerHTML="";

    //borramos lo que estaba en localStorage
    localStorage.setItem("contador",contador);
    localStorage.setItem("totalProd",totalProd);
    localStorage.setItem("total",total);
    
    localStorage.setItem("datos",[]);
   /*  datos.forEach((r)=>{ 
        cuerpoTabla.insertAdjacentHTML("beforeend",
        `
        <tr>
        <th scope="row">${r.id}</th>
        <td>${r.nombre}</td>
        <td>${r.cantidad}</td>
        <td>${r.precio}</td>
        </tr>
        `);
        }); */

    name.focus();
});//termina btn Limpiar


btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    name.style.border="";
    number.style.border="";
    name.value=name.value.trim();
    number.value=number.value.trim();
    numberInt=parseInt(number.value); //convierte a num entero
    isValid=true;
    if(name.value.length<3){
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `El nombre<strong> "${name.value}" </strong> no es correcto <br>`
        );
        alertValidaciones.style.display="block";
        name.style.border="thin solid red";
        isValid=false;
    }

    if(!validarCantidar()){ //si verdaderamente está en blanco el campo, entonces manda alerta
        alertValidacionesTexto.insertAdjacentHTML("beforeend",
        `La cantidad debe ser al menos 1 <br>`);
        alertValidaciones.style.display="block";
        number.style.border="thin solid red";
        isValid=false;
    }

    //como ya pasamos todas las validaciones, ahora agregas un precio
    
    if(isValid){
        precio=getPrecio();
        row=row+1;
        total=total+(precio*numberInt);
        contador++; //para que me sume cada que entra aquí y actualice la cantidad de productos en la tabla
        totalProd=totalProd+numberInt;
        cuerpoTabla.insertAdjacentHTML("beforeend",
        `
        <tr>
        <th scope="row">${row}</th>
        <td>${name.value}</td>
        <td>${number.value}</td>
        <td>${precio}</td>
      </tr>
        `);

        let elemento = `{
            "id": ${row},
            "nombre": "${name.value}",
            "cantidad": ${number.value},
            "precio": ${precio}
        }`;

        datos.push(JSON.parse(elemento)); //esto nos regresa un string pero necesitamos que sea un objeto, por eso aplicamos JSON.parse al elemento
        console.log(datos);//datos contiene un arreglo de objetos
    
        localStorage.setItem("datos",JSON.stringify(datos)) //NOTA: localStorage solo puede guardar cadenas, por lo tanto haremos uso del método stringify el cuál convierte a cadena de caractéres lo que le pasemos como parámetro (en este caso 'datos' el cual es un arreglo de objetos)

        contadorProductos.innerText=contador;
        productosTotal.innerText=totalProd;
        precioTotal.innerText=total.toFixed(2);

        name.value="";
        number.value="";

        //ahora almacenamos en localStorage
        localStorage.setItem("contador",contador);
        localStorage.setItem("totalProd",totalProd);
        localStorage.setItem("total",total);

        name.focus();
    }
}); //termina btnAgregar


function validarCantidar(){
    //primero checa que haya un valor numérico
    if(isNaN(number.value)){ //si es NAN, regresa false
        return false;
    }
    //validamos al mismo tiempo si está vacio o si puso algo menos a 0 numerico
    if (number.value.length==0 || parseInt(number.value)<=0){//es igual a 0 en longitud o valor numérico
        return false;
    }
    return true;
}

//crearemos una función para generar un precio aleatorio
function getPrecio(){
    return parseInt((Math.random()*90)*100)/100;//*90 porque queremos que los prod cuesten menos de 90
}

//Mostrar la información almacenada cuando se abra/actualice la página

window.addEventListener("load",function(event){
    event.preventDefault();
    if(this.localStorage.getItem("contador")!=null){
        contador=Number(this.localStorage.getItem("contador"));
        totalProd=Number(this.localStorage.getItem("totalProd"));
        total=Number(this.localStorage.getItem("total")); //como lo que nos regresa este metodo lo convierte a string, debemos convertirlo a number para que podamos aplicar el método toFixed abajo

        contadorProductos.innerText=contador;
        productosTotal.innerText=totalProd;
        precioTotal.innerText=total.toFixed(2);
    }//if !=null

    if(this.localStorage.getItem("datos")!=null){
        datos=JSON.parse(this.localStorage.getItem("datos")); //esto nos regresa un string pero necesitamos que sea un objeto, por eso agregamos JSON.parse
        console.log(typeof(datos));
        datos.forEach((r)=>{ //le decimos cada uno de los elementos que tienes en datos
        cuerpoTabla.insertAdjacentHTML("beforeend",
        `
        <tr>
        <th scope="row">${r.id}</th>
        <td>${r.nombre}</td>
        <td>${r.cantidad}</td>
        <td>${r.precio}</td>
        </tr>
        `);
        });//forEach



    }

});//window load