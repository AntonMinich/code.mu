// #1
let date = new Date();
console.log(date.getDay());

// #2
date = new Date();
let day = date.getDay();
let result = getDayStatus(day);
function getDayStatus (num) {
    if (num >= 1 && num <=5) {
        return 'Будний день';
    } else {
        return 'Выходной день';
    }
}
console.log(result);

// #3
date = new Date();
let thisDay = date.getDay();
function calculateDays(num){
    return 6 - thisDay + ' дней осталось до ближайшего воскресенья';
}
result = calculateDays(thisDay);
console.log(result);