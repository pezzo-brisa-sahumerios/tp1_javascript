//Nombre y Apellido: Brisa Pezzo
//Curso: 6°C
//Grupo 606
//Taller de Programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

// Trabajo Practico N°2

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
if(x>y){
  return x;
}
else{
  return y;
}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if(idioma==="aleman"){
  return "Guten Tag!";
}
else if(idioma==="mandarin"){
  return "Ni Hao!";
}
else if(idioma==="ingles"){
  return "Hello!";
}
else{
  return "Hola!";
}
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
if (numero===10 || numero===5){
  return true;
}
else{
  return false;
}

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
if(numero<50 && numero>20){
return true;
}
else{
  return false;
}
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
return Math.floor(numero)===numero;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if(numero%3===0 && numero%5===0){
  return "fizzBuzz";
}
else if (numero % 3 === 0) {
return "fizz";
} else if (numero % 5 === 0) {
return "buzz";
} else {
return numero;
  }
}



function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    //inicio/condicion/aumento
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
  //"i" es el numero que se va probando
  //Math.sqrt es la raiz cuadrada 
  //los divisores se van repitiendo de par en par, entonces despues del 6 no hace falta probar
  //i++ incrementa
  //el ciclo seguiria mientras i sea menor o igual a 5
  //se usa la raiz porque si un numero tiene divisores aparece antes o en la raiz cuadrada
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
