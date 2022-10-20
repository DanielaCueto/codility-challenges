"use strict";
/* let elNumero = Number(prompt("Escribe un numero")); */

//su el valor introducido en el prompt es una letra, no entra a la condición por lo tanto no muestra el texto 'tu numero es la raiz cuadrada de..'
/* if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
} else {
  console.log("Tienes que ingresar un número válido");
} */

/* let numero = Number(prompt("Ingresa un número"));

if (numero < 10) {
  console.log("numero pequeño");
} else if (numero < 100) {
  console.log("numero Mediano");
} else {
  console.log("numero grande");
}
 */

/* let numero = 0;
while (numero < 12) {
  numero += 2;
  console.log(numero);
} */

/* let resultado = 1; //variable que realiza seguimiento de nuestro resultado
let contador = 0; //variable que cuenta cuantas veces hemos multiplicado este resultado por 2
while (contador < 10) {
  //console.log(resultado);
  resultado = resultado * 2;
  console.log(resultado, "contador es: " + contador);
  contador++;
}
console.log(resultado); */

/* for (let i = 0; i <= 12; i = i + 2) {
  console.log(i);
} */

/* let result = 1;
for (let contador = 0; contador < 10; contador++) {
  result *= 2;
  console.log(result);
}
 */

//Ciclo de un triángulo
/* 
function triangle(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      result += "#";
    }
    result += "\n";
  }
  return result;
}
console.log(triangle(5));
 */
/* 
function fizzFuzz(num) {
  let chtr = "";
  if (num % 3 === 0) {
    chtr = "Fizz";
    console.log(chtr);
  }
  if (num % 5 === 0) {
    chtr = "Fuzz";
    console.log(chtr);
  }
  if (num % 3 === 0 && num % 5 === 0) {
    chtr = "FizzFuzz";
    console.log("FizzFuzz");
  } else {
    console.log(`${num} no es divisible por ninguno de los dos`);
  }

  return chtr;
}

console.log(fizzFuzz(30));
 */

//Tablero de ajedrez:

const board = document.querySelector(".chessBoard");

console.log(board);
function chessBoard(num) {
  let everySquare = "";
  for (let i = 0; i < num; i++) {
    //console.log(i);
    for (let j = 0; j < num; j++) {
      if (i % 2 === j % 2) {
        everySquare += "#";
      } else {
        everySquare += " ";
      }
    }

    everySquare += "\n";
  }
  return everySquare;
}

console.log(chessBoard(30));
