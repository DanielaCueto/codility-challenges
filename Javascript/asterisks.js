"use strict";
//2.-TREE OF ASTERISKS CENTERED
/* function asterisks(n) {
    let result = ''
    for (let i = 1; i <= n * 2; i++) {
        //condición para quitar los números pares
        if (i % 2 === 0) {
            continue
        }
        const numStars = i
        //var que apunta al número * 2(por los pares quitados anteriormente)
        const spaceNeeded = (n * 2 - i - 1) / 2
        for (let space = 0; space < spaceNeeded; space++) {
            result += ` `
        }
        for (let j = 0; j < i; j++) {
            result += '*'
        }
        result += `\n`
    }
    return result
}
console.log(asterisks(10)) */
//console.log(asterisks(10))

//Piramide invertida:

//3.- PIRAMIDE INVERTIDA
/*function triangleUpsideDown(num) {
    let result = ''

    //variable que empieza undefined porque no sé el número que la función va a recibir.
    let maxNumStars = undefined
    for (let index = num; index > 0; index--) {
        if (index % 2 === 0) {
            continue
        }
        //condición que dice que si la variable continúa indefinida, la variable apunte al index (index apunta al argumento. )
        if (maxNumStars === undefined) {
            maxNumStars = index
        }

        let numSpaces = (maxNumStars - index) / 2

        console.log(numSpaces)
        result += repeat(' ', numSpaces)
        result += repeat('*', index)
        result += '\n'
    }

    return result
}

function repeat(character, num) {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += character
    }
    return result
}
console.log(triangleUpsideDown(20)) */
