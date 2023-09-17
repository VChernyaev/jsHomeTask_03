// Создайте функцию которая возводит переданное число в кубе

// const CubeNumber = (num1, num2) => Math.pow(num1,num2);
// console.log(CubeNumber(2,3));
// console.log(CubeNumber(3,3));

// Пользователь вводит с клавиатуры число, если ввёл текст вывести что значение задано неверно
// Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен"

let salary = Number(prompt('Введите вашу зарплату'));
salaryPercentage(salary);

function salaryPercentage(num1) {
  let userSalary = 0;
  if (isNaN(num1)) {
    alert(`Введите числовое значение!`);
  } else {
    userSalary = num1 * 0.87;
    alert(`Размер заработной платы за вычетом налогов равен ${userSalary}`);
  }
}
