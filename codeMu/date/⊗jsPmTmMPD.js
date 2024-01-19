// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log(Math.round((now - date) / (1000 * 60 * 60)));
