/* eslint-disable no-console */

/* Task 1 */

const x1 = 5;

const y1 = 5;

const z1 = 2;

const x2 = 7;

const y2 = 9;

const z2 = 4;

const d1 = x2 - x1;

const d2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const d3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

console.log('Задание №1');

console.log('Расстояние между точками на прямой:');

console.log(d1);

console.log('Расстояние между точками на плоскости:');

console.log(d2);

console.log('Расстояние между точками в трехмерном пространстве:');

console.log(d3);


/* Task 2 */

const a = 20;

const b = 25;

const c = 40;

const d = [a, b, c];

// eslint-disable-next-line func-names
d.sort(function (a, b) {
    return b - a
});

console.log('Задание №2 и №3');

console.log('Отрезки с длинами:');

console.log(a, b, c)

/*  if (d[1] ** 2 + d[2] ** 2 === d[0] ** 2) {
    console.log('Удовлетворяют теореме Пифагора')
} else {
    console.log('НЕ удовлетворяют теореме Пифагора')
};  */

/* вариант с if
if (a + b > c && a + c > b && c + b > a) {
    console.log('Могут являтся строронами треугольника')
} else {
    console.log('НЕ могут являтся строронами треугольника')
}; */

const o = (d[1] ** 2 + d[2] ** 2 === d[0] ** 2 ? 'Удовлетворяют теореме Пифагора' : 'НЕ удовлетворяют теореме Пифагора');

const t = (a + b > c && a + c > b && c + b > a ? 'Могут являтся строронами треугольника' : 'НЕ могут являтся строронами треугольника');

console.log(o);

console.log(t);