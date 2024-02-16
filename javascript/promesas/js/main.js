let data={"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}}

function getData(){
    return new Promise((resolve,reject)=>{
        if (data==null){//si lo rechaza por haber un error,a haz lo siguiente
            reject(new Error("Data null"));
        }
        setTimeout(()=>{resolve(data);},3000);//2 parametros: una funcion y cuánto tiempo en ms va a tardar en ejecutarse esta
    })
    
}//getData

//dime cuando sea correcto o cuando falle getData().then().catch()
getData()
    .then((response)=>console.log("Promesa cumplida: \n",response))
    .catch((err)=>console.log("Promesa fallida: \n", err.message));



// en una promesa se deben usar los parámetros resolve y reject