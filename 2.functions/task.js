function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  p = sum / arr.length;
  avg = Number(p.toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let difference = 0;
  for(let i = 0; i < arr.length; i++) {
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
    } else {sumOddElement += arr[i];}
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
  return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    const total = func(...arrOfArr[i]);
    if (total > maxWorkerResult) {
      maxWorkerResult = total;
    }
  }
  return maxWorkerResult;
}
