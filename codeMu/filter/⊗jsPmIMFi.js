// #1
let arr = [1, -2, 0, 4, -3, 5];
let res = arr.filter(elem => elem > 0);
console.log(res);

// #2
arr = [1, -2, 0, 4, -3, 5];
res = arr.filter(elem => elem < 0);
console.log(res);

// #3

arr = [1, -3, 0, 5, 10, 34, -34, 7];
res = arr.filter(elem => elem > 0 && elem < 10);
console.log(res);

// #4
arr = ['Hello', 'Home', 'Sun', 'Monday', 'JavaScript'];
res = arr.filter(elem => elem.length > 5);
console.log(res);

// #5
arr = [12, 34, 7, 8, 23, 5, 9];
res = arr.filter((elem, index) => elem * index < 30);
console.log(res);

// #6
arr = [1, 2, [3, 4], 5, [6, 7]];
res = arr.filter(elem => !Array.isArray(elem));
console.log(res);