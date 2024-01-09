// #1
let arr = [1,4,9,16];
let res = arr.map(function(elem){
    return Math.sqrt(elem);
})
console.log(res);

// #2
arr = ['Привет', 'Вторник', 'Стул'];
res = arr.map(elem => elem + '!');
console.log(res);

// #3
arr = ['Привет', 'Вторник', 'Стул'];
res = arr.map(elem => elem.split('').reverse().join(''));
console.log(res);

// #4
arr = ['123', '456', '789'];
res = arr.map(elem => elem.split('').map(Number));
console.log(res);


// #5
arr = [1, 2, 3, 4, 5, 6];
res = arr.map((elem, index) => elem * index);
console.log(res);
