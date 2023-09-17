// Создайте функцию которая возводит переданное число в кубе

// const CubeNumber = (num1, num2) => Math.pow(num1,num2);
// console.log(CubeNumber(2,3));
// console.log(CubeNumber(3,3));

// Пользователь вводит с клавиатуры число, если ввёл текст вывести что значение задано неверно
// Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен"

// let salary = Number(prompt('Введите вашу зарплату'));
// salaryPercentage(salary);

// function salaryPercentage(num1) {
//   let userSalary = 0;
//   if (isNaN(num1)) {
//     alert(`Введите числовое значение!`);
//   } else {
//     userSalary = num1 * 0.87;
//     alert(`Размер заработной платы за вычетом налогов равен ${userSalary}`);
//   }
// }

//  Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let num3 = Number(prompt("Введите третье число"));

findMax(num1, num2, num3);

function findMax(a, b, c) {
  maxNumber = 0;
  if (a > b) {
    maxNumber = a;
    if (maxNumber > c) {
      alert(`Максимальное число ${maxNumber}`);
    } else {
      alert(`Максимальное число ${c}`);
    }
  } else {
    maxNumber = b;
    if (maxNumber > c) {
      alert(`Максимальное число ${maxNumber}`);
    } else {
      alert(`Максимальное число ${c}`);
    }
  }
}

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять
// одну из операций 1. Сложение, 2. Разность, 3.Умножение, 4. Деление

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
};

const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

console.log(add(4, 5));
console.log(sub(9, 3));
console.log(multiply(7, 5));
console.log(division(2, 5));
