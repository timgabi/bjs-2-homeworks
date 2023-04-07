"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    let D = b * b - 4 * a * c;
    if (D < 0) {
        arr.push();
    } if(D == 0) {
        let oneRoot = (-b + Math.sqrt(D)) / (2 * a);
        arr.push(oneRoot);
    } else if(D > 0) {
        let twoRoots = [];
        twoRoots.push((-b + Math.sqrt(D)) / (2 * a));
        twoRoots.push((-b - Math.sqrt(D)) / (2 * a));
        arr.push(twoRoots[0], twoRoots[1]);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let monthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalSum = monthPay * countMonths;
  let sumNumber = totalSum.toFixed(2);
      sumNumber = Number(sumNumber);
  return sumNumber;
}