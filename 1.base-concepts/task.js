"use strict";



function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2)- 4 * a * c; 

  if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2 * a), (-b - Math.sqrt(d) )/(2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (Number.isNaN(contribution)) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (Number.isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 

  // тело кредита
  let S = amount - contribution;
  // текущая дата
  const dateToday = new Date();
  // даты окончания срока
  const termDates = new Date(date);
  // срок кредита
  const loanTerm = (termDates.getFullYear() - dateToday.getFullYear()) * 12;
  loanTerm += termDates.getMonth() - dateToday.getMonth();
  if (termDates.getDate() > dateToday.getDate()) {
    term += 1;
  }

  let P = 1 / 12 * (percent / 100);

  let monthlyPayment = S * (P + (P / (Math.pow(1 + P, loanTerm) - 1)));

  totalAmount = + (monthlyPayment * loanTerm).toFixed(2);

  return totalAmount;
}
