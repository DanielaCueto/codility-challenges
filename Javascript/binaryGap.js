"use strict";
//4.-THE LONGEST BINARY  GAP
//BinaryGap. Find longest sequence of zeros in binary representation of an integer.
//Write a function that:
// 1.-Given a positive integer N returns the length of its longest binary gap.
// 2.- The function should return 0 if N doesn't contain a binary gap.

/* function solution(n) {
    let maxGap = 0
    let currentGap = 0
    let seenOne = false

    while (n > 0) {
        let digit = n % 2
        n = Math.floor(n / 2)

        console.log(digit) //genera el residuo
        //console.log(n) //genera el cociente

        //solo cuenta los 0 si ha visto ya el primer 1
        if (digit === 0 && seenOne) {
            currentGap++

            //console.log(currentGap)
        } else if (digit != 0) {
            seenOne = true
            if (currentGap > maxGap) {
                maxGap = currentGap
            }
            currentGap = 0

            //console.log(maxGap)
        }
    }
    return maxGap
} */

//console.log(solution(1041))
