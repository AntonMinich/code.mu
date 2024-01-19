// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(Math.round((now - date) / (1000 * 60 * 60)));