/* eslint-disable no-console */

let x = 1;

let y = 1;

while (x !== 10) {
    while (y !== 10) {
        console.log(x * y);
        y += 1;
    }
    x += 1;
    y = 1;
}

let q = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    q += j * i + " ";
    if (j >= 9) {
    q += ' \n';
    }
  }
}
console.log(q)