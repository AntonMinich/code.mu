// #1
let date1 = new Date();
let date2 = new Date(date1.getFullYear(), 11, 21);
let day = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let result = date2.getDay();
console.log(day[result]);