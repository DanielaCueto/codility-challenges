"use strict";
console.log("Functions");

//Definiendo una función:

//Esta función produce el cuadrado del número dado:
/* const cuadrado = function (x) {
  return x * x;
};

console.log(cuadrado(12)); */

//Funciones pueden o NO recibir parámetros: ej:

//Esta función tiene un efecto secundario.
/* const hacerSonido = function () {
  console.log("Pling!");
};
hacerSonido();
 */
/* const potencia = function (base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

console.log(potencia(2, 10)); */

//Otro ejemplo:
/* let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);

const dividirEnDos = function (n) {
  return n / 2;
};

console.log(dividirEnDos(100)); */

//Alcance anidado: Lote de humus (contiene otras funciones dentro de la propia funcion:)

const hummus = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    /*    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    return cantidadIngrediente; */
  };

  //console.log(ingrediente(1, "lata", "garbanzos"));

  /* console.log(ingrediente(0.25, "taza", "tahini"));
  console.log(ingrediente(0.25, "taza", "jugo de limon"));
  console.log(ingrediente(1, "clavo", "ajo"));
  console.log(ingrediente(2, "cucharada", "aceite de oliva"));
  console.log(ingrediente(0.5, "cucharadita", "comino")); */
};

//console.log(hummus(1));

//Pila de llamadas:

/* function saludar(quien) {
  console.log(`Hola ${quien}`);
}
saludar("Harry");
console.log("Adios"); */

//Parametros por defecto

/* function potencia(base, exponente = 2) {
  let result = 1; //empieza en 1 porque si empezase en 0 el resultado siempre sería 0
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    result *= base;
    console.log(base);
  }
  return result;
}

console.log(potencia(2)); */

//Recurción es una alternativa a los ciclos pero es menos eficiente y dificil de leer.

//Funciones crecientes:
// ej:Queremos escribir un programa que imprima dos números, los número de vacas y pollos en una granja, con las palabras vacas y pollos después de ellos y ceros acolchados antes de ambos números para que siempre tengan 3 dígitos de largo.

function imprimirInventarioGranja(vacas, pollos) {
  /* let stringVaca = String(vacas);
  console.log(typeof stringVaca);
  while (stringVaca.length < 3) {
    stringVaca = "0" + stringVaca;
  }
  console.log(`${stringVaca} Vacas`);

  let stringPollos = String(pollos);
  while (stringPollos.length < 3) {
    stringPollos = "0" + stringPollos;
  }

  console.log(`${stringPollos} Pollos`);
  return stringVaca, stringPollos; */
}

//console.log(imprimirInventarioGranja(7, 11));

//manera más eficiente:

/* function imprimirEtiquetaAcolchadaConCeros(num, name) {
  let strNum = String(num);
  while (strNum.length < 3) {
    strNum = "0" + strNum; //Estoy concatenando.
  }
  console.log(`${strNum} ${name}`);
  return strNum;
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
  imprimirEtiquetaAcolchadaConCeros(vacas, "Vacas");
  imprimirEtiquetaAcolchadaConCeros(pollos, "Pollos");
  imprimirEtiquetaAcolchadaConCeros(cerdos, "Cerdos");
}

imprimirInventarioGranja(7, 11, 3);
 */

//Ejercicio1: Escribe una función min que tome dos artumentos y retorne su mínimo

function min(a, b) {
  //let isMin = 0;
  //Sin usar js methods
  /* if (a < b) {
    isMin = a;
  } else {
    isMin = b;
  }
  return isMin; */

  //Usando methods:
  let isMin = Math.min(a, b);
  return isMin;
}

console.log(min(50, 30));

console.log("-----*-----");
//Ejercicio2: Define una función recursiva esPar que corresponda a esta descripcion
/* const n = 0;
function esPar(n) {
  if (n < 0) {
    return undefined;
  } else {
    if (n === 0) {
      return true;
    }
    if (n === 1) {
      return false;
    }
    return esPar(n - 2);
  }
}

console.log(esPar(-1)); */

/* function isEven(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(75));
 */
