// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
let arr = [];
for (let i = 10; i <= 1000; i++) {
    arr.push(i);
}

arr.forEach(function(elem){
    if(String(elem)[String(elem).length-2] % 2 == 0) {
        console.log(elem);
    }
})


// Дан массив. Удалите из него каждый пятый элемент.
arr = [1, 2, 4, 6, 7, 5, 4, -4, 0, 23, 4, 4];
let control = 5;
let result = arr.filter(function(elem, index){
    if ((index + 1) % 5 !== 0) {
        return true
    } 
})
console.log(result);



// Сделайте строку, содержащую столько нулей, сколько указано в переменной. 
let num = 5;
arr = [];
for (let i = 0; i < num; i++) {
    arr.push(0);
}
console.log(arr.join(''));


// Удалите из этой строки каждое второе слово.
let string = 'aaa bbb ccc eee fff';
arr = string.split(' ');
result = arr.filter((elem, index) => index % 2 == 0);
console.log(result.join(' '));



// Найдите сумму элементов этого массива.
arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sum = arr.reduce(function(total, subArray) {
    return total + subArray.reduce(function(sum, elem) {
        return sum + elem;
    },0);
}, 0);
console.log(sum);