// #1
let date = new Date(2020, 3, 0);
function numberDay(num) {
    return num.getDate();
}
let result = numberDay(date);
console.log(result);

// №2
date = new Date(2025, 6, 0);
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
function numberDays(date) {
    return days[date.getDay()];
}
result = numberDays(date);
console.log(result);
