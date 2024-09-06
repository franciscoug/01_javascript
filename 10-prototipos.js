/********************** PROTOTYPES ************************************ 
 * 
 * TEMAS:
 *     + __proto__
 *     + Object.setPrototypeOf
 *     + Object.create
 *     + Constructor
 * 
 * 
 * 
 * Los objetos se pueden encontrar en los lenguajes de programación más 
 * populares. Los utilizamos en Python, Java, C# o C++.
 * 
 * 
 * La gran mayoría de los lenguajes utilizan un enfoque de clases , 
 * lo que básicamente significa que antes de crear un objeto, 
 * tenemos que definir una clase (con métodos y propiedades).
 * 
 * Una clase se considera como una especie de plantilla sobre la que
 * creamos objetos (instancias). Al asignar valores a propiedades o 
 * llamar a métodos, ya estamos trabajando sobre objetos y no sobre clases.
 * 
 * 
 * Una de las cosas más importantes que permiten las clases es la herencia.
 * A partir de una clase existente, podemos crear una nueva, 
 * que contendrá las propiedades y métodos de la clase base.
 * 
 * 
 * Originalmente, JavaScript no utilizaba clases. En nuestros ejemplos, 
 * hasta ahora nos ha ido muy bien utilizando el modelo sin clases. 
 * Pero, ¿cómo implementamos la herencia sin clases? 
 * De una forma ligeramente diferente a la conocida como clases, 
 * lo hicimos utilizando prototipos , es decir, objetos existentes 
 * conectados de forma adecuada a objetos recién creados. 
 * De ahí el nombre: modelo de objeto prototipo .
 * 
 * 
 * El estándar ECMA6 introdujo las clases en JavaScript como una 
 * alternativa a los prototipos y constructores. 
 * Ambos enfoques se pueden aplicar ahora de forma equivalente.
 * 
 * 
 * Es cierto que el enfoque de clases es mucho más simple para las 
 * personas que están empezando a aprender programación o 
 * cambiando a JavaScript desde otro lenguaje orientado a objetos.
 * 
 * 
 * Hay muchos programadores de JavaScript que solo han utilizado clases, 
 * a menudo sin saber de la existencia de prototipos. 
 * Por eso, en este curso no dedicaremos demasiado espacio a los 
 * prototipos, sino que analizaremos las clases con más detenimiento. 
 * Sin embargo, al programar en JavaScript, debes al menos ser consciente 
 * de la existencia de la tecnología de prototipos.
 * 
 * 
 * NOTA:
 * En la actualidad, para crear objetos en JavaScript se utilizan 
 * con mayor frecuencia la notación literal y las clases. 
 * 
 * La técnica de notación literal es adecuada para crear objetos que no
 * son muy complejos, a menudo creados ad hoc, en los que no nos interesa 
 * utilizar la herencia. 
 * 
 * Las clases se utilizan siempre que vayamos a 
 * crear repetidamente objetos similares, a menudo un poco más complejos,
 * en los que aparece la herencia.
*/

/**Echemos un vistazo a los objetos creados con notación literal. 
 * Creemos dos objetos, point y colorPoint. 
 * El objeto point contiene las coordenadas de su posición 
 * en la superficie, mientras que colourPoint contiene solo el color. */

let point = {x:0, y:0};
let coloredPoint = {color: "red"};

/**Mencionamos anteriormente que cada nuevo objeto en JavaScript se crea de
 * forma predeterminada a partir del Objectconstructor genérico.

*Una de las propiedades que hereda cada objeto es el campo  __proto__. 
 Veamos qué sucede cuando usamos este campo para conectar nuestros dos 
 objetos.  */

 coloredPoint.__proto__ = point;//point se convierte en
                               //un prototipo del objeto coloredPoint

 /**De esta forma, el objeto point se convierte en un prototipo del 
  * objeto coloredPoint. Por cierto, el point también tiene su prototipo, 
  * que es un objeto creado por defecto a partir del Objectconstructor. 
  * Por tanto, estamos hablando de una cadena de prototipos. 
  *
  * ************************************************************ 
  * NOTA: 
  * En la programación normal, no utilizamos __proto__. 
  * El uso directo de este campo se considera obsoleto, 
  * retirado de los estándares, lento. 
  * Aquí, lo usamos solo para aprender los conceptos básicos 
  * de creación de prototipos paso a paso.
  ************************************************************** 
  * 
  * Intentemos hacer referencia a la propiedad del coloredPointobjeto.
  * */

console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);
console.log(point.color);

/**Como era de esperar, Object.getOwnPropertyNamesnos muestra que el 
 * objeto solo tiene la propiedad de color.

   El hecho de que tengamos acceso a él es evidente. 
   Sin embargo, intentamos leer el campo x con éxito. 
   ¿Qué sucede entonces? JavaScript no encuentra ningún campo nombrado x
   en el objeto coloredPoint y lo busca en el prototipo.

   Si no lo encuentra allí, lo busca en el prototipo, y así sucesivamente
   (de ahí la cadena de prototipos).

   Ahora intentemos cambiar el valor de la propiedad que heredamos del 
   prototipo.  */

   coloredPoint.x = 100;   // new property
   console.log(coloredPoint.x);
   console.log(point.x);
   console.log(Object.getOwnPropertyNames(coloredPoint));

   /** Resulta que al intentar escribir en dicha propiedad, 
    *  JavaScript no sigue la cadena de prototipos.

       Si no encuentra una propiedad directamente en el objeto, 
       la crea y le asigna un nuevo valor. De esta forma, entre otras cosas,
       se protegen las propiedades del prototipo 
       (y un mismo prototipo puede ser utilizado por muchos objetos 
       diferentes).

       Ahora cambiemos el valor de una de las propiedades del objeto de 
       punto, que es nuestro prototipo, a una prueba. */
   
       point.y = 200;
       console.log(coloredPoint.y);
       console.log(point.y);

    /** El cambio es visible tanto a nivel del objeto point como del 
     * objeto colorPoint, para el que point es un prototipo.
     *  __proto__ como ya hemos dicho, no se recomienda utilizar 
     * la propiedad para prototipos. 
     * Para presentar alternativas, utilicemos un escenario un 
     * poco más elaborado. */

/** Un prototipo permite que un objeto acceda a propiedades y métodos 
 *  de otro objeto.
 *  Esto es útil para compartir funcionalidades sin necesidad de 
 *  copiarlas en cada objeto individualmente. */

/** _proto_     ********
 * 
 * Continuemos con la forma no recomendada de _proto_.
 * 
 * Vamos a crear un objeto de figura que tenga un  métodogetType. 
 * El método comprobará si tenemos un campo type en el objeto y
 *  devolverá su valor o la cadena "unknown".

   El segundo objeto, circle, contiene las propiedades type, center, 
   y radius.  
   Utilizando __proto__, asignamos a figure como prototipo circle.
*/
let figure = {
  getType: function() {
      return this.type ? this.type : "unknown";
  }
  };
  
  let circle = {
  type: "circle",
  center: {x:0, y:0},
  radius: 100
  };
  circle.__proto__ = figure;//figure se convierte en un prototipo
                            //del objeto circle

//Llamemos al método getType para ambos objetos
console.log(figure.getType());
console.log(circle.getType());

/**
 * Si llamas a figure.getType, devolverá "unknown"; después de todo, 
 * el objeto no tiene un campo  type. 
 * 
 * Al llamar, circle.getTypese mostrará "circle", 
 * una cadena almacenada en el campo type del objeto circle.

En este caso, JavaScript no encuentra el método getType directamente en 
el círculo, por lo que comienza a buscar en la cadena de prototipos.

Después de encontrar el método en el prototipo, lo llama. 


Observa la declaración  getTypedel método. En ella, hacemos referencia
al campo type mediante la palabra this.

Explicamos anteriormente que this se refiere al objeto en 
el que definimos el método. Eso fue un poco simplificado, 
pero generalmente es cierto. 
De hecho, this se refiere al objeto en el contexto del cual se 
llama a una función dada. En nuestro caso, el método pertenece a figure,
pero se llama en circle.

En tal situación, este dentro de sí se refiere a circle y no a figure.
 */


/************** Object.setPrototypeOf **********************
 * 
 * ¿Qué alternativas tenemos si __proto__no se recomienda su uso?

   Primero, podemos utilizar los métodos:
           Object.setPrototypeOf y
           Object.getPrototypeOf.

El primero nos permite asociar el objeto objetivo con el objeto prototipo.

El segundo devuelve el prototipo del objeto indicado 
(en nuestro ejemplo, la variable proto debe hacer referencia al objeto 
de figura).
*/

let figure1 = {
  getType: function() {
      return this.type ? this.type : "unknown";
  }
  };
  
  let circle1 = {
  type: "circle1",
  center: {x:0, y:0},
  radius: 100
  };

Object.setPrototypeOf(circle1, figure1);
let proto = Object.getPrototypeOf(circle1);
console.log(circle1.getType());

/*************   Object.create ****************
 * 
 * También podemos crear un objeto vacío a partir del prototipo 
 * seleccionado, completándolo posteriormente con los campos necesarios.

   Utilizamos el método Object.create que ya aprendimos.

   Anteriormente, lo usamos con un argumento nulo, 
   lo que significaba que creábamos un objeto vacío sin un prototipo.
 * 
 * 
 */
   let circle2 = Object.create(figure1)
   circle2.type = "circle2";
   circle2.center = {x:0, y:0},
   circle2.radius = 100;
   console.log(circle2.getType());
   

/****************    CONSTRUCTOR   *************************************
 * 
 * El último enfoque es utilizar constructores.  
 * En primer lugar, definimos el constructor Figure con el que creamos
 * un objeto figureCFigure.
 * 
*/

let Figure = function(){ //Oberva la convencion con inicial mayúscula
  this.getType = function() {
      return this.type ? this.type : "unknown";
  }
};
let figureCFigure = new Figure;

/**
 * En el siguiente paso, definimos el constructor Circle y, 
 * lo que es más importante, vinculamos el objeto figureCFigure a él como 
 * prototipo. 
 * Observe que hasta ahora el prototipo se ha conectado directamente 
 * al objeto. 
 * Esta vez es diferente: lo vinculamos a una función que creará objetos.

   Cada vez que llamamos al Circleconstructor (usando new, por supuesto) 
   se creará un nuevo objeto con los campos type, centery radius. 
   El prototipo de cada objeto será un figureCFigure.
 */

let Circle = function(center, radius){
this.type = "circle";
this.center = center;
this.radius = radius;
};
Circle.prototype = figureCFigure;

let circle3 = new Circle({x:0, y:0}, 10);
let circle4 = new Circle({x:100, y:100}, 100);


//Definamos un constructor Triangle, es un objeto que crearemos para
//crear objetos triangulares, su prototipo también será un figure.

let Triangle = function(v1, v2, v3) {
  this.type = "triangle";
  this.vertices = [ v1, v2, v3];
};

Triangle.prototype = figure;

let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});

console.log(circle3.getType());
console.log(triangle1.getType());

/**Si decide utilizar prototipos, definitivamente es mejor utilizar un 
 * método basado en constructores o Object.create.


  Hagamos una prueba más, que nos mostrará una característica muy útil de 
  los prototipos. El prototipo es un objeto, por lo que podemos modificarlo
  añadiéndole nuevos métodos.

  Digamos que queremos modificar un objeto que es un prototipoCircle. 
  No tenemos que hacer referencia directa al figure, pero podemos hacerlo
   de la siguiente manera: */
   Circle.prototype.hi = function(){console.log("Hi!")};

   /**
    * Hemos agregado el himétodo al prototipo, cuya única tarea es mostrar
    *  saludos en la consola.

       Hemos modificado el figureobjeto, que es un prototipo de los 
       objetos circle1, circle2y triangle1. Lo importante es que el
       método hi estará disponible no solo para los objetos recién 
       creados con los constructores Circle o Triangle, sino para todos los 
       objetos existentes, cuyo prototipo es simplemente figure.

Vamos a comprobarlo:
    */

circle3.hi();
triangle1.hi();
figureCFigure.hi();


/**
 * Como era de esperar, el saludo "Hi!"se muestra tres veces.

  La característica de prototipos que se presenta aquí permite realizar 
  modificaciones en objetos existentes (por ejemplo, objetos predefinidos).
  Usemos el Stringconstructor como ejemplo. Está predefinido y 
  nos permite crear objetos de cadena. Dichos objetos tienen muchos
  métodos y propiedades, por ejemplo length, que devuelve la longitud de 
  la cadena almacenada.
 */

let testString = new String("unu doi trei");
console.log(testString.length);

//Como todo diseñador, Stringtambién tiene la propiedad del prototipo.
//Vamos a intentar usarlo:
String.prototype.hi = function(){console.log("Hi!")};
console(string.hi());

/**Añadir el método de escritura hi al diseñador String no es especialmente
 *  útil, pero pone de relieve algunas posibilidades interesantes. 
 * Tenga en cuenta que, después de nuestros cambios, también podemos 
 * crear un fragmento de código como este: */
console.log("abcd".hi());

/**¿Por qué "abcd", que es un valor primitivo, actúa como si fuera un 
 * objeto que contiene un hicampo? Es por el autoboxing .
   JavaScript convierte el tipo simple (en este caso string) en 
   el objeto correspondiente (en nuestro caso, un objeto basado en el 
   constructor String) cuando es necesario.

   Y señalamos que esto requiere el uso de un punto, lo que sugiere que
    con la notación de puntos tratamos el texto "abcd"como un objeto.
  */
 


  