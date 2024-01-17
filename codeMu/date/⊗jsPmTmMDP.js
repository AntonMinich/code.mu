// #1
let day1 = new Date(2024, 0, 1);
let day2 = new Date(2024, 8, 10);
let result = (day2 - day1) / (1000 * 60 * 60 * 24);
console.log(result);

// #2
now = new Date();
day1 = new Date(now.getFullYear(), now.getMonth(), 20);
day2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
result = (day2 - day1) / (1000 * 60 * 60 * 24);
console.log(result);