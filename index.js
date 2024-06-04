'use strict';
//  (1)   Sin parametros, sin valor de retorno
function darSaludo() {
    alert('Hola');
}
//llamamos a la función
darSaludo();




//  (2)   Con parametros, sin valores de retorno 
function saludar(nombre) {
    alert("Hola, " + nombre);
}
//llamamos a la función
let nombre = "Fernando";
saludar(nombre);




//  (3)   Sin parametros, con valor de retorno
function obtenerNumero() {
    return 35;
}
//llamamos a la función
let numero = obtenerNumero();
alert("El numero obtenido es: " + numero);




//  (4)  Con parametros, con valor de retorno
function sumar(a, b) {
    return a + b;
}
//llamamos a la función
let resultado = sumar(4, 3);
alert("El resultado de la suma es: " + resultado);