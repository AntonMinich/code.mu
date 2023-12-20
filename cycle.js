// Перебор массива циклом for-of

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    console.log(elem);
}

// Перебор объекта циклом for-in

let obj = {
    name: 'Ivan',
    surname: 'Kulibin',
    age: 103,
    location: 'USSR'
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}


// Цикл while

let i = 0;
while (i <= 15) {
    console.log (i)
    i++
}

let r = 0;
while (r <= 3) {
    console.log ('Wow')
    r++
}

// Цикл for

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// Цикл for для массивов

let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

for (let i = arr2.length-1; i >= 0; i--) {
    console.log(arr2[i]);
}


// Условия в циклах 
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let arr3 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i <= arr3.length; i++) {
    if (arr3[i] >= 3 && arr3[i]<=10) {
        console.log(arr3[i]);
    }
}

// Выведите в консоль те элементы объекта, значения которых - нечетные числа.

let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj2) {
    if (obj2[key] % 2 != 0) {
        console.log(obj2[key]);
    }
}


// Накопление чисел в циклах
// Найдите сумму четных чисел от 2 до 100

let res = 0;
for (let i = 2; i <= 100; i++) {
    if(i % 2 == 0) {
        res += i;
    }
    console.log(res);
}

// Найдите сумму нечетных чисел от 1 до 99.

res = 0;
for (let i = 1; i <= 99; i++) {
    if(i % 2 != 0) {
        res += i;
    }
    console.log(res);
}

// Найдите произведение целых чисел от 1 до 20.
let res2 = 1;
for(let i = 1; i <= 20; i++) {
    res2 *= i;
}
console.log(res2);

// Найдите сумму элементов этого массива.
let arr4 = [2, 5, 9, 3, 1, 4];
let result = 0;
for (let elem of arr4) {
    result += elem;
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;
for(let i = 0; i < arr4.length; i++) {
    result += arr4[i];
}
console.log(result);

// Найдите сумму элементов элементов, являющихся четными числами.
arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for( let elem of arr4) {
    if( elem % 2 == 0) {
        result += elem;
    }
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for (let i = 0; i <arr4.length; i++) {
    if (arr4[i] % 2 == 0) {
        result += arr4[i];
    }
}
console.log(result);


// Найдите сумму квадратов элементов этого массива.
arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for(let elem of arr4) {
    result += elem**2;
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;
for(let i = 0;  i < arr4.length; i++) {
    result += arr4[i]**2;
}
console.log(result);

// Найдите произведение элементов этого массива.
arr4 = [2, 5, 9, 3, 1, 4];
result = 1;
for(let i = 0; i < arr4.length; i++) {
    result *= arr4[i];
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 1;

for(let elem of arr4) {
    result *= elem;
}
console.log(result);

// Формирование строк через циклы 
// С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for(let i = 0; i <= 5; i++) {
    str +='-';
}
console.log(str);

// С помощью цикла сформируйте строку '123456789'.
str = '';
for(let i = 1; i <= 9; i++) {
    str += i;
}
console.log(str);

// С помощью цикла сформируйте строку '987654321'.

str = '';
for (let i = 9; i >= 1; i--) {
    str += i;
}
console.log(str);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

str = '';
for (let i = 1; i <= 9; i++) {
    str += '-' + i;
}
console.log(str);


// Цифры числа при переборе циклом

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}


// Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let res = Number(str[0]) + Number(str[1]);
    console.log(res);
}

// Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for(let i = 10; i <= 1000; i++) {
    let str = String(i);
    if(str[0] == 1) {
        console.log(str[0]);
    }
}

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let res = Number(str[0]) + Number(str[1]);
    if ( res == 5) {
        console.log(Number(str));
    }
}

// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

arr4 = [2, 5, 9, 3, 0, 1, 4];
for (let elem of arr4) {
    if( elem == 0){
        break;
    }
    console.log(elem);
}


// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
arr4 = [2, 5, 9, 3, 0, -3, 1, 4];
let sum = 0;
for (let elem of arr4) {
    if (elem < 0) {
        break;
    } 
    sum += elem;
}
console.log(sum);

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
arr4 = [2, 5, 9, 0, 3, -3, 1, 3, 4];
let position = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] == 3) {
        position = i;
        break;
    }
}
console.log(position);

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let resSum = 0;
let cycle = 0
for (let i = 0; i < 100; i++) {
    if(resSum >= 100) {
        break;
    }
    resSum += i;
    cycle += 1;
}
console.log(resSum);
console.log(cycle);


// Вложенные циклы
// С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
for (let i = 0; i <= 9; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(i); 
        // document.write(i)
    }
}

// С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        // document.write('' + i + j + ' ')
        console.log(String(i) + String(j));
    }
}

// Заполнение массива 
// Используя цикл и метод push заполните массив числами от 1 до 10.
let newArr = [];
for (let i = 1; i <= 10; i++) {
    newArr.push(i);
}
console.log(newArr);

// Используя цикл и метод push заполните массив 10-ю буквами 'x'.

newArr = [];
for (let i = 0; i <= 10; i++) {
    newArr.push('x');
}
console.log(newArr);

// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

arr4 = [2, 5, 9, -9, 0, 3, -3, 1, 3, 4, -5];
newArr = [];
for (let elem of arr4) {
    if(elem >= 0) {
        newArr.push(elem);
    }
}
console.log(newArr);

arr4 = [2, 5, 9, -9, 0, 3, -3, 1, 3, 4, -5];
newArr = [];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] >= 0) {
        newArr.push(arr4[i])
    }
}
console.log(newArr);

// Изменение массива в цикле
// Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.

let arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i]**2;
}
console.log(arr5);

// дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i <arr5.length; i++) {
    arr5[i] = arr5[i] - 1;
}
console.log(arr5);

// Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i] + 10;
}
console.log(arr5);

// Заполнение объектов через цикл
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let keys  = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let values  = [1, 2, 3, 4, 5, 6, 7];
let objRes = {};

for (let i = 0; i < keys.length; i++) {
    objRes[keys[i]] = values[i];
}
console.log(objRes);

// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objNew = {};


for (let key in obj3) {
    if(obj3[key] % 2 == 0) {
        objNew[key] = obj3[key];
    }
}
console.log(objNew);


let objChange = {
    a: 1,
    b: 2,
    c: 3
}
let sd = {}

for (let key in objChange) {
   if (objChange[key] % 2 == 0) {
    sd[key] = objChange[key];
   }
}
console.log(sd);


// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.

let obj5 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};
for (let key in obj5) {
    let value = obj5[key];
    newObj[value] = key; 
}
console.log(newObj);

// У вас есть объект с числовыми значениями. Создайте новый объект, в котором значения будут удвоены.
let numbersObj = {a: 3, b: 7, c: 5, d: 2, e: 8};
for (let key in numbersObj) {
    numbersObj[key] *= 2;
}
console.log(numbersObj);

// У вас есть объект с числовыми значениями. Найдите и выведите в консоль ключ элемента с максимальным значением.
let valuesObj = {x: 15, y: 8, z: 25, w: 12, u: 30};
let maxValue = 0;
for (let key in valuesObj) {
    if (valuesObj[key] > maxValue) {
        maxValue = valuesObj[key];
    }

}
console.log(maxValue);


// У вас есть объект с текстовыми значениями. 
// Создайте новый объект, в котором каждая строка будет изменена (например, приведена к верхнему регистру или заменены символы).

let stringsObj = {name: 'John', city: 'New York', hobby: 'reading', job: 'developer'};
let newObj2 = {};

for (let key in stringsObj) {
    newObj2[key] = stringsObj[key].toUpperCase();
}

console.log(newObj2);


// Создайте объект с числовыми значениями и напишите код, который найдет и выведет в консоль ключ элемента с максимальным значением.
let maxObj = {p: 15, q: 8, r: 25, s: 12, t: 30};

let resMaxObj = 0;
for(let keys in maxObj) {
    if (maxObj[keys] > resMaxObj) {
        resMaxObj = maxObj[keys];
    }
}
console.log(resMaxObj);

// Создайте объект с числовыми значениями и напишите код, который умножит все значения на определенное число (например, 2) и выведет новый объект в консоль.
let multiplyObj = {a: 4, b: 6, c: 8, d: 2};
let arrayKey = Object.keys(multiplyObj);
let resMultiplyObj = {};
for (let i = 0; i < arrayKey.length; i++) {
    
    resMultiplyObj[arrayKey[i]] = multiplyObj[arrayKey[i]] * 2;
}
console.log(resMultiplyObj);


// Создайте объект с текстовыми значениями и напишите код, который объединит все строки в одну и выведет её в консоль.

let stringObj = {firstName: 'John', lastName: 'Doe', occupation: 'Engineer'};
let strRes = '';
for (let keys in stringObj) {
    strRes += stringObj[keys] + ' ';
}
console.log(strRes);

// Создайте объект с текстовыми значениями и напишите код, который выведет в консоль длину каждой строки.
let lengthsObj = {str1: 'Hello', str2: 'JavaScript', str3: 'World'};
for (let keys in lengthsObj) {
    console.log(lengthsObj[keys].length);
}

// Создайте объект с числовыми значениями и напишите код, который выведет в консоль сумму всех четных чисел.
let evenNumbersObj = {a: 5, b: 10, c: 8, d: 3, e: 6};
let resEvenNumbersObj = 0;
for (let keys in evenNumbersObj) {
        resEvenNumbersObj += evenNumbersObj[keys];
}
console.log(resEvenNumbersObj);


// Создайте объект с числовыми значениями и напишите код, который найдет и выведет в консоль ключ элемента с минимальным значением.
let minObj = {p: 15, q: 8, r: 25, s: 12, t: 7, g: 9};
let keyMinObj = Infinity;
for (let keys in minObj) {
        if (keyMinObj > minObj[keys]) {
            keyMinObj = minObj[keys];
        }
}
console.log(keyMinObj);


// Создайте объект с числовыми значениями и напишите код, который удалит все элементы с четными значениями и выведет новый объект в консоль.
let oddNumbersObj = {x: 3, y: 7, z: 5, w: 2, f: 4};
for (let keys in oddNumbersObj) {
    if (oddNumbersObj[keys] % 2 != 0) {
        delete oddNumbersObj[keys];
    }
}
console.log(oddNumbersObj);


// Создайте объект с текстовыми значениями и напишите код, который вычислит среднюю длину всех строк в объекте.
let stringsObj2 = {str1: 'Hello', str2: 'JavaScript', str3: 'World'};

let resStringsObj2 = 0;
let devider = Object.keys(stringsObj2).length;

for (let keys in stringsObj2){
    resStringsObj2 += stringsObj2[keys].length;
}

console.log(Math.floor(resStringsObj2/devider));

// Создайте объект с числовыми значениями и напишите код, который вычислит сумму всех значений в объекте.

let numbersObj2 = {a: 5, b: 10, c: 8, d: 3};

let sumNumbersObj2 = 0;

for (let keys in numbersObj2) {
    sumNumbersObj2 += numbersObj2[keys];
}
console.log(sumNumbersObj2);

// Создайте объект с текстовыми и числовыми значениями. Напишите код, который создаст новый объект, содержащий только строки из исходного объекта.

let mixedObj = {name: 'John', age: 25, city: 'New York', job: 'Developer'};
let newMixeObj = {};
for (let keys in mixedObj) {
    if (!isNaN(Number(mixedObj[keys]))) {
        newMixeObj[keys] = mixedObj[keys];
    }
}

console.log(newMixeObj);


// Создайте объект с текстовыми значениями и напишите код, который преобразует все ключи объекта в верхний регистр.
let lowerCaseObj = {firstName: 'john', lastName: 'doe', age: 30};
let upperCaseObj = {};
for (let keys in lowerCaseObj) {
    let upperKey = keys.toUpperCase();
    upperCaseObj[upperKey] = lowerCaseObj[keys];
}

console.log(upperCaseObj);

// Создайте два объекта и напишите код, который объединит их в один новый объект.
let objOne = {a: 1, b: 2};
let objTwo = {c: 3, d: 4};

let objThree = Object.assign(objOne, objTwo);
console.log(objThree);

// Создайте объект с числовыми значениями и напишите код, который увеличит все значения в объекте на определенное число (например, 5).
let numbersObj3 = {x: 10, y: 15, z: 20};
let incrementBy = 5;
for (let key in numbersObj3) {
    numbersObj3[key] += incrementBy;
}
console.log(numbersObj3);

// Создайте объект с числовыми значениями и напишите код
// , который создаст новый объект, содержащий только те значения, которые больше определенного порога (например, больше 15).

let originalObj = {a: 10, b: 20, c: 25, d: 30};
let threshold = 15;

let resultOriginalObj = {};

for (let key in originalObj) {
    if (originalObj[key] > threshold) {
        resultOriginalObj[key] = originalObj[key];
    }
}

console.log(resultOriginalObj);


// Создайте объект с текстовыми значениями и напишите код, который подсчитает количество повторяющихся значений.
let textObj = {word1: 'apple', word2: 'orange', word3: 'apple', word4: 'banana'};
let uniqueWordCount = [];

for (let key in textObj) {
       if (!uniqueWordCount.includes(textObj[key])) {
        uniqueWordCount.push(textObj[key]);
    }
}

console.log(uniqueWordCount);
console.log(uniqueWordCount.length);


// Создайте объект с текстовыми значениями и напишите код, который объединит все значения в одну строку.
let stringObj4 = {part1: 'Hello', part2: ' JavaScript', part3: ' World'};
let strRes2 = Object.values(stringObj4).join(' ');
console.log(strRes2);

// Объедините два массива (arr1 и arr2) в один новый массив.
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let resArr = arr6.concat(arr7);
console.log(resArr);


// Создайте новый массив, в который включите только те числа из исходного массива, которые делятся на 5.

let numbers = [1, 10, 15, 20, 25, 30];
let newNumbers = [];
for (let elem of numbers) {
    if (elem % 2 == 0) {
        newNumbers.push(elem);
    }
}
console.log(newNumbers);

// Обновите возраст пользователя (user) на 26 и добавьте новое поле gender со значением 'female'.
let user = { name: 'Alice', age: 25, city: 'Wonderland' };
user.age = 26;
user.female = 'Woman';

console.log(user);

// Создайте новый массив, в который включите только тех людей из исходного массива, которые старше 30 лет.

let people = [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Charlie', age: 35, gender: 'male' }
  ];

let newPeople = [];
for (let elem of people) {
    if(elem.age >= 30) {
        newPeople.push(elem);
    }
}
console.log(newPeople);

// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let arr10 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr20 = [1, 2, 3, 4, 5, 6, 7];
let objArr = {};
for (let i = 0; i < arr10.length; i++) {
    objArr[arr10[i]] = arr20[i];
}
console.log(objArr);

// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj23 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj23New = {};
for (let key in obj23) {
    if (obj23[key] % 2 == 0) {
        obj23New[key] = obj23[key];
    }
}
console.log(obj23New);

// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj34 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj34New = {};

for (let key in obj34) {
    obj34New[obj34[key]] = key;
}
console.log(obj34New);

// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj35 = {x: 1, y: 2, z: 3};
for (let key in obj35) {
    obj35[key] = obj35[key] ** 2;
}
console.log(obj35);

// Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
obj35 = {x: 1, y: 2, z: 3};
for (let key in obj35) {
    obj35[key] = obj35[key] + 1;
}
console.log(obj35);

// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arrFlag = ['a', 'b', 'c', 'd', 'e', 'c'];
for (let elem of arrFlag) {
    let flag = false;
    if (elem == 'c') {
        flag = true;
        break
    }
    if(flag = true) {
        console.log('+++');
    } else {
        console.lof('---');
    }
}

// Напишите код, который будет проверять число на то, простое оно или нет.
//  Простое число делится только на единицу и на само себя, и не делится на другие числа.

let number = 9;
let flag = true;

    for (let i = 2; i <= number-1; i++) {
        if (number % i === 0) {
            flag = false;
            break;
        }
    }
    
if (flag === true) {
        console.log('простое число');
    } else {
        console.log('не простое число')
    }


 // Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
 let arrSum = [10, 20, 30, 40, 21, 32, 51];
 let resultSum = 0;
 for (let elem of arrSum) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2) {
        resultSum += elem;
    }
 }
 console.log(resultSum);

// Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++){
    console.log(i);
}

// Выведите с помощью цикла столбец чисел от 100 до 1.
for(let i = 100; i > 0; i--) {
    console.log(i);
}

// Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Заполните массив 10-ю иксами с помощью цикла.

let arrX = [];
for (let i = 0; i <= 10; i++) {
    arrX.push('x');
}
console.log(arrX);

// Заполните массив числами от 1 до 10 с помощью цикла.
let arrNum = [];
for (let i = 1; i <= 10; i++) {
    arrNum.push(i);
}
console.log(arrNum);

// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arrNumbers = [1, 32, 45, 5, 24, -43, 0, 3, 4, 345];
for (let elem of arrNumbers) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arrNumbers2 = [23, 34, 4, 3, 6, 5];
let resArrNumbers2 = arrNumbers2.includes(5);
for (let elem of arrNumbers2) {
    if (elem == 5) {
        console.log('есть');
    }
}
console.log(resArrNumbers2);

// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
arrNumbers2 = [23, 34, 4, 3, 6, 5];
let resSumNum = 0;
for (let elem of arrNumbers2) {
    resSumNum += elem;
}
console.log(resSumNum);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
arrNumbers2 = [23, 34, 4, 3, 6, 5];
resSumNum = 0;
for (let elem of arrNumbers2) {
    resSumNum += elem ** 2;
}
console.log(resSumNum);

// Дан массив с числами. Найдите среднее арифметическое его элементов.
arrNumbers2 = [23, 34, 4, 3, 6, 5];
let resNum = 0;
for (let elem of arrNumbers2) {
    resNum += elem;
}
console.log(resNum/arrNumbers2.length);

// Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
let number2 = 5;
let factorial = 1;
for (let i = 1; i <= number2; i++) {
    factorial *= i;
}
console.log(factorial);

// Заполните массив числами от 10 до 1 с помощью цикла.
let wrapArr = [];
for (let i = 10; i > 0; i--) {
    wrapArr.push(i);
}
console.log(wrapArr);


// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

arrNumbers = [1, 32, 45, 5, 24, -43, 0, 3, 4, -520];
let sumArrNumbers = 0;
for (let elem of arrNumbers) {
    if (elem > 0) {
        sumArrNumbers += elem;
    }
}

console.log(sumArrNumbers);


// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
        console.log(elem);
    }
}

// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
}

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
arr = [2, 1, 3, 4, 2, 5, 6, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
    if (i == arr[i]) {
        console.log(i);
    }
}

// Дан следующий объект с работниками и их зарплатами: Увеличьте зарплату каждого работника на 10%.

obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    obj[key] += obj[key] * 0.1;
}
console.log(obj);

// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] += obj[key] * 0.1;
    }
}
console.log(obj);

// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

 let arr1 = [1, 2, 3, 4, 5];
 arr2 = [6, 7, 8, 9, 10];
 obj = {};
 for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i]; 
 }
 console.log(obj);

//  Найдите сумму ключей этого объекта и поделите ее на сумму значений.
obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0;
let sumElem = 0;

for (let key in obj) {
    sumKey += Number(key);
    sumElem += obj[key];
}
res = sumElem / sumKey;
console.log(res);


// Запишите ключи этого объекта в один массив, а значения - в другой.
obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
arr1 = [];
arr2 = [];
for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);

// Дан объект. Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 
obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
arr = [];
for (let key in obj) {
    if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
        arr.push(obj[key]);
    }
}
console.log(arr);

// Дан следующий массив:['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект:{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[i+1] = arr[i];
}
console.log(obj);

// Дан следующий массив: ['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
}
console.log(obj);