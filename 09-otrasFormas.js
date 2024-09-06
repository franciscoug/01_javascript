/**********  OTRAS FORMAS DE CREAR OBJETOS *********************************
 *                                                       
 * TEMAS:                                               
 *     + Factory                                         
 *     + Constructor, new                                
 *     + new Object()                                    
 *     + Object.create                                   
 *     + Class                                           
 **************************************************************************/

/**Otras formas de crear objetos
En todos los ejemplos que han aparecido hasta ahora en nuestro juego 
con objetos, utilizamos ***la notación literal*** para crearlos.

Este método es básicamente simple y legible y, por lo general, 
suficiente para la mayoría de las aplicaciones.

*****Es ideal cuando creamos un único objeto.*****

Sin embargo, este no es el único método disponible en JavaScript 
para crear objetos, por lo que nos tomaremos un tiempo para analizar 
técnicas alternativas.*/


/** Las FACTORY FUNCTION (de nuevo)
 * 
 * Empecemos con una técnica llamada factory en programación 
 * orientada a objetos. Este es el nombre que se le da a las funciones
 * que crean y devuelven objetos. 
 * En JavaScript, factory es un patrón de programación más que 
 * un mecanismo del lenguaje en sí, 
 * pero comprenderlo nos permitirá pasar sin problemas
 * a una técnica basada en un constructor .
 * 
 * ¿Qué es un patrón de programación?
 *       Un patrón de programación (o patrón de diseño) es una 
 *       solución general y reutilizable para un problema común 
 *       en un contexto específico. 
 *       Los patrones de diseño son más abstractos que los mecanismos 
 *       de programación y se pueden aplicar a una variedad de problemas 
 *       y lenguajes de programación.
 * 
 * ¿Qué es un mecanismo de programación?
 *       Un mecanismo de programación es una característica o 
 *       técnica específica proporcionada por un lenguaje de programación 
 *       para lograr una funcionalidad particular. 
 *       Los mecanismos de programación son concretos y específicos 
 *       del lenguaje.
 * 
 * La idea es muy sencilla. Creamos una función que devolverá un 
 * nuevo objeto del tipo que definimos cada vez que se la llame. 
 * Podemos pasar argumentos a una función que se utilizará para iniciar 
 * el nuevo objeto.
 * 
 * Digamos que necesitamos crear varios puntos en una superficie donde 
 * cada punto es un objeto. Los objetos tendrán las mismas propiedades 
 * y solo se diferenciarán en sus valores. Veamos el primer ejemplo:
 * 
 * 
 */

let createPoint  = function(x, y) {
    let obj = {};

    obj.x = x;
    obj.y = y;

    return obj;
};

let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

/** La createPoint función es nuestra fábrica . 
 *  Dentro de la fábrica , creamos un objeto vacío, luego le agregamos 
 * las propiedades x  y y y lo inicializamos con los valores dados como 
 * argumentos de la función. 
 * La función devuelve el objeto creado e iniciado con un return. 
 * 
 * Una función preparada de esta manera se utiliza para crear los dos 
 * objetos point1y point2. */

/**Mejoremos un poco la apariencia de nuestra función, 
 * sin cambiar su funcionamiento.*/

let createPoint1  = function(x, y) {
    return {
        x:x,
        y:y
    }
};

let point1_1 = createPoint1(3,1);
let point1_2 = createPoint1(4,2);
console.log(point1_1.x); // ->  1
console.log(point1_2.x); // -> 2

/** Podemos ir un paso más allá. JavaScript hace que nuestro
 *  código sea aún más sencillo.
 *
 *  Si tenemos variables definidas, en este caso los argumentos x y y 
 *  pasados ​​a la función, podemos insertarlos en el objeto sin separarlos 
 *  en clave y valor.
 *
 * Esta propiedad tendrá tanto un nombre de variable como su valor. */

let createPoint2  = function(x, y) {
    return {
        x,
        y
    }
};
let point2_1 = createPoint1(5,1);
let point2_2 = createPoint1(6,2);
console.log(point2_1.x); // ->  1
console.log(point2_2.x); // -> 2

/** Lo interesante es que podemos presentar la misma función en una 
 *  forma aún más corta utilizando la notación de flecha . */
let createPoint3  = (x, y) => ({x, y});

let point3_1 = createPoint1(7,1);
let point3_2 = createPoint1(8,2);
console.log(point3_1.x); // ->  1
console.log(point3_2.x); // -> 2


/** Continuación: Otras formas de crear objetos
 * 
 * Pero volvamos a la notación normal. 
 * Declararemos las variables locales _color e _info en la función. 
 * Además, agregaremos una nueva propiedad a nuestro objeto: 
 * el getColormétodo. Su única tarea será devolver el valor de nuestra nueva variable local.

Intentemos escribir algo de información en la consola.
 */

let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    return {
        x,
        y,
        getColor() {return _color}
    }
    };

    let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
    let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
    
    console.log(coloredPoint1.getColor());	// -> red
    console.log(coloredPoint2.getColor());	// -> green
    console.log(coloredPoint1._color);   // -> undefined !!!


/** Vamos a intentar explicar qué sucedió realmente después de ejecutar 
 * nuestro programa. 
 * 
 * En JavaScript, cada vez que se llama a una función, 
 * se crea un nuevo entorno para ella, que contiene, entre otras cosas,
 * sus variables locales. En nuestro ejemplo, dos veces
 * (porque llamamos a nuestra función muchas veces) 
 * se crea un nuevo entorno, junto con las variables _colory _info.
 * 
 * La variable _infosolo se utiliza dentro de la función mientras está 
 * en ejecución. Mostramos su contenido en la consola y no volvemos a ella.
 * Después de salir de la función, ya no será necesaria, 
 * por lo que no tendremos acceso a ella 
 * (podemos suponer que se ha eliminado).
 * 
 * En el caso de la variable _color, las cosas son distintas . 
 * Nos referimos a ella en el método getColor de nuestro objeto recién 
 * creado. 
 * Y como el objeto es devuelto por una función
 *  (después de todo, es una fábrica),
 *  también existirá después de que la función haya terminado de funcionar.
 *  Y con él, el método getColor existirá , que podemos ejecutar. 
 * ¿Cómo obtendrá el método el valor de la variable local _color 
 * de una función que ya ha terminado? JavaScript está preparado para 
 * este escenario. Reconoce la situación y, junto con nuestro nuevo objeto,
 * almacena el entorno de llamada de la función en la que se creó el objeto.
 *  Por lo tanto, en términos humanos, las variables locales de la función,
 *  que son utilizadas por los métodos del objeto devuelto, no se eliminan.
 *  Y lo que es más importante, cada llamada a una función tiene su propio
 *  entorno independiente, al igual que los objetos creados por la fábrica
 *  son independientes. Este mecanismo se llama cierre.
 * 
 * Ya hemos visto cómo crear propiedades privadas. 
 * En programación orientada a objetos, se trata de propiedades a las 
 * que solo tienen acceso los métodos de nuestro objeto.
 *  Este es el caso de nuestro ejemplo.
 *  La variable local _color no es accesible desde el exterior, 
 * sino solo con el getColormétodo. 
 * Por tanto, podemos tratarla como una propiedad privada.
 * */

/**  EL CONSTRUCTOR new         
 * 
 * Como hemos mencionado, la fábrica en JavaScript no es realmente un 
 * mecanismo del lenguaje en sí, sino un patrón de programación. 
 * Sin embargo, a nivel de lenguaje se proporciona una técnica similar, 
 * utilizando las funciones constructoras (o simplemente el constructor ).

 * Un constructor , al igual que una fábrica , es una función que crea y 
   devuelve un objeto. Sin embargo, se diferencia de la fábrica en varios 
   aspectos. En primer lugar, requiere el uso de la palabra clave new 
   al crear un nuevo objeto. Además, realiza de forma implícita algunas 
   acciones que hemos realizado en la fábrica de forma explícita 
   (por ejemplo, crear un objeto vacío).

   Ahora, transformemos nuestro ejemplo de fábrica en un código que 
   utilice la función constructora . 
   Los cambios son pequeños y probablemente puedas encontrarlos 
   fácilmente comparando los dos programas.
 */

   let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
    };

    let coloredPoint3 = new ColoredPoint(1, 1, "red");
    let coloredPoint4 = new ColoredPoint(2, 2, "green"); 
    console.log(coloredPoint3.getColor());	// -> red
    console.log(coloredPoint4.getColor());	// -> green
    console.log(coloredPoint3._color);   // -> undefined !!! 

    /**Por lo general, los nombres de los constructores comienzan con 
     * letras mayúsculas, de ahí el nombre de la ColoredPointfunción. 
     * El primer cambio que se nota es la falta de la palabra return. 
     * En el constructor , esto no es necesario, después de ejecutarlo 
     * con new, devolverá automáticamente un objeto creado implícitamente.
     * Tenemos acceso a este objeto creado implícitamente en el constructor
     *  usando la palabra clave this. Con this, definimos e iniciamos las
     * propiedades del nuevo objeto. Debido a que el constructor es una 
     * función, también podemos usar el cierre aquí. Esta parte del código
     * prácticamente no se diferencia de la fábrica. */

    //Hagamos un pequeño experimento más:

    console.log(coloredPoint3.constructor.name);//CONSOLA: ColoredPoint

    /** El nombre de nuestro constructor aparecerá en la consola: 
     *                                                   "ColoredPoint". 
     *  Todo coincide... Pero espera, después de todo, no definimos la
     *  propiedad del constructor en nuestro objeto en ningún lado.

        ¿Cómo llegó hasta ahí? Veamos el tipo de propiedad 
        (o, más precisamente, el tipo de valor asignado a la propiedad). */
        
        console.log(typeof coloredPoint3.constructor);//CONSOLA: function

    //Resulta que es una función.

    //Intentemos lo mismo con un objeto vacío.
    let a = {};
    console.log(typeof a.constructor);

    /**
     * Es hora de complicar un poco nuestra idea de los objetos. Con {}nuestro nuevo objeto no creamos realmente un objeto vacío.

        Para crearlo, utilizamos el Objectconstructor implícitamente 
        genérico, sobre el que se construyen la mayoría de los objetos en 
        JavaScript.

        El Objectconstructor contiene algunas propiedades y métodos 
        genéricos que pueden ser útiles en todos los objetos 
        (incluso en la constructorpropiedad). 
        ¿Qué significa exactamente crear un objeto a partir de otro objeto?
        Lo explicaremos con más detalle en la parte del curso dedicada a 
        los PROTOTIPOS .

        Por el momento, basta con saber que la mayoría de los objetos que 
        creamos heredan propiedades del objeto constructor genérico Object .

        Tenga en cuenta que las propiedades heredadas no se enumeran con 
        el "for ... in"bucle, ni Object.keys tampoco 
        Object.getOwnPropertyNames. Están disponibles, podemos usarlas, 
        pero se tratan de forma ligeramente diferente a las propiedades
        propias del objeto.

        El nombre del getOwnPropertyNamesmétodo no aparece por Casualidad.
     */
    
    
    /** ********* new Object() *************
     * Dado que Object es el constructor de un objeto genérico, 
     * ¿podemos usarlo para crear un nuevo objeto?

        ¡¡¡Por supuesto que podemos!!!.

     * De esta manera crearemos un objeto vacío 
       (sin nuestras propiedades, pero con propiedades soportadas por 
       Object).
     */

       let emptyObject = new Object();
       console.log(emptyObject.constructor.name); 

    //El efecto de utilizar nuevo Object será el mismo que {}.
    let anotherEmptyObject = {};
    console.log(anotherEmptyObject.constructor.name);

    //En ambos casos hay una propiedad constructor heredada.
    //Esto significa que los objetos contienen lo que se 
    //ha agregado desde el constructor Object.

/**  ******  Object.create ********
 * 
 * Otra técnica interesante para crear un objeto es mediante el 
 * método Object.create:
        Permite crear un nuevo objeto a partir de un objeto existente 
        (que se utilizará como prototipo de nuestro nuevo objeto). 
        El objeto base se proporciona como argumento para llamar al método.

        Como aún no hemos trabajado con prototipos, veremos el método 
        para crear un objeto sin un prototipo 
        (lo daremos nullcomo argumento).
 */
        let reallyEmptyObject = Object.create(null);
        console.log(typeof reallyEmptyObject.constructor);

        /** Tenga en cuenta que esta vez aparece undefined en la consola.
         * Esto significa que no hay ninguna propiedad llamada constructor
           en reallyEmptyObject.

           Esta vez crearemos un objeto realmente vacío. 
           Sin embargo, tómelo solo como un ejercicio.

           A menos que esté 100% seguro de por qué necesita un objeto que 
           no esté basado en el constructor de objeto genérico, 
           créelo de la manera normal:
                   (fábrica, constructor, literales de objeto, clases)
         */

    /*********** Class *****************
     * Hay otro método muy importante para crear objetos.
       Es a través del uso de classes .

      Esta es la forma básica de gestionar objetos en la mayoría de 
      los lenguajes de programación.

      En el caso de JavaScript, se agregó en una de las siguientes 
      ediciones de lenguaje (ECMA6).

      Sin embargo, es un tema tan extenso que dedicaremos todo la 
      próxima sección de nuestro curso.
    */
