//programa que facilite pagar las nóminas

//comenzar el nombre de la clase con Mayúscula
class Person{
    name="";
    email="";
    age=0;
    resume="";

    constructor(name,email,age,resume){ //función especial que ayuda a inicializar las propiedades
        this.name=name.toUpperCase(); // el this apunta a la propiedad definida en la clase 
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;//si es menor, ponle 18 y sino dejale esa edad
        this.resume=resume;
    }
}//class Person

let dita= new Person("Dita Hdz", "dita@gmail.com", 21,"Java FullStack Dev");
let abril= new Person("abril Hdz", "abril@gmail.com", 17,"Java FullStack Dev");
let corey= new Person("abril Hdz", "abril@gmail.com", 17,"Java FullStack Dev");

console.log(dita.age);
console.log(abril.age);

