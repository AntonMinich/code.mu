// #1
let date1 = new Date();
let date2 = new Date(date1.getFullYear(), 11, 21);
let day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let result = date2.getDay();
console.log(day[result]);