/**                          TIPOS  
 * Podemos asignar valores primitivos a variables, valores complejos como 
 * matrices u objetos y funciones.
 */

let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
x: 10, 
y: 20
}; 
let fn = function(arg) {
    console.log(arg)
}; 

fn(123); //-> 123

/**   
 * Las propiedades de los objetos se pueden tratar exactamente de la misma
 *  manera que las variables: puedes asignarles valores de cualquier tipo.

Creemos un test objeto con propiedades que sean equivalentes a las 
variables del ejemplo anterior.
*/

let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: { //observa que el test object contiene al obje object
    x: 10, 
    y: 20
    }, 
    fn: function(arg) {console.log(arg)} 
    };
    
    test.fn(123);
    

/**                    PROPIEDADES ANIDADAS
 * 
 * Si la propiedad de un objeto que tiene propiedades, entonces estamos
 * tratando con PROPIEDADES ANIDADAS.
 * 
 * El test objeto del ejemplo anterior contiene el objeto, que a su vez
 * tiene los campos x y y.
 * 
 * Hacer referencia a dichos campos mediante la notación de puntos es
 * intuitivo y simplemente agregamos otro punto y una clave 
 * (nombre de la propiedad).
 */
//observa que con la notación punto alcanzamos a las propiedades
// del objeto obj, estamos alcanzando las PROPIEDADES ANIDADAS
console.log(test.obj.x);
console.log(test.obj.y);
test.obj.y = 40;
console.log(test.obj.y); 


/**   UNA FUNCIÓN COMO UN TIPO DE PROPIEDAD: UN MÉTODO 
 * 
 * La propiedad de un objeto, como hemos visto antes, también puede ser una 
 * función.
 * 
 * Una función que es propiedad de un objeto se llamará METODO
 * 
 * Así como las propiedades de los objetos describen sus características, 
 * los métodos pueden tratarse como su comportamiento característico o 
 * formas de cambiar el estado de un objeto.
 * 
*/

//El objeto a continuación describe un punto en la superficie.
let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;      // this indica el objeto en el
                                         // que nos encontramos
    },
    // this.x simplemente indica la x propiedad del objeto en el que se
    //encuentra nuestro método.
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
    }
    console.log("Recien creado",point);

    console.log(point.x);	// -> 0
    point.moveHorizontally(30);
    console.log(point.x);	// -> 30

    console.log(point);

/** El método no tiene por qué afectar el estado del objeto, 
pero ésta es esencialmente una de las principales razones de su uso.
*/


/**  AGREGAR UNA NUEVA PROPIEDAD.
 * 
 * Los objetos pueden cambiar dinámicamente durante su vida
 * 
 * Los cambios afectan no sólo a los valores almacenados en campos 
 * específicos, sino también a todas las propiedades que podemos agregar
 * o eliminar, y al tipo de datos colocados en ellas que podemos cambiar.
 */

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
console.log("Objeto original", contact);
//agregamos los nuevos campos firstName y lastName al objeto existente
contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald

console.log("Propiedad inexistente", contact.notes); //undefined

/**               MODIFICAR UNA PROPIEDAD 
 * 
 * Podemos asirnar un nuevo valor de cualquier tipo a una propiedad
 * de objeto existente en cualquier momento
*/
let contact3 = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

//Resulta que el contact3 tiene 2 email
contact3.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];
console.log("Primer modificación", contact3);

//ahora sabemos que una dirección es privada y la otra es comercial
contact3.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
    };
    console.log(contact3);
console.log(contact3.email.work);

/**        ELIMINAR UNA PROPIEDAD
 * 
 * Utilizamos la palabra clave delete
 * 
 */
delete contact3.email.work;

console.log(contact3.email.work);
console.log(contact3.email.private); 




