/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

console.log('**************** Массив из 20 чисел *************************');

const arr20 = [];

let numb = 3;

while (arr20.length < 20) {
  if (numb % 3 === 0 || numb % 5 === 0 || numb % 15 === 0) {
    arr20.push(numb);
  }
  numb += 1;
}
console.log(arr20);


console.log('************* Произведение каждой третьей позиции ***************');

let prod = 1;
for (let i = 2; i < arr20.length; i += 3) {
  prod *= arr20[i];
}
console.log(prod);


console.log('************* Среднее арифметическое массива ***************');

let mid = 0;
for (let i = 0; i < arr20.length; i += 1) {
  mid += arr20[i];
}

const average = mid / arr20.length;

console.log(average);


console.log('************* Максимальное число массива ***************');

let maxNumber = arr20[0];
for (let i = 1; i < arr20.length; i += 1) {
  if (maxNumber < arr20[i]) {
    maxNumber = arr20[i];
  }
}
console.log(maxNumber);


console.log('************* Минимальное число массива ***************');

let minNumber = arr20[0];
for (let i = 1; i < arr20.length; i += 1) {
  if (minNumber > arr20[i]) {
    minNumber = arr20[i];
  }
}
console.log(minNumber);


console.log('************* Таблица умножения ***************');

const matrix = [];

for (let i = 1; i <= 9; i += 1) {
  const row = [];
  for (let j = 1; j <= 9; j += 1) {
    row.push(i * j)
  }
  matrix.push(row);
}
console.log(matrix);


for (let i = 0; i < 9; i += 1) {
  let row = '';
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}


console.log('************* Сумма чисел на главной диагонали ***************');

let num = 9
let sum = 0
for (let i = 1; i <= num; i += 1) {
  let res = (i * i)
  // console.log(res)
  sum += res


}
console.log(sum)
for (let i = num; i >= 0; i -= 1) {
  // console.log(i * i)
}


console.log('************* Среднее геометрическое чисел вспомогательной диагонали ***************');

let len = 9
let lenNew = len
let step = len
let geom = []
for (let i = 1; i <= lenNew; i += 1) {

  geom.push(i * len)

  len -= 1;
}
let geom1 = geom[0];
for (let i = 1; i < geom.length; i += 1) {
  geom1 *= geom[i]

}
console.log(geom1 ** (1 / step))



console.log('************* Сумма элементов каждого четного столбца ***************');

for (let i = 2; i <= 9; i += 2) {
  let sum = 0
  for (let j = 1; j <= 9; j += 1) {

    sum += (i * j)
  }
  console.log(sum)
}


console.log('************* Среднее арифметическое сумм каждой нечетной строки ***************');

for (let i = 1; i <= 9; i += 2) {
  let sum = 0
  for (let j = 1; j <= 9; j += 1) {
    sum += (i * j);
  }
  console.log(sum / 9)
}



console.log('************* Строка с наибольшим количеством чисел в строке более 50 ***************');

let maxLength = 0
for (let i = 1; i <= 9; i += 1) {


  let sum = [];
  for (let j = 1; j <= 9; j += 1) {
    if ((i * j) > 50) {
      sum.push(i * j)
    }
  }

  if (sum.length > maxLength) {
    maxLength = sum.length
  }

}
console.log(maxLength)



console.log('******** Максимальное и минимальное число всей матрицы ********')

let total = [];
for (let i = 0; i < 9; i += 1) {
  let puzzle = 0;
  for (let j = 0; j < 9; j += 1) {
    puzzle = matrix[i][j];
    total.push(puzzle)
  }
}
console.log('вариант 1')

console.log(total[total.length - 1])
console.log(total[0])

console.log('вариант 2')
total.sort(function (a, b) {
  return b - a
})
console.log(total[0])
console.log(total[total.length - 1])

console.log('вариант 3')

console.log(matrix[matrix.length - 1][matrix.length - 1])
console.log(matrix[0][0])


console.log('********** Минимальное и максимальное число стобцов матрицы *******')


let total1 = [];
for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    total1.push(matrix[j][i])

  }

  console.log(total1[0])

  console.log(total1[total1.length - 1])

  total1 = []

}


console.log('******** Максимальное и минимальное число строк матрицы *******')


let total2 = [];
for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    total2.push(matrix[i][j])

  }

  console.log(total2[total2.length - 1])

  console.log(total2[0])

  total2 = []

}

console.log('**** Сумма чисел в верхнем треугольнике относительно главной диагонали ****')

let triangleSum1 = 0;

for (let i = 0; i < 9; i += 1) {
  let sum = 0;
  for (let j = i; j < 9; j += 1) {
    sum += matrix[i][j];
  }
  triangleSum1 += sum;
}
console.log(triangleSum1);


console.log('**** Сумма чисел в нижнем треугольнике относительно вспомогательной диагонали ****')

let triangleSum2 = 0;

for (let i = 0; i < 9; i += 1) {
  let sum = 0;
  for (let j = 8; j >= 8 - i; j -= 1) {
    sum += matrix[i][j];
  }
  triangleSum2 += sum;
}

console.log(triangleSum2);




console.log('-------------------FUNCTION EXAMPLES----------------------')

const x1 = 5;

const y1 = 5;

const z1 = 2;

const x2 = 7;

const y2 = 9;

const z2 = 4;

console.log(`Даны точки с координатами x1=${x1},y1=${y1},z1=${z1},x2=${x2},y2=${y2},z2=${z2}`)

let dist_1 = function (x1, x2) {
  return x2 - x1
}


console.log(`Расстояние между точками x1, x2 на прямой составляет: ${dist_1(x1, x2)}`);

let dist_2 = function (x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) * 2)
}

console.log(`Расстояние между точками x1, y1, x2, y2 на плоскости составляет: ${dist_2(x1, y1, x2, y2)}`)


let dist_3 = function (x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) * 2 + (z2 - z1) ** 2)
}

console.log(`Расстояние между точками x1, y1, z1, x2, y2, z2 в трехмерном пространстве составляет: ${dist_3(x1, y1, z1, x2, y2, z2)}`)



const a1 = 5;

const a2 = 4;

const a3 = 8;


let theorem = function (array) {
  let newArray = array.sort(function (a, b) {
    return b - a
  })
  return newArray[0] ** 2 === newArray[1] ** 2 + newArray[2] ** 2 ? 'удовлетворяют теореме Пифагора' : 'не удовлетворяют теореме Пифагора'
}


function triangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a ? 'могут являтся строронами треугольника' : 'не могут являтся строронами треугольника'
}


console.log(`Отрезки с длинами ${a1},${a2},${a3}`)

console.log(`- ${theorem([a1, a2, a3])}`)

console.log(`- ${triangle(a1, a2, a3)}`)




console.log('Дан Массив из 20 чисел которые делятся на 5 или на 10 или на 15')

function array20numbers(a) {
  const arr20 = [];
  while (arr20.length < 20) {
    if (a % 3 === 0 || a % 5 === 0 || a % 15 === 0) {
      arr20.push(a);
    }
    a += 1;
  }
  return arr20;
}

console.log(array20numbers(5))



// Произведение каждой третьей позиции массива


const array20 = array20numbers(5)

function product3position(a) {
  let x = 1;
  for (let i = 2; i < a.length; i += 3) {
    x *= a[i];
  }
  return x;
}
console.log(`Произведение каждой третьей позиции массива: ${product3position(array20)}`);



// Среднее арифметическое массива

function arithmeticAverage(a) {
  let mid = 0;
  for (let i = 0; i < a.length; i += 1) {
    mid += a[i];
  }
  let average = mid / a.length;
  return average;
}

console.log(`Среднее арифметическое массива: ${arithmeticAverage(array20)}`);


// Максимальное число массива

function maxArrNumber(a) {
  let maxNumber = a[0];
  for (let i = 1; i < a.length; i += 1) {
    if (maxNumber < a[i]) {
      maxNumber = a[i];
    }
  }
  return maxNumber;
}
console.log(`Максимальное число массива: ${maxArrNumber(array20)}`);


// Минимальное число массива

function minArrNumber(a) {
  let minNumber = a[0];
  for (let i = 1; i < a.length; i += 1) {
    if (minNumber > a[i]) {
      minNumber = a[i];
    }
  }
  return minNumber;
}
console.log(`Минимальное число массива: ${minArrNumber(array20)}`);