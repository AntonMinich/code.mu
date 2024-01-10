// Дана некоторая строка. Найдите позицию первого нуля в строке.
let string = '32458023';
let arr =  string.split('');
let res = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        res = i;
        break;
    }
}
console.log(res);

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 10; i <= 1000; i++) {
    let number = String(i).split('');
    for (let j = 0; j < number.length; j++) {
        for (let k = 1; k < number.length; k++) {
            if (+number[j] + +number[k] == 5) {
                console.log(i);
            }
        }
    }
}

for (let i = 1; i <= 100; i++) {
    let num = String(i).split('');
    for (let j = 0; j < num.length; j++) {
        for (let k = 1; k < num.length; k++) {
            if (+num[j] + +num[k] == 5) {
                console.log(i);
            }
        }
    }
}

// Дан массив. Удалите из него элементы с заданным значением.
arr = [1, 2, 3, 4];
let meaning = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == meaning) {
        arr.splice(i, 1);
    }
};
console.log(arr);

// Найдите сумму первой половины элементов этого массива.
arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length/2; i++) {
    sum += arr[i];
}
console.log(sum);

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

arr = [-1, 0, 2, 5, -3, 5, -6];
let count = 0;
for (let elem of arr) {
    if (elem < 0) {
        count ++;
    }
}
console.log(count);

// Дан массив с числами. Оставьте в нем только положительные числа.
arr = [-1, 0, 2, 5, -3, 5, -6];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i,1);
    }
}
console.log(arr);

// Дана строка. Удалите предпоследний символ из этой строки.
string = 'hello';
string = string.slice(0, -2) + string.slice(-1);
console.log(string);

// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
arr = [1, 4, 7, 3, 2, 1];
let firstPart = 0;
let secondPart = 0;
for (let i = 0; i < arr.length; i++) {
    if (i < arr.length/2) {
        firstPart += arr[i];
    } else {
        secondPart += arr[i];
    }
}
console.log(firstPart / secondPart);


// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let string1 = 'HelloH';
let string2 = 'Hi';
if(string1[string1.length-1] === string2[0]) {
    console.log('Буквы совпадают');
} else {
    console.log('Мимо');
}

// Дана некоторая строка. Найдите позицию третьего нуля в строке.
string = '12340123067504';
count = 0;
for (let i = 0; i < string.length; i++) {
    if(string[i] == 0) {
        count ++;
        if (count == 3) {
            console.log(i);
            break;
        }
    }
}


// Даны числа, разделенные запятыми: Найдите сумму этих чисел.
string = '12,34,56';
arr = string.split(',');
sum = 0;
for (let elem of arr) {
    sum += +elem;
}
console.log(sum);


// Преобразуйте эту дату в следующий объект:
let date = '2025-12-31';
let obj = {};
arr = date.split('-');
for (let i = 0; i < 1; i++) {
    obj.year = arr[i];
    obj.month = arr[i+1];
    obj.day = arr[i+2];
}
console.log(obj);

date = '2025-12-31';
obj = {};
arr = date.split('-');
obj.year = arr[0];
obj.month = arr[1];
obj.day = arr[2];
console.log(obj);

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
string = 'hello2023year';
let position = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] == Number(string[i])) {
        position = i;
        break;
    }
}
console.log(position);

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
obj = {
    a: 1,
    b: 2,
    c: 3
};
let arr1 = [];
let arr2 = [];
arr1 = Object.keys(obj);
arr2 = Object.values(obj);
console.log(arr1);
console.log(arr2);

// Дано число. Выведите в консоль количество четных цифр в этом числе.
number = 123456789;
count = 0;
arr = String(number).split('');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count ++;
    }
}
console.log(count);


// Переведите в верхний регистр все нечетные буквы этой строки.
string = 'abcde';
let newString = '';
for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
        newString += string[i].toUpperCase();
    } else {
        newString += string[i];
    }
}
console.log(newString);

//Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
string = 'aaa bbb ccc';
arr = string.split(' ');
newString = '';
for (let i = 0; i < arr.length; i++) {
    newString += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1) + ' ';
} 
console.log(newString.trim());


// Получите массив позиций всех нулей в этой в строке.
string = '023m0df0dfg0';
arr = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] == 0) {
        arr.push(i);
    }
}
console.log(arr);

// Удалите из этой строки каждый третий символ.
string = 'abcdefg';
newString = '';
for (let i = 0; i <string.length; i++) {
    if ((i+1) % 3 !== 0) {
        newString += string[i];
    }
}
console.log(newString);

// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
arr = [3, 4, 5, 1, 3, 5, 7];
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        even += arr[i];
    } else {
        odd += arr[i];
    }
}
console.log(even/odd);

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
string = 'afsd32fd312';
arr = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] == Number(string[i])) {
        arr.push(i);
    }
}
console.log(arr);


// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
arr = [123, 456, 789];
newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(+String(arr[i]).split('').reverse().join(''));
}
console.log(newArr);


// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'
string = '1234567';
newStr = [];
for (let i = 0; i < string.length; i++) {
    if (i % 3 == 0) {
        newStr += string[i]+' ';
    } else {
        newStr += string[i];
    }
}
console.log(newStr);

// Смените регистр букв этой строки на противоположный. 
string = 'AbCdE';
newStr = '';
for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
        newStr +=string[i].toLowerCase();
    } else {
        newStr += string[i].toUpperCase();
    }
}
console.log(newStr);

 
// Слейте пары элементов вместе:
arr = [1, 2, 3, 4, 5, 6];
newArr = [];
for (let i = 0; i < arr.length; i+=2) {
    newArr.push(String(arr[i]) + String(arr[i+1]));
}
console.log(newArr.map(Number));

// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее 'aaa Bbb ccc Eee fff'
string = 'aaa bbb ccc eee fff';
arr = string.split(' ');
newStr = '';
for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
        newStr += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1) + ' ';
    } else {
        newStr += arr[i] + ' ';
    }
}
console.log(newStr.trim());

// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
string = 'a bc def ghij';
arr = string.split(' ');
newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
        newArr.push(arr[i].toUpperCase()) 
    } else {
        newArr.push(arr[i]);
    }
}
newString = newArr.join(' ');
console.log(newString);

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
let symbol = 'L';
if (symbol == symbol.toUpperCase()) {
    console.log('++');
} else {
    console.log('--');
}

// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
number = 123789;
string = String(number);
newString = '';
for (let i = 0; i < string.length; i++) {
    if(string[i] % 2 == 0 ) {
        newString += string[i];
    }
}
let newNumber = Number(newString);
console.log(newNumber);

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
string = 'RadioPotok';
count = 0;
arr = string.split('');
for (let elem of arr) {
    if (elem == elem.toUpperCase()){
        count++;
        if (count > 2) {
            console.log('В строке больше двух заглавных букв');
            break;
        }
    }
    
}
console.log('В строке' + ' ' + count + ' ' + 'заглавные буквы');


// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
string = '1 22 333 4444 22 5555 1';
arr = string.split(' ');
newArr = [];
for (let elem of arr) {
    if (elem.length <= 3) {
        newArr.push(elem);
    }
}
newString = newArr.join(' ');
console.log(newString);


// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
arr1 = [1, 2, 3];
arr2 = ['a', 'b', 'c'];
let resArr = (arr1.slice(0,2).concat(arr2) +','+ arr1.slice(2)).split(',');
console.log(resArr);


// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
number = 123456;
arr = String(number).split('');
newArr = [];
sum = 0;
for (let i = 0; i < arr.length; i +=2) {
    newArr.push(arr[i] + arr[i+1]);
    for (let j = 0; j < newArr.length; j++) {
        sum += +newArr[j];
    }
}
console.log(newArr);
console.log(sum);


// Выведите в консоль элементы этого массива в обратном порядкe
arr = [1, 2, 3, 4, 5];
for (let elem of arr.reverse()) {
    console.log(elem);
}


// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
string = '123y23ew434324';
count = 0;
for (let elem of string) {
    if (elem != Number(elem)) {
        count++;
    }
}
if (count > 3) {
    console.log('Тут больше трех букв');
} else {
    console.log('Тут ' +  count + ' буквы');
}

// Дано число. Получите первую четную цифру с конца этого числа.
number = 123456789;
string = String(number);
res = 0;
for (let i = string.length; i >= 0; i--) {
    if (string[i] % 2 == 0) {
        res = string[i];
        break;
    }
}
console.log(res);


// Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
string = 'abcde abcde abcde';
arr = string.split(' ');
newString = '';
for (let i = 0; i < arr.length; i++) {
    newString += '!' + arr[i].slice(1) + ' ';
}
console.log(newString.trim());

// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
arr = [1, 2, 3, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
        }
    }
}
