// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
let number = 12345;
let arr = String(number).split('');
arr.sort(function(a,b){
    return a-b;
}) 
let res = arr.join('');
if (res == number) {
    console.log('Цифры расположены по возрастанию');
} else {
    console.log(false);
}



// Удалите из массива все пустые строки.
arr = [1, '', 2, 3, '', 5];
res = arr.filter(elem => {
    if (elem != '') {
        return true;
    } else {
        return false;
    }
})
console.log(res);



// Отсортируйте элементы в каждом подмассиве.
arr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

res = arr.map(subArray => subArray.sort((a,b) => a-b));
console.log(res);



// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(arr1.length);
console.log(arr2);


