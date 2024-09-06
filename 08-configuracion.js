
/*********CONFIGURACIÓN DE PROPIEDADES Y OBJETOS (BANDERA, ETC.) ************
 * 
 * TEMAS:
 *       + CONFIGURACIÓN DE LA PROPIEDAD.
 *       + Configuración de objetos.
 ****************************************************************************/

//CONFIGURACIÓN DE LA PROPIEDAD

/**En uno de los ejemplos anteriores, probamos cómo funciona la enumeración
 * de propiedades de objetos.

Utilizamos el Object.keys método y la construcción for ...in . 
Supusimos que de esta manera listaríamos todas las propiedades del objeto.

Esto suele ser cierto, pero podemos cambiarlo configurando propiedades 
individuales y también el objeto completo. 
La configuración también nos permite cambiar otras características de 
las propiedades del objeto.

Entonces, veamos este tema más de cerca y volvamos al ejemplo anterior:
*/


// Se asignará una matriz  "_age", "firstName", "lastName", "lastName", 
// "fullName", "age"]a la variable de keys, que contiene todas las keys 
//(nombres de propiedades) del contact5 object. 
let contact5 = {
	_age: 36,
   firstName : "David",
   lastName : "Taylor",
	get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
	set age(a) { if( a > 0) this._age = a;}
};

let keys = Object.keys(contact5);
console.log(keys);//CONSOLA:  ['_age', 'firstName', 'lastName', 'fullName', 'age']

//Utilicemos otro método Object.getOwnPropertyName

let desc = Object.getOwnPropertyDescriptor(contact5, "firstName");
console.log(desc);

let desc1 = Object.getOwnPropertyDescriptor(contact5, "_age");
console.log(desc1);

let desc2 = Object.getOwnPropertyDescriptor(contact5, "fullName");
console.log(desc2);

/**Este método nos permite recuperar información sobre la propiedad indicada
 *  del objeto seleccionado.
 * 
    En nuestro ejemplo, comprobamos la firstNamepropiedad del contact5 objeto.
    La desc variable debe estar completa con un objeto que describa los 
    atributos de esta propiedad. 
    {
        value: "David", 
        writable: true, 
        enumerable: true, 
        configurable: true
        }

    Como puede ver, cada propiedad, además del nombre y el valor, tiene 
    atributos como escribible, enumerable y configurable. 
    Como puede suponer, la configuración de las propiedades se establecerá
    manipulando estos atributos.

    Las excepciones son los métodos setter y getter, que no tienen campos 
    escribibles en la configuración, sino que aparecen los campos get y set. 
    
    Como puede ver, cada propiedad, además del nombre y el valor, tiene atributos como escribible, enumerable y configurable. Como puede suponer, la configuración de las propiedades se establecerá manipulando estos atributos.

    Las propiedades de objeto, creadas de la forma en que lo hicimos en todos 
    los ejemplos anteriores, tienen todos sus atributos de configuración 
    establecidos como verdaderos de manera predeterminada 
    (es decir, puede escribir en ellos, son enumerables y reconfigurables).
   */  
  
    //Podemos establecer nuestra propia configuración de propiedades 
    //utilizando el método Object.defineProperty
    // Este método se utiliza para crear una nueva propiedad de objeto, 
    // pero también se puede utilizar para modificar una propiedad existente.

//Veamos otro ejemplo:

let contact6 = {};
Object.defineProperty(contact6, "_age", {
    value: 36,
    writable: true,
    enumerable: false,//configurada como : false
    configurable: true
});

Object.keys(contact6);
console.log(contact6._age);

for (let prop in contact6) { //configuramos enumerable:false
    console.log("for...in",prop);//No lo muestra en cosola
  }
//console.log("for...in",prop);

console.log("Llamada",contact6._age);//No podememos enumerar, pero si llamar

/**Para cambiar la configuración de una propiedad existente, 
 * también utilizamos el Object.definePropertymétodo.

Continuando con el ejemplo anterior, intentemos convertir   el campo _age 
a solo lectura. */

Object.defineProperty(contact6, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});

contact6._age = 100;
console.log(contact6._age);//Undefined

/**Como puedes ver, el cambio en la configuración del atributo writable a
 * falso significa que no podemos modificar el valor de nuestra propiedad _age.

Además de enumerable y escribible, también hay un atributo llamado 
configurable en la configuración. 

Si se establece como tal, false, será imposible reconfigurar la propiedad o 
eliminarla con el delete comand.



Object.keysy el for ... inbucle opera únicamente en propiedades que sean 
enumerables.

Sin embargo, si queremos recuperar todos los campos sin prestar atención 
a su configuración, podemos utilizar el método Object.getOwnPropertyNames.

Funciona de manera similar a Object.key, pero devuelve una matriz de 
todas las claves (nombres de propiedades), independientemente de si son 
enumerables o no.*/

let enumKeys = Object.keys(contact6);
let allKeys = Object.getOwnPropertyNames(contact6);
console.log(enumKeys);
console.log(allKeys);

/*********************      CONFIGURACIÓN DE OBJETOS     *******************
 * 
 * La configuración también se puede cambiar a nivel de todo el objeto 
 * (no sólo de sus propiedades individuales).

   Para ello se utilizan, entre otros, los siguientes métodos:

       Object.preventExtensions(obj)– 
                     después de llamar a este método, 
                     no podremos agregar nuevas propiedades al objeto obj;

        Object.seal(obj)– 
                    no permite agregar, eliminar o reconfigurar 
                    las propiedades del objeto obj;

        Object.freeze(obj)– 
                    similar a Object.seal, pero además hace imposible cambiar
                    el valor de la propiedad.

        También tenemos métodos para comprobar si se ha cambiado la
        configuración del objeto.

        Y así, podemos utilizar estos métodos respectivamente: 
        Object.isExtensible, Object.isSealed(obj)y Object.isFrozen(obj). 
 */

/**  En JavaScript, una propiedad enumerable es una propiedad de 
 * un objeto que puede ser recorrida en un bucle for..in. 
 * 
 * En otras palabras, si una propiedad es enumerable, 
 * significa que está marcada para ser incluida en la lista 
 * de propiedades del objeto que se itera en un bucle for..in 
 * o al utilizar métodos como Object.keys(). 
 * 
 * */