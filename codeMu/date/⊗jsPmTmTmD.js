// #1
let firstDay = new Date(2000, 0, 10);
let secondDay = new Date(1988, 2, 1);
let result = ((firstDay.getTime() - secondDay.getTime()) / (1000 * 60 * 60 * 24));
console.log(Math.floor(result));

// #2
let birthDay = new Date(1992, 5, 2);
let dateNow = new Date();
let res = ((dateNow.getTime() - birthDay.getTime()) / (1000 * 60 * 60 * 24 * 30) - birthDay.getMonth() + dateNow.getMonth())
result = (((dateNow.getFullYear() - birthDay.getFullYear()) * 12) - birthDay.getMonth() + dateNow.getMonth());
console.log(Math.floor(res));
console.log(result);