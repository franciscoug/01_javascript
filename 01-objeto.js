/*                     ¿QUÉ ES UN OBJETO?

* Tipos Primitivos

    ¿A qué nos referimos cuando decimos que estos tipos son
    primitivos? Su "primitividad" es que no son complejos. 
    Siempre hay un valor específico y simple en una variable.
        Una variable puede contener un número, un valor lógico o 
    una cadena de caracteres. También puede que no haya nada allí,
    lo que significa que el valor indefinido está realmente allí.
    Primitivo, ¿no?

    El uso exclusivo de estos tipos de datos reduciría enormemente la
     posibilidad de crear programas más avanzados. 
        Por lo tanto, además de los tipos primitivos, se utilizan 
    tipos complejos. 
        Para simplificar un poco las cosas, podemos suponer que 
    trataremos con dos de estos tipos: MATRICES(arrays) y OBJETOS.

    ¿En qué sentido es esto una simplificación? Bueno, los ARRAYS 
    en JavaScript también son objetos. 
        En JavaScript, incluso las funciones son objetos. 
        De hecho, todo en JavaScript, excepto un primitivO, 
    es un objeto. Pero por ahora, pretendamos que no lo sabemos y 
    tratemos como objetos solo a los objetos declarados abiertamente.


* Matriz como tipo complejo
    Los tipos complejos, como las matrices o los objetos, son conjuntos de
    datos: 
        se puede colocar un conjunto ordenado de valores diferentes en una
        variable. 
    
    En el caso de una matriz, los valores individuales colocados en una 
    sola variable se denominan elementos y se hace referencia a ellos 
    mediante un número que especifica su posición en el conjunto 
    (es decir, un índice).

    En JavaScript, los índices comienzan en 0, por lo que el primer elemento
    tendrá un índice de 0, el segundo un índice de 1, y así sucesivament.
    Como recordatorio, las matrices se crean más fácilmente utilizando 
    corchetes (aunque esta no es la única forma de crearlas).

*/
let a = [10, 20, "en to tre", true, 50];

a[4] = a[4] * 2;
console.log(a[0]);  // -> 10
console.log(a[2]);  // -> en to tre
console.log(a[4]);  // -> 100

/**           UN OBJETO COMO UN TIPO DIFERENTE DE MATRIZ
 * 
 * Desde un punto de vista formal, un objeto puede tratarse como un tipo 
 * especial de matriz.
 * 
 * En informática, las matrices de este tipo se denominan matrices de 
 * asociación (o, en la teoría de estructuras de datos, se denominan mapas).
 * 
 * 
 * 
 */

let sampleObject = { //Las matrices de asociación(objetos)no tienen indices
    id: 10,          //tienen key:values, "asociamos" un elemento a una clave
    delay: 20,       // las propiedades son los pares key:value
    name: "en to tre",
    isPresent: true,
    delay: 50
};

sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);   // -> 10
console.log(sampleObject.name); // -> en to tre
console.log(sampleObject.delay);    // -> 100
