// #1
let arr = [1, 2, 3, 4, 5];
let res = arr.every(elem => elem > 0);
console.log(res);

// #2
arr = [12, 34, 7, 8, 23, 5, 9];
res = arr.every((elem, index) => elem * index < 30);
console.log(res);
