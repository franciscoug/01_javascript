/**                 RECURSIVIDAD  
 * 
 * La recursividad o recursión es la posibilidad que tiene 
 * un cierto tipo de unidad (puede ser una función) o proceso 
 * de contenerse o aplicarse a si mismo indefinidamente.
 * 
 * La recursividad tiene la característica de construirse a 
 * partir de un mismo tipo.
 * 
 * leer, exámen:*****************************************************************
 * https://cards.algoreducation.com/es/content/qiWpUzM1/recursividad-programacion
 * 
 * La recursividad en programación es una técnica que permite a 
 * las funciones autoinvocarse para resolver problemas complejos. 
 * 
 * Se destaca por su enfoque 'divide y vencerás', con casos base 
 * y recursivos que simplifican la solución de algoritmos. 
 * Aunque puede ser menos eficiente en memoria y tiempo, 
 * la recursividad es elegante y útil en problemas como 
 * el cálculo del factorial y la secuencia de Fibonacci.
 * 
 * 
 * 
 * Explicar el factorial: skechtbook
 * caso base, hasta donde llego, evitar llamadas infinitas
 * caso recursivo, reduce progresivamente el problema hacia el caso base 
 * factorial de 6
*/

//Método iterativo
function factorial (n) {
    let result = 1;
    while (n > 1) {//caso base es 1.
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720

//Método recursivo
/**Una recursividad es un mecanismo que permite simplificar la notación formal 
 * de muchas funciones matemáticas y presentarlas de forma elegante.
*/

function factorial(n) {  
    if (n > 1) {
        return n * factorial(n - 1); // Llamada recursiva si n es mayor que 1
    } else {
        return 1; // Caso base: cuando n es 1 o menor, se devuelve 1
    }
}

console.log(factorial(6)); // -> 720


function factorial (n) {  //utilizando el operador ternario
    return n > 1 ? n * factorial(n - 1) : 1; //Cada llamada se resuelve una vez que
                                            // las llamadas recursivas han terminado.
}

console.log(factorial(6)); // -> 720
/**Salida:

Para factorial(6), el proceso se desglosa así:
6 * factorial(5)
5 * factorial(4)
4 * factorial(3)
3 * factorial(2)
2 * factorial(1)
factorial(1) retorna 1.
Multiplicando todos esos valores da como resultado 720. */


function factorialConIf(n) {
    if (n > 1) {
        return n * factorialConIf(n - 1);
    } else {
        return 1;
    }
}

console.log(factorialConIf(6)); // -> 720

//return 06-referencia.js