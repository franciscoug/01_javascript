/**************    REFERENCIAS                
 * Recordemos a la palabra clave const en las declaraciones
 * 
 * const x = 10;
   x = 20;	// TypeError: Assignment to constant variable.

   El valor ingresado x se considera una constante y está protegido 
   contra cambios.
   
   Se puede esperar que esto funcione de manera similar para los objetos.

   const contact = {};
   contact = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable.
   
   No podemos cambiar el valor que declaramos como const.
 */

// Probemos algo más
const contact = {};
contact.email = "RonaldSMurphy@freepost.org";

console.log(contact.email);

//Resulta que no solo no se genera ninguna excepción, 
//sino que el objeto se amplía con un nuevo campo al que se asigna el valor.

//Este valor se puede modificar o eliminar fácilmente más adelante

contact.email = "rsmurphy@briazz.com";
console.log(contact.email);
delete contact.email;
console.log(contact.email);

/**               EL OBJETO CONST SE PUEDE MODIFICAR    
 * 
 * Según la documentación de JavaScript, "una constante no puede cambiar 
 * mediante reasignación" y "una constante no puede volver a declararse" .
 * 
 * Esto se puede ver de forma ideal en el caso de tipos simples
 * const x = 10;
   x = 20;	// TypeError: Assignment to constant variable.

   En el caso de tipos complejos (es decir, matrices y objetos), 
   las variables y constantes (las palabras clave var, let, const)
   no contienen el objeto completo. Solo contienen la referencia al objeto.

   Por lo tanto, la palabra clave const protege únicamente la referencia,
   la dirección, contra cambios. No podemos cambiar la referencia.

   En el caso de los objetos, const está diseñado para proteger contra una
   nueva declaración o asignación de un nuevo objeto.
 * 
 */

/****************        COMPARANDO OBJETOS    *************
 * 
 * 
 * Como ya sabemos que en el caso de objetos en variables y constantes 
 * solo se almacenan las referencias
*/

var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};

console.log(point1 === point2); // false, la comparación se refiere a las
                                // referencias de objetos independientes.



let point3 = point1;

console.log(point1 === point3); // true, ambas variables tienen referencia
                                // al mismo objeto.

// Ahora comprobemos que en ambas variables hay una referencia al
//mismo objeto
point3.z = 40;

console.log(point3.z);  // 40
console.log(point1.z);  // 40
console.log(point2.z);  // undefined

//JavaScript no tiene un mecanismo listo para comparar dos objetos
//por sus propiedades (comparación profunda).  Debemos escribir una
//función recursiva.


/**************    COPIAR OBJETOS      ****************
 *     (copiar referencias (), clonar, fusionar)
 * 
 * 
 * 
 */
let point10 = {x:10, y: 20 };
let point11 = point10;    // copia la referencia
let point12 = {};
Object.assign(point12, point10);  //  copia las propiedades en un nuevo objeto
                                  //en este caso point10 a point12
console.log(point12.x); //10
console.log(point12.y); //20

console.log(point11.x); //10
console.log(point11.y); //20

console.log(point11 === point10); // true, se copió la referencia
console.log(point10 === point12); // false, se copiaron las propoedades
console.log(point11 === point12); // false, se copiaron las propiedades

//Asignaremos  a point13 object, primero point10 y luego {z:100}
let point13 = {};
Object.assign(point13, point10, {z: 100});//cambia el orden de point10 y z
console.log(point13.z); //observa el comportamiento en pythontutor

//La lista de objetos fuente puede ser más larga
var point14 = {};
Object.assign(point14, point13, {z: 200, color: "red"});

console.log(point14.z);  // 200, el valor más a la derecha gana

/********************************************************************* */
//estamos estudiando diferentes formas de copiar y extender objetos
let point20 = {x:10, y: 20 };
let point22 = Object.assign({}, point20); //Las propiedades de point20
                    // a un nuevo objeto vacío, y point22 es una copia exacta
console.log(point20 === point22); //false

let point23 = Object.assign({}, point20, {z: 100});


//Hagamos casi lo mismo con el operador de propagación ...  , spread operator
let point30 = {x:10, y: 20 };
let point32 = { ...point30};
console.log(point32 == point30);//false
console.log(point32 === point30);//false

//El operador de propagación (...point30) se utiliza para crear una 
//copia superficial de point30. El resultado es un nuevo objeto point32 
//con las mismas propiedades x: 10 y y: 20.
let point33 = { ...point30, z: 100};

/**
 * Cuando decimos que el operador de propagación (...) hace una copia 
 * superficial de un objeto, nos referimos a que se copian las propiedades
 * del objeto original al nuevo objeto, pero solo hasta el primer nivel 
 * de profundidad. Esto significa que:

        Si las propiedades del objeto original son valores primitivos 
        (números, cadenas, booleanos, etc.), esos valores se copian 
        directamente.

        Si las propiedades del objeto original son objetos o arreglos 
        (es decir, estructuras más complejas), se copia una referencia a 
        esos objetos o arreglos, no los objetos en sí.
 */

/**  
 * Comparación y utilidad:
Object.assign(): Copia todas las propiedades enumerables de uno o más 
                 objetos fuente a un objeto destino. 
                 Es útil cuando necesitas hacer una copia superficial 
                 de un objeto o combinar varios objetos en uno solo.

Operador de propagación (...): Es una forma más moderna y sintácticamente
                               más limpia para realizar las mismas tareas.
                               Además, es más conciso y suele preferirse 
                               por su claridad.

Ambas técnicas son útiles para copiar y extender objetos, 
pero el operador de propagación suele ser más fácil de leer y escribir.
 */

//Otro ejemplo
/** Los dos códigos produciran el mismo efecto
 */ 
let point34 = { ...point33, ...{z: 200, color: "red"}};
let point4 = { ...point33, z: 200, color: "red"};
 

/**          CLONACION SUPERFICIAL VS PROFUNDA        
 * Sin embargo, las acciones presentadas tienen una cierta limitación: 
 * todas representan clonaciones superficiales.

   Si hay una clonación superficial, entonces, como puedes adivinar, 
   también debería haber una clonación profunda .

  ¿Cuál es la diferencia entre ellos? 
  La clonación superficial no copia objetos anidados, 
  sino que opera únicamente sobre sus referencias.

  Esto no se nota en los ejemplos que hemos analizado, 
  así que prepararemos otro fragmento de código de prueba.
 */

  let circle1 = {
    radius: 100,
    center: {
      x: 100,
       y: 100
    }};
 
 let circle2 = {...circle1}; // este caso spread operator
 //let circle2 = Object.assign({}, circle1);//para que funcione en pythontutor
                             //copia solo la referencia del campo radius al
                             //nuevo objeto circle2
 circle1.radius = 200; //radius es primitivo
 circle1.center.x = 200;
 console.log(circle2.radius); //100, el radius no cambio, el campo no es objeto
 console.log(circle2.center.x);//200, este si cambió
 
 console.log(circle1 === circle2); // false
 console.log(circle1.center === circle2.center); // true 

 /**Así que ya podemos adivinar lo que será la clonación profunda .
  * Copiaremos los valores de todos los campos, independientemente de 
  * su anidamiento, creando si es necesario nuevos objetos que sean 
  * propiedades del objeto padre.
  * 
  * JavaScript no tiene un mecanismo incorporado para este tipo de 
  * clonación, pero podemos escribir fácilmente este fragmento de código
  * nosotros mismos.
  * 
  *  La función que escribimos comprobará los tipos de todas las
  *  propiedades del objeto copiado. Si una propiedad resulta ser 
  * un objeto, se llamará nuevamente a la misma función 
  * (por eso usamos la recursión).
  * 
  * NOTA: ENSEÑAR RECURSIVIDAD 07-recursividad.js ******************************************************************
  */

 let deepClone = function(originalObj) { //definimos la función deepClone, está función será
                                 //utilizada para clonar objetos de manera profunda
                                 //es decir, no solo copiando las propiedades superficiales,
                                //sino también los objetos anidados
 //let newObj = {...originalObj};// Hace una copia superficial del objeto usando el operador 
                                //de propagación
 let newObj = Object.assign({},originalObj)//esto lo hacemos porque el ... (spread operator) no esta 
                                          //soportado en pythontutor
  for(property in newObj) {  // Recorre todas las propiedades del objeto copiado
      if(typeof newObj[property] === "object") {  // Si la propiedad es un objeto (o un array)
          newObj[property] = deepClone(newObj[property]);  // Llama recursivamente a deepClone 
                                                           //para hacer una copia profunda de ese objeto o array
      }
  }
  return newObj;  // Devuelve el nuevo objeto que es una copia profunda del original
}

let originalObj = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      zip: 10001
  }
};

// Llamada a la función deepClone con el objeto original
let clonedObj = deepClone(originalObj);
//let surfaceObj = {...originalObj};

console.log(originalObj);
//console.log(surfaceObj);
console.log(clonedObj);