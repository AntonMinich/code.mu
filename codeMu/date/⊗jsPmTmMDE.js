// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
console.log(Math.round((date - now) / (1000 * 60 * 60)));