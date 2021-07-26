function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
  	arr = [];
  } else if (d === 0) {
  	let i = -b / (2 * a);
  	arr = [i];
  } else {
  	let j = (-b + Math.sqrt(d) ) / (2 * a);
  	let k = (-b - Math.sqrt(d) ) / (2 * a);
  	arr = [j, k];
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let percent1 = Number(percent); 
  let contribution1 = Number(contribution);
  let amount1 = Number(amount);

  if (Number.isNaN(percent1) === true || percent.length === 0) {
    return`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(contribution1) === true || contribution.length === 0) {
    return`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (Number.isNaN(amount1) === true || amount.length === 0) {
    return`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let bodyLoan = amount1 - contribution1;
  let dateFrom = new Date();
  let year1 = dateFrom.getFullYear();
  let year2 = date.getFullYear();
  let month1 = dateFrom.getMonth();
  let month2 = date.getMonth();
  let termLoan = (year2 - year1) * 12 + (month2 - month1);
  let monthPersent = percent1 / 1200;
  let payment = bodyLoan * (monthPersent + monthPersent / (((1 + monthPersent) ** termLoan) - 1));

  totalAmount = Number((payment * termLoan).toFixed(2));

  return totalAmount;
}
