// #1
let now = new Date();
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, 0, 0);
let result = (now - noon) / (1000 * 60 * 60);
console.log(Math.round(result));

