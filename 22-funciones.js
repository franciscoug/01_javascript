/**
 * No usaremos funciones
 * El programa calculará y mostrará la temperatura media diaria sobre 
 * la base de los datos proporcionada (24 mediciones de temperatura, 
 * en intervalos de una hora, a partir de la medianoche).
 */
let temperatures;
let sum;
let meanTemp;

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> media: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
sum += temperatures[i];//sum = sum + temperatures[i]
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> media: 18.083333333333332



let temperaturesf;
let sumf;
let meanTempf;

function getMeanTemp() {//declaración de función.
    sumf = 0;
    for (let i = 0; i < temperaturesf.length; i++) {
        sumf += temperatures[i];
    }
    meanTempf = sumf / temperaturesf.length;    
}


temperaturesf = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();//invocación de función
console.log(`mean: ${meanTempf}`); // -> mean: 16.666666666666668

temperaturesf = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();//invocación de función
console.log(`mean: ${meanTempf}`); // -> mean: 18.083333333333332

/**NOTA:
 * Por lo general, las funciones se declaran antes de llamarlas,
 *  principalmente al comienzo del código. Sin embargo, 
 * esta es solo una buena práctica, que aumenta la legibilidad del código, 
 * no un requisito de sintaxis de JavaScript. 
 * Las declaraciones de funciones se mueven automáticamente 
 * a la parte superior del alcance, por lo que podemos usarlas 
 * antes de la declaración, siempre que estén en el alcance.
 * 
 * Entonces el código:

let name = Alice

function showName() {
    console.log(name);
}

showName(); // -> Alice

Funcionará de la misma manera que:

let name = Alice

showName(); // -> Alice


function showName() {
    console.log(name);
}
 */