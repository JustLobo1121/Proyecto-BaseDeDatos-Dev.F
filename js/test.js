// Supongamos que tienes un arreglo de objetos
let objetos = [
    {param1: 1, param2: 2, param3: 3, param4: 4},
    {param1: 5, param2: 6, param3: 7, param4: 8},
    {param1: 9, param2: 10, param3: 11, param4: 12},
    // ... otros objetos
];

// Definir los valores que deben coincidir en las cuatro propiedades
let valor1 = 1;
let valor2 = 2;
let valor3 = 3;
let valor4 = 4;

// Encontrar el índice del objeto que cumple con los criterios
let indice = objetos.findIndex(objeto => 
    objeto.param1 === valor1 &&
    objeto.param2 === valor2 &&
    objeto.param3 === valor3 &&
    objeto.param4 === valor4
);

// Verificar si se encontró un objeto que cumple con los criterios
if (indice !== -1) {
    // Si se encontró, eliminarlo del arreglo
    let objetoEncontrado = objetos.splice(indice, 1)[0];
    console.log("Objeto encontrado y eliminado:", objetoEncontrado);
} else {
    console.log("No se encontró ningún objeto que cumpla con los criterios.");
}