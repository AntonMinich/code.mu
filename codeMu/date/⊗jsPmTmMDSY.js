// #1
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
let day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(day[date.getDay()]);

// #2
now = new Date();
date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(day[date.getDay()]);

// #3
now = new Date();
date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(day[date.getDay()]);