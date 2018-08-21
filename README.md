# PruebaAngular

`Richard Pantoja`

## Examen Práctico

`// Uso de Let y Const`

let nombre:string = "César Tapia";
const edad:number = 32;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};


`// Cree una interfaz que sirva para validar el siguiente objeto`
interface batman {
    nombre:string;
    artesMarciales: string[];
}
let batman:batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}


`// Convertir esta función a una función de flecha`
let resultadoDoble = (a:number, b:number) => (a + b) * 2; 

