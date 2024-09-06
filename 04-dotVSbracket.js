/**                DOT NOTATION vs. BRACKET NOTATION    
 * 
 * Hemos utilizado la notación de puntos como la forma básica de hacer 
 * referencia a las propieddes y métodos de un objeto.
 * 
 * Existe otra manera de hacerlo, se denomina la notación de corchetes.
 * 
 * Recuerde: las claves son strings
 * (este ejemplo no se ejecutará, a menos que copies el contact3 object)
*/
//contact3.tel === contact["tel"];
//contact3.email.work === contact["email"]["work"]

/**MULTI-WORD KEYS 
*/

let contact = {
	"first name": "Ronald"
};

console.log(contact["first name"]);
contact["first name"] = "Tim";
console.log(contact["first name"]);
//contact.first name = "Tim";//SintaxError: Unexpected identifier
//contact."first name" = "Tim";//SintaxError: Unexpected string

/** CLAVES CALCULADAS (COMPUTED KEYS) 
 * 
 * Sin embargo, existe una situación en donde
 * debemos utilizar  la notación entre corchetes, se utiliza con más frecuencia 
 * cuando se opera con claves calculadas.
 * 
 * Puede suceder que la clave de propiedad a la que queremos hacer 
 * referencia se calcule durante el funcionamiento del programa, 
 * sobre la marcha.
 * 
 * Nuevamente, podemos utilizar la notación de corchetes para resolver este
 * problema.
 * 
*/

let contact2 = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact2[key]}`);
}