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
let maxLength = 0
for (let i = 1; i <= 9; i += 1) {



  console.log('************* Строка с наибольшим количеством чисел в строке более 50 ***************');

  let sum = [];
  for (let j = 1; j <= 9; j += 1) {
    if ((i * j) > 50) {
      sum.push(i * j)
    }
  }

  // console.log(sum.length)
  // console.log(maxLength)
  if (sum.length > maxLength) {
    maxLength = sum.length
  }

  // finishSum.push(maxLength)

}
console.log(maxLength)





// function array20() {
//   const arr220 = [];

//   let numbx = 3;

//   while (arr220.length < 20) {
//     if (numbx % 3 === 0 || numbx % 5 === 0 || numbx % 15 === 0) {
//       arr220.push(numb);
//     }
//     numbx += 1;
//   }
//   console.log(arr220);
// }


// function prod3() {
//   let prod = 1;
//   for (let i = 2; i < arr220.length; i += 3) {
//     prod *= arr220[i];
//   }
//   console.log(prod);
// }

// function average2() {
//   let mid = 0;
//   for (let i = 0; i < arr220.length; i += 1) {
//     mid += arr220[i];
//   }

//   const average = mid / arr20.length;

//   console.log(average);
// }


// function maxNumber() {
//   let maxNumber = arr220[0];
//   for (let i = 1; i < arr220.length; i += 1) {
//     if (maxNumber < arr220[i]) {
//       maxNumber = arr220[i];
//     }
//   }
//   console.log(maxNumber);
// }


// function minNumber() {
//   let minNumber = arr220[0];
//   for (let i = 1; i < arr220.length; i += 1) {
//     if (minNumber > arr220[i]) {
//       minNumber = arr220[i];
//     }
//   }
//   console.log(minNumber);
// }


// function matrix() {
//   for (let i = 0; i < 9; i += 1) {
//     let row = '';
//     for (let j = 0; j < 9; j += 1) {
//       row += `${matrix[i][j].toString()}\t`;
//     }
//     console.log(row);
//   }
// }


// function mainDiagsum() {
//   let num = 9
//   let sum = 0
//   for (let i = 1; i <= num; i += 1) {
//     let res = (i * i)
//     // console.log(res)
//     sum += res

//   }
//   console.log(sum)
//   // for (let i = num; i >= 0; i--) {
//   // console.log(i * i)
// }


// function midGeom() {
//   let len = 9
//   let lenNew = len
//   let step = len
//   let geom = []
//   for (let i = 1; i <= lenNew; i += 1) {

//     geom.push(i * len)

//     len--
//   }
//   let geom1 = geom[0];
//   for (let i = 1; i < geom.length; i += 1) {
//     geom1 *= geom[i]

//   }
//   console.log(geom1 ** (1 / step))
// }


// function sumElem() {
//   for (let i = 2; i <= 9; i += 2) {
//     let sum = 0
//     for (let j = 1; j <= 9; j += 1) {

//       sum += (i * j)
//     }
//     console.log(sum)
//   }
// }



// function elem2() {
//   for (let i = 1; i <= 9; i += 2) {
//     let sum = 0
//     for (let j = 1; j <= 9; j += 1) {
//       sum += (i * j);
//     }
//     console.log(sum / 9)
//   }
// }


// function num50() {
//   let sum = [];
//   for (let j = 1; j <= 9; j += 1) {
//     if ((i * j) > 50) {
//       sum.push(i * j)
//     }
//   }

//   if (sum.length > maxLength) {
//     maxLength = sum.length
//   }

//   console.log(maxLength)
// }