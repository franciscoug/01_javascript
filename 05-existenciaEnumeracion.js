/**      PRUEBAS DE EXISTENCIA DE PROPIEDAD
 *                       Y
 *           ENUMERACIÓN DE PROPIEDADES
 * 
 * Puede suceder que queramos comprobar si en nuestras instalaciones 
 * hay una propiedad con un nombre específico (un campo notas en el objeto
 * contact)
 * 
 * Si intentas leer una propiedad no existente, el valor undefined será 
 * devuelto.
 * 
 */

let contact = { }; // ¿Qué propiedades tiene contact?
if(contact.notes) { //No se muestra nada en consola, la condicion es false
                    //contact.notes es false
    console.log(contact.notes);
}

if(!contact.notes) { // if different then undefined
    console.log(contact.notes); //CONSOLA: undefined
}

/**
 *En la mayoría de los casos, no nos importará si un campo existe o no, 
 o simplemente no tiene ningún valor asignado.

Ambos casos se manejan de la misma manera, 
asignándose un nuevo valor a la propiedad
(si el campo no existe, se creará automáticamente). 
 */

if(!contact.notes) { // Si no existe, se crea y muestra un mensaje
    contact.notes = "something really important";
}
if(contact.notes) { // 
    console.log(contact.notes);//CONSOLA: something really important
}

if(!contact.notes) { // !contact.notes == False
    contact.notes = "¿Esto lo ejecutará o no?"; 
}

if(contact.notes) { // 
    console.log(contact.notes);
}

/**
 * Es una buena práctica comprobar si existe un campo de objeto determinado
 * antes de intentar leerlo. 
 * La facilidad de uso de la notación de puntos a menudo hace que tomemos 
 * atajos y supongamos que un objeto debería tener un aspecto determinado. 
 * Esto puede tener consecuencias fatales, especialmente para los objetos 
 * anidados.

   Echemos un vistazo al objeto de contacto, que contiene solo el campo de
   teléfono. Si intentamos mostrar el valor del campo de notas inexistente,
   la consola aparecerá indefinida y el programa seguirá ejecutándose.
 */
console.log(contact.email); // -> undefined

/**
 * Sin embargo, si intentamos hacer referencia a un campo de correo 
 * electrónico inexistente, que parece contener los campos de trabajo y
 * privados anidados, las consecuencias serán ligeramente más graves.
 */
//********console.log(contact.email.private); // exception!, verlo en consola

/**
 * El motor de JavaScript intentará encontrar el campo privado en el objeto,
 * que no está definido. 
 * Esto terminará generando una excepción que, 
 * si no se maneja con try... catch, terminará nuestro programa.
 * 
 * La forma más fácil de protegerse es utilizar el bloque try...catch o
 * simplemente verificar antes de llamar si el objeto y el campo requerido 
 * existen:
 */

if(contact && contact.email) {
    console.log(contact.email.private);
}

//o una forma más simple
contact && contact.email && console.log(contact.email.private);


/***************         PRUEBAS DE EXISTENCIA  **************************   
 * JavaScript permite una prueba más inequívoca de si existe un campo de
 * objeto: utilizando la palabra clave in.

 *Si el campo existe, se devuelve true
 (incluso si el campo no tiene ningún valor establecido).

false  De lo contrario, se devuelve el valor .
 */

if("notes" in contact) { // if true
    console.log(contact.notes);
}

//Recuerde que el nombre de la propiedad es una cadena, y así es como
//debe utilizarla con la palabra clave in



/********ENUMERACIÓN for...in, lo utilizamos para enumerar todos 
 * los campos de un objeto
RECORREMOS LAS PROPIEDADES DE UN OBJETO, pero solo las CLAVES
*/
let contact1 = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact1) {
    // print property name
   console.log(x);  
};

//Para llegar a un campo dado, al valor (key:value)
//Utilizamos la notación de corchetes [ ]

for(x in contact1) {
    // print property value 
     console.log(contact1[x]);
 }
 
 //Si queremos mostrar el nombre, tipo y valor de todas las propiedades,
 //podríamos escribirlos de la siguiente manera

 for(x in contact1) {
    // print property name, type and value
   console.log(`${x} : ${typeof contact1[x]} : ${contact1[x]}`);
}

//El método Object.keys
//Este método devuelve una matriz de nombres de propiedades,
// que podemos usar de cualquier forma que queramos.
//Esta matriz contendrá todas las claves 
//(nombres de propiedades) del objeto de contacto.

let keys = Object.keys(contact1);
console.log(keys);
