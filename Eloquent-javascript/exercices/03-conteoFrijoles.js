"use strict";
console.log("Estoy. Frijoles exercise");

//Escribir una función que tome un string como su único argumento y devuelva un número que indica cuántos caracteres 'F' en mayúsculas haya en el string.

//const str = "esFea";

function contarFs(str, char) {
  const strChar = contarCaracteres(str, char);

  return strChar;
}

const contarCaracteres = function (str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(contarFs("kkkaamm", "k"));
