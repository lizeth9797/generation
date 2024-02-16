const suma=require("./main.js");
const multiplica=require("./main.js");

//test 1
test('sumar dos números: 2+2=4',
()=>{
    expect(suma(2,2)).toBe(4); //expect: espero que  al ejecutarlo haga esto
});
//test 2
test('sumar dos números: 3+3=6',
()=>{
    expect(suma(3,3)).toBe(6); 
});
//test 3
test('sumar dos números: 3+5=8',
()=>{
    expect(suma(3,5)).toBe(8); 
});
