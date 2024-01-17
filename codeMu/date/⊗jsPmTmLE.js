// #1
let date = new Date(2024, 2, 0);
function isLeap(day) {
    if (date.getDate() == 29) {
        return 'Год високосный';
    } else {
        return 'Обычный год';
    }
}
let result = isLeap(date);
console.log(result);