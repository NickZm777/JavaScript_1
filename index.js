/* eslint-disable no-console */


// заполнить и вывести массив 20 числами которые делятся на 3, или на 5, или на 15 
const a = [];

for (let i = 0; i < 80; i += 1)
    if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
        a.push(i);
    };

const b = a.slice(0, 20);

console.log(b);


// произведение всех элементов находящихся в каждой третьей позиции
const c = b[2] * b[5] * b[8] * b[11] * b[14] * b[17];

console.log(c);


// среднее арифметическое всех чисел
let sum = 0;

for (i = 0; i < b.length; i += 1) {
    sum += b[i];
}

const av = sum / b.length;

console.log(av);


// вывод наибольшего и наименьшего числа 
b.sort(function (a, b) {
    return b - a
});

console.log(b[0], b[19]);