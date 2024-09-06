/**               Methods
 * 
 * TEMAS
 *      *this
 *      *this dentro de nested objects
 *      *Getters and setters
 * 
 * 
 * Anteriormente hemos descubierto que las propiedades 
 * de un objeto pueden ser de cualquier tipo.
   Luego apareció el nombre método 
   (es decir, una propiedad) que es una función. 
   En la mayoría de los casos, el uso razonable de los objetos 
   comienza cuando los dotamos de métodos. 
   Vamos a crear un objeto circular en el que colocaremos el método getType.
 */

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
       },
    getType: function() {
        return "circle";
       }
  };
  console.log(circle.getType());//Llamada al método, dot notation

/**
 * Existe una forma simplificada de declarar el método, 
 * que puede resultar un poco más legible. 
 * Compare ambos ejemplos y encuentre una diferencia en la forma en que 
 * se define el método. El efecto de ambas declaraciones es idéntico.
 */

let circle1 = {
    radius: 100,
     center: {
        x: 0,
            y:0
        },
     getType () {
        return "circle1";
        }
    };

console.log(circle1.getType());//Llamada al método, dotnotation
console.log(circle1["getType"]() );

/**   this
 * Los métodos tienen mucho sentido cuando utilizan campos objetos.
 * 
 * La mayoría de las veces se utilizan para influir su estado
 * (es decir, modificar sus propiedades) o para recuperar 
 * información sobre ellos.
 * 
 * Sin embargo, para poder hacerlo, debemos tener acceso a los campos
 * del objeto desde dentro del método. ¿Cómo hacer esto?
 * 
 * La forma más fácil sería referirse al objeto por su nombre, es decir,
 * utilizar la variable en la que fue colocado.
 * 
 * Modifiquemos el método getType del ejemplo anterior. Probaremos si el
 * objeto tiene un campo  radius y si hay un número almacenado en él.
 * 
 * Según el resultado de la prueba, devolveremos " circle" o " unknown". 
 * Tenga en cuenta que utilizaremos el operador condicional en lugar de 
 * la construcción if. 
 */

let circle2 = {
    radius2: 100,
    center2: {
        x: 0,
        y:0
    },
    getType () {
            return (typeof circle2.radius2 === "number") ? 
    "circle2" : "unknown2" ;
    }
    };
    
    console.log(circle2.getType());

/** El ejemplo funciona. Pero este método tiene un gran defecto, 
 * así que ¡nunca, nunca, nunca lo uses! El problema se hará evidente
 * cuando hagamos una copia de nuestro circle2 objetc. */


//let figure = Object.assign({},circle2);
let figure = {...circle2};
delete circle2.radius2;
console.log(figure);//Observa que radius2 existe en figure.
console.log(figure.radius2);//radius2, no existe en circle2
console.log(figure.getType()); // "unknown"!, al parecer también lo borró
                               // de el figure object

/**El figure objeto es una copia del objeto circle2.
 * Eliminar el radius campo en el circle2 objetc no afecta al campo con 
 * el mismo nombre en el nuevo figure object. 
 * Por lo tanto, esperaríamos figure.getTypedevolver " circle", 
 * pero en su lugar obtenemos " unknown". */

/** te has dado cuenta de lo que sucedió en realidad? 
 * Al llamar al figure.getType método, instintivamente esperamos que 
 * verifique el tipo del campo de radio en este mismo objeto. 
 * 
 * Sin embargo, en el código del método, indicamos claramente que se debe 
 * verificar el tipo de campo de radio del circle objeto, línea 79.
 * 
 * El método, que parece bastante simple y lógico, resulta ser completamente
 * inútil. ¿Cuál es entonces la solución? 
 * Una nueva palabra clave viene al rescate: this.
 * 
 * Para dar una explicación simplificada, podemos decir que éste siempre 
 * contendrá una referencia al objeto en el que nos encontramos. 
 * Lo usaremos dentro de los métodos para hacer referencia a la propiedad 
 * del objeto en el que se encuentra el método.
 * 
 * 
 * */

let circle3 = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
            return typeof this.radius === "number" ? "circle3" : "unknown3" ;
    }
    };
    
    console.log(circle3.getType());
    //let figure3 = {...circle3};
    let figure3 = Object.assign({},circle3);
    delete circle3.radius;
    console.log(figure3.radius);
    console.log(figure3.getType()); // "circle"

    /**La palabra clave this no sólo se aplica a los objetos.

Analizaremos este tema con más detalle  en construcciones de funciones más
 avanzadas. Sin embargo, hay una cuestión relacionada con esto y con las 
 funciones que debemos abordar ahora. La construcción de la función flecha,
 que permite acortar la definición de una función. */

 let add = function (a,b) {
    return a + b;
}

//Podemos escribirla de forma más compacta
let add1 = (a,b) => a + b;

/** Las funciones flecha se diferencian de las funciones ordinarias 
 * no solo en la forma. 
 * Contienen dentro de sí mismas un alcance léxico (lexical scoping) . 
 * Sin entrar en detalles, el método que definiríamos en 
 * forma de flecha no tendrá acceso a las propiedades del 
 * objeto que utiliza this. */

//**No debemos utilizar funciones de flecha para declarar métodos de objeto.*/


/**            this dentro de objetos anidados     **********  
 * 
 * La propiedad de un objeto puede ser un objeto con su propia propiedad. 
 * Anteriormente lo llamamos anidamiento de propiedades .
 * 
 * Coloquemos el método en dicho objeto anidado y verifiquemos a qué se
 * refiere.
 */

let circle4 = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
    }
    
    circle4.center.show();

//Sencillo y lógico, Pero ¿qué hacer si desde nuestro método show queremos 
//tener acceso a las propiedades del objeto padre, por ejemplo, al campo radius?
    // No existe tal posibilidad, lo cual es bastante razonable desde el punto
    // de vista del concepto de programación orientada a objetos.

// Para el método, todo su mundo debe ser el objeto en el que se definió. 
// Por supuesto, puede suceder que el método necesite algunos datos de un 
// nivel superior, pero entonces podemos pasarlos como argumentos de llamada.


//Hay otra justificación simple para esta limitación: el hecho de que 
//utilizamos referencias a objetos.
//Agreguemos el siguiente fragmento de código al ejemplo anterior.
let test = {
    point: circle4.center
    }
    
console.log(test.point);//Ejecutarlo en pythontutor

// En el test.point campo, hay una referencia al mismo objeto que está en 
// circle4.center. 
// Si quisiéramos encontrar el objeto padre a partir de este objeto, 
// aparecerá una ambigüedad: el objeto padre sería tanto test y circle.

// Lógicamente esto no es factible.


/*************************************************************************
 *                    Getters  & Setters
 *                 (Captadores y Definidores)
 * 
 * Dos tipos específicos de métodos son los setters y los getters ,          * 
 * es decir, funciones cuya tarea es cambiar o comprobar las propiedades de  *
 * un objeto.                                                                *
 *     De hecho, estas funciones no tienen por qué establecer propiedades 
 * ni descargarlas, pero en teoría ese es su propósito.
 * 
 * 
 * Tienen varias características específicas:

            + Los declaramos utilizando las palabras clave set y get;
            + El método setter debe tomar exactamente un argumento;
            + El método getter no puede aceptar ningún argumento;
*********** + Estos métodos se ven como propiedades ordinarias *******
              con el nombre del método;
            + Los métodos setter y getter no se llaman funciones, 
              se utilizan para asignar un valor a una propiedad (setter) 
              o para tomar un valor de una propiedad (getter)
            + Puede haber un par de setter y getter con el mismo nombre,
              y se tratará como una propiedad con capacidades de lectura 
              y escritura.

    Desde el punto de vista del uso del objeto, el setter se comportará 
    como una propiedad normal a la que le asignamos un valor. 
    Sin embargo, en realidad, se llamará al método al que se le pasa el
    valor como argumento. Y lo que hagamos con este valor dentro de 
    un método depende completamente de nuestra imaginación.

    Comencemos con un ejemplo sencillo con un método getter. 
    Devolverá el valor _tel  de la propiedad.
 */
let contact = {
  	_tel: "207-662-5412",// _ antes del identificador indica que es una
                         // propiedad privada.  La idea es que otro código
                         // (fuera del objeto) no acced directamente a _tel
	get tel() {return this._tel;}
};
console.log(contact.tel); //CONSOLE: 207-662-5412 
contact.tel = "100-100-1000";//No permite crearla, ya hay un get tel()
console.log(contact.tel);//CONSOLE: 207-662-5412 
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);
contact.name = "Agrega tu nombre";
console.log(contact.name);
//console.log(_tel)//CONSOLA: ReferenceError

// En nuestro objeto, no definimos un set tel, por lo que un intento de 
// escribir en dicha propiedad no tendrá éxito.

// Es más, como ya existe un getter con este nombre, 
// JavaScript no nos permitirá crear una nueva propiedad con este nombre.

// A modo de comparación, vemos que un intento de asignar un valor a un
// campo inexistente email lo creará y guardará el valor.

//Agreguemos un método setter al ejemplo. Pero utilizaremos contact2

//Usando el objeto  contact2, 
//ahora podremos leer desde un campo tel falso y escribir en él.

let contact2 = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}

};
console.log(contact2.tel);
contact2.tel = "100-100-1000";
console.log(contact2.tel);

// Los métodos setter y getter pueden realizar acciones mucho más complejas 
// que las operaciones sobre una sola propiedad. 

// A menudo se utilizan para crear campos falsos que, por ejemplo,
// se agregan a partir de los valores de varios campos reales, 
// se modifican sobre la marcha, se validan, etc.


// Getters y Setters

// Getters (get) son funciones que se utilizan para acceder a las propiedades
//              de un objeto de manera controlada. 
//              En este caso, el getter tel retorna el valor de _tel.

// Setters (set) son funciones que permiten modificar las propiedades de un objeto
//              de manera controlada. En el código, no se define un setter 
//              para tel, por lo que no es posible cambiar el valor de _tel 
//              usando contact.tel = "100-100-1000".

// Analogía en la Vida Real

// Piensa en un getter como un mostrador en una tienda. 
// Cuando quieres ver un producto (por ejemplo, tu número de teléfono), 
// simplemente pides al mostrador que te lo muestre. 
// El mostrador no te da acceso directo al inventario; 
// en su lugar, te muestra el producto.

// Un setter sería como una ventana en la tienda donde puedes devolver o cambiar
// un producto. 
// Si la tienda decide que solo se pueden hacer cambios bajo ciertas 
// condiciones (por ejemplo, si tienes el recibo), 
// un setter actuaría como el guardián de esas condiciones.

// ¿Por qué Deberías Usarlos?
// Encapsulación y control: Puedes controlar cómo se acceden y modifican las
//                          propiedades internas de un objeto, 
//                         permitiendo validaciones o restricciones.

// Abstracción: Permiten ocultar la implementación interna de un objeto y 
//              solo exponer la interfaz necesaria, 
//              haciendo tu código más modular y mantenible.

// Seguridad: Al evitar acceso directo a propiedades internas,
//            puedes evitar errores accidentales o comportamientos inesperados.

//Analicemos
let contact3 = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}//observa como la encapsula
                                           //la protege 
};

console.log(contact3.fullName);
contact3.age = -20;
console.log(contact3.age);






