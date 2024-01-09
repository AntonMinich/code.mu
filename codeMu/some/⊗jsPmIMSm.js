// #1
let arr = [0, -1, -4, 5];
let res = arr.some(elem => elem > 0);
console.log(res);

// #2
arr = [12, 34, 7, 8, 23, 5, 9];
res = arr.some((elem, index) => elem * index > 0);
console.log(res);