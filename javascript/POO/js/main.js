//programa que facilite pagar las nóminas

//comenzar el nombre de la clase con Mayúscula
//sólo DENTRO de la clase se hará uso de "this." ya que así apuntaremos a las propiedades de tipo INSTANCIA de nuestra clase, no a propiedades estáticas
class Person{
    name="";
    email="";
    age=0;
    resume="";
    id=0;
    static total=0; //esta propiedad estática o de clase sólo exite en la clase Person, es decir que no usamos 'this' para apuntar a ellas, sino el nombre de la clase. Ejemplo "ClassName.staticPropertyName"

    constructor(name,email,age,resume){ //función especial que ayuda a inicializar las propiedades
        this.name=name.toUpperCase(); // el this apunta a la propiedad definida en la clase 
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;//si es menor, ponle 18 y sino dejale esa edad
        this.resume=resume;
        Person.total++; //será un contador de instancias de la clase
        this.id=Person.total;
        console.log("dentro constructor", this.id);
    }//constructor
    printInfo(divObjetos){ //este método no debe de llevar la palabra function y va dentro de la clase, no del constructor. Puede llevar los parámetros que sean (en este caso solo usamos divObjetos)    
        divObjetos.insertAdjacentHTML("beforeend",`
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${this.id} - ${this.email}</div>
            <div class="card-body" id="cardBody_${this.id}">
                <h5 class="card-title">${this.name} - ${this.age}</h5>
                <p class="card-text">${this.resume}</p>
            </div>
        </div>
        `);
    }//printInfo
    static printTotal(divObjetos){ //creamos un método estático o de tipo clase que sólo existe dentro de la clase
        divObjetos.insertAdjacentHTML("afterbegin",`
        <div class="alert alert-danger" role="alert">${Person.total}</div>
        `)
    }//printTotal
}//class Person

class Employee extends Person{ //extends: hereda lo que tenemos en la clase Person
    department="";
    salary=0.0;

    constructor(name,email,age,resume,department,salary){
        super(name,email,age,resume) //le decimos que queremos tener acceso al constructor de la clase superior(de quien estamos heredando)
        this.department=department;
        this.salary=salary;
    }//constructor
    printInfo(divObjetos){ //a esto se le llama overriding, estamos sobreponiendo el método que existe allá arriba, por eso usamos el mismo nombre del método que ya usamos antes. Esa es la idea en OOP, el método se va a heredar en diferentes clases
        super.printInfo(divObjetos);
        let cardBody=document.getElementById(`cardBody_${this.id}`);
        cardBody.insertAdjacentHTML("beforeend",`
            <p class="card-text">${this.department}</p>
            <p class="card-text text-end"><strong>$${this.salary}</strong></p>
        `);
    }
}//class Employee

let divObjetos=document.getElementById("divObjetos");

/* let dita= new Person("dita Hdz", "dita@gmail.com", 21,"Java FullStack Dev");
let corey= new Person("corey sanchez", "corey@gmail.com", 25,"Java FullStack Dev");
let abril= new Person("abril Contreras", "abril@gmail.com", 17,"Java FullStack Dev");
let monse= new Person("monse cervantes", "monse@gmail.com", 17,"Java FullStack Dev");
console.log("dita age:",dita); */

let empleados=new Array();
    empleados.push(new Employee("dita Hdz", "dita@gmail.com", 21,"Java FullStack Dev","IT",780));
    empleados.push(new Employee("corey sanchez", "corey@gmail.com", 25,"Java FullStack Dev","IT",770));
    empleados.push(new Employee("abril Contreras", "abril@gmail.com", 17,"Java FullStack Dev","QA",800));
    empleados.push(new Employee("monse cervantes", "monse@gmail.com", 17,"Java FullStack Dev","Support",720));


//console.log("dita age:",dita);

//pintamos las cards en el HTML
/*
dita.printInfo(divObjetos);
corey.printInfo(divObjetos);
abril.printInfo(divObjetos);
monse.printInfo(divObjetos);  */

empleados.forEach((empleado)=>empleado.printInfo(divObjetos))
Person.printTotal(divObjetos);
