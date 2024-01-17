// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date.getDay());
// получим инфомрацию о дне недели 1 декабря предыдущего года.

// №2
now = new Date();
let day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(day[date.getDay()]);