"use strict";

console.log("estoy");

const arr = [-1, 3, 6, 7, 9];
const times = 4;
//Escribir una función que dado un array de enteros y un k entero, retorne el array rotado k veces.
/* function cyclicRotation(arr, kTimes) {
  for (let k = 0; k < kTimes; k++) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      //console.log(i, arr[i + 1]);
      let newValue = arr[i];
      let last = i === arr.length - 1;
      if (!last) {
        newarr[i + 1] = newValue;
      } else {
        newarr[0] = newValue;
      }
    }
    arr = newarr;
  }

  return arr;
} */

function cyclicRotation(arr, times) {
  for (let i = 0; i < times; i++) {
    arr = rotate(arr);
  }
  return arr;
}

function rotate(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]; //solo muevo el valor de ese indice, no el indice en si.
    let last = i === arr.length - 1;
    if (!last) {
      newarr[i + 1] = value;
    } else {
      newarr[0] = value;
    }
  }
  return newarr;
}

console.log(cyclicRotation(arr, times));

/* const arr = [-1, 2, 3, 5, 6];
const kTimes = 2; */

/* function rotate(arr, kTimes) {
  //If que comprueba si kTimes es divisible por la longitud del array (que sería 4 empezando por 0). Si kTimes es divisible por la longitud de arr --> significa que no necesitamos cambiar nada.
  if (kTimes % arr.length === 0) {
    return arr;

    //Si no es divisible, entra en este else le asigno a ktimes el modulo.
  } else {
    kTimes = kTimes % arr.length;
    console.log(typeof kTimes);
  }
  let newArr = []; //array que vamos a retornar
  let aIndex = 0; //va a apuntar a los elementos del arr.

  return newArr;
}

console.log(rotate([1, 2, 3, 4], 3));
 */

/* function rotate2(arr, nTimes) {
  for (let i = 0; i < nTimes; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}

console.log(rotate2([3, 4, 5, 9, 10, -1], 100)); */
