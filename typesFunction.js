// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3} 
];



// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3} 
];
for (let i = 0; i < arr.length; i++) {
    if (i == 2) {
        console.log(arr[i]());
    }
}

// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3} 
];
let sum = arr[0]() + arr[1]() + arr[2]();
console.log(sum);

// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3} 
];
for (let func of arr) {
    console.log(func());
}


// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
//  С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
    func1: function() {return 1},
    func2: function() {return 2},
    func3: function() {return 3}
};
console.log(obj.func1() + obj.func2() + obj.func3());

// Переберите созданный объект циклом и выведите результаты работы функций в консоль.
obj = {
    func1: function() {return 1},
    func2: function() {return 2},
    func3: function() {return 3}
};
for(let key in obj) {
    console.log(obj[key]());
}

// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
//  Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
obj = {
    sum: function(arr) {
        let sum = 0;
         for(let elem of arr)  {
            sum += elem;
        
        }
    return sum;
    },
    squer: function(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i], 2);
        }
        return sum;
    },
    cube: function(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i], 3); 
        }
        return sum;
    }
}
console.log(obj.sum([2,3]));
console.log(obj.squer([2,3,4]));
console.log(obj.cube([2,3]));