// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
let number = 6;
if (number < 0) {
    console.log('число отрицательное');
} else {
    console.log('число положительное');
};

// Дана строка. Выведите в консоль длину этой строки.
let string = 'Строка';
console.log(string.length);

// Дана строка. Выведите в консоль последний символ строки.
string = 'Строка';
console.log(string[string.length-1]);

// Дано число. Проверьте, четное оно или нет.
number = 9;
if (number % 2 == 0) {
    console.log('число четное');
} else {
    console.log('число нечетное');
};

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let word1 = 'Привет';
let word2 = 'Папа';
if (word1[0] == word2[0]) {
    console.log('первые буквы совпадают');
} else {
    console.log('Совпадений нет');
};

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
string = 'Печь';
if (string[string.length - 1] == 'ь') {
    console.log(string[string.length-2]);
} else {
    console.log(string[string.length-1]);
};

// Дано число. Выведите в консоль первую цифру этого числа.
number = 233;
console.log(String(number)[0]);

// Дано число. Выведите в консоль последнюю цифру этого числа.
number = 234;
console.log(String(number)[String(number).length-1]);

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
number = 234;
let sum = +String(number)[0] + +String(number)[String(number).length-1];
console.log(sum);

// Дано число. Выведите количество цифр в этом числе.
number = 25462;
console.log(String(number).length);

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
let number1 = 134;
let number2 = 178;
if (String(number1)[0] == String(number2)[0]) {
    console.log('Первые числа совпадают');
} else {
    console.log('Совпадений нет');
};


// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
string = 'Hello';
if (string.length > 1) {
    console.log(string[string.length-2]);
} else {
    console.log(string);
}

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
number1 = 434;
number2 = 242;
if (String(number1)[0] % String(number2)[0] == 0) {
    console.log('Первое число делится на второе без остатка');
} else {
    console.log('Делится с остатком');
}

// Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Выведите в консоль все целые числа от -100 до 0.
for (let i = -100; i < 0; i++) {
    console.log(i);
}

// Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

// Выведите в консоль все четные числа из промежутка от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Найдите сумму всех целых чисел от 1 до 100.
sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);


// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum);

// Даны два целых числа. Найдите остаток от деления первого числа на второе.
number1 = 25;
number2 = 2;
console.log(number1 % number2);


// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
string = 'hello';
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5, 6];
sum = 0;
for (let elem of arr) {
    sum += elem ** 2;
}
console.log(sum);

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
arr = [1, 2, 3, 4, 5, 6];
sum = 0;
for (let elem of arr) {
    sum += Math.sqrt(elem);
}
console.log(sum);


// Дан массив с числами. Найдите сумму положительных элементов этого массива.
arr = [1, -2, 3, -4, 5, 6];
sum = 0;
for (let elem of arr) {
    if (elem > 1) {
        sum += elem;
    }
}
console.log(sum);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
arr = [1, -2, 30, -4, 5, 60];
sum = 0;
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        sum += elem;
    }
}
console.log(sum);

// Получите массив букв этой строки.
string = 'abcde';
arr = string.split('');
console.log(arr);

// Получите массив цифр этого числа.
number = 12345;
arr = String(number).split('');
for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
}
console.log(arr);

// Переверните число
number = 12345;
let revers = String(number).split('').reverse().join('');
console.log(Number(revers));

// Дано число. Найдите сумму цифр.
number = 12345;
arr = String(number).split('');
sum = 0;
for (let elem of arr) {
    sum += +elem;
}
console.log(sum);

// Заполните массив целыми числами от 1 до 10.
arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

// Заполните массив четными числами из промежутка от 1 до 100.
arr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        arr.push(i);
    }
}
console.log(arr);

// Округлите эти дроби до одного знака в дробной части.
arr = [1.456, 2.125, 3.32, 4.1, 5.34];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(1);
}
console.log(arr);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
arr = ['hello', ' http://hello.by', 'star', 'http://star.ru', 'sfdshttp://fd'];
let item = 'http://';
for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(item) || arr[i].slice(0, 4) != 'http://') {
        arr.splice(i, 1);
    } 
}
console.log(arr);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
arr = ['file.html', 'sdf', '.html.efsd', 'index.html'];
item = '.html';
for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i].endsWith(item)) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] += arr[i] * 0.1;
}
console.log(arr);


// Заполните массив случайными числами из промежутка от 1 до 100.
arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

// Выведите в консоль все  символы с конца.
number = 12345;
arr = String(number).split('').reverse();
for (let i = 0; i < arr.length; i++){
    console.log(+arr[i]);
}

// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
arr = [1,2,3,4,5,6];
for (let i = 0; i < arr.length; i += 2) {
    console.log(arr.slice(i, i + 2));
}

// Даны два массива: Слейте эти массивы в новый массив:
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
newArr = arr1.concat(arr2);
console.log(newArr);
