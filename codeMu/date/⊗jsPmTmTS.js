// #1
let date = new Date(1992, 5, 2);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log('Родился во/в ' + days[day]);