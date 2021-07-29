// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for(i = 0; i < arr.length; i++) {    
    if (arr[i] > max) {
        max = arr[i];
    } 
  }

  for(i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = -Infinity;
  
  for(let i = 0; i < arrOfArr.length; i++) {
    let resultFunc = func(arrOfArr[i]);
    if (resultFunc > max) {
      max = resultFunc;
    }
  }

  return max
}

// Задание 3
function worker2(arr) {
  let maxArg = -Infinity;
  let minArg = Infinity;
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maxArg) {
      maxArg = arr[i];
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < minArg) {
      minArg = arr[i];
    }
  }

  result = maxArg - minArg;

  return result

}
