/**                     LITERALES
 * 
 * Forma básica de crear objetos
 *  
 *      JavaScript es un lenguaje extremadamente flexible.
 *      
 *      La sintaxis del lenguaje nos permite, en muchos casos, lograr el
 *      mismo objetivo de diferentes maneras. 
 *      Con los objetos ocurre lo mismo
 * 
 *      La más simple y común es el uso de la NOTACIÓN LITERAL  también 
 *      llamada notación de inicializador.
 */

let contact = {};

//agregemos una propiedad a contact con la NOTACIÓN PUNTO
contact.tel ="207-662-5412";

console.log(contact);
console.log(contact.tel);

//podemos declarar e iniciar inmediatamente al crear un objeto
let contact2 = {
    tel: "207-662-5412",  // las claves son cadenas(strings)
    email: "RonaldSMurphy@freepost.org"
};

console.log(contact2); 
console.log(contact2.tel);

console.log(typeof console); //  console es un objeto
console.log(typeof console.log); // es una función

/**                ELIMINAR OBJETOS
 * 
 Durante el funcionamiento de nuestra aplicación, probablemente crearemos 
 muchos objetos.

Cada nuevo objeto ocupa memoria, por lo que existe un riesgo potencial de 
desbordamiento.

Afortunadamente no hay necesidad de darle la vuelta a este problema 
(al menos en la etapa de aprendizaje en la que nos encontramos ahora).

El motor de JavaScript utiliza un recolector de basura (Garbage Collector) , 
que decide por nosotros si los objetos aún son necesarios y 
posiblemente los elimine.

El lenguaje JavaScript ni siquiera prevé la posibilidad de eliminar
objetos explícitamente.
 */
