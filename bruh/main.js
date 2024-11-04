let numeros = ["1", "2", "3", "4"]
let hola = ["enero2002", "41"]

console.log(parseInt(numeros))
console.log(parseInt(hola))
console.log(typeof(NaN))

document.write("hola")

console.log(isNaN("1"))
console.log(isNaN(7))
console.log(isNaN(NaN))
console.log(isNaN(["1", "2"]))

let arrayrandom = [];

// importar un json
import json from "./usuarios.json" with {type: "json"}

json.usuarios.forEach(element =>
{
    let h1 = document.createElement("h2");
    h1.innerHTML = element.nombre;
    document.body.appendChild(h1);

    let p1 = document.createElement("p");
    p1.innerHTML = element.apellidos;
    document.body.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = element.edad;
    document.body.appendChild(p2);
});

// import datos from "./usuarios.json" with {type: "json"};