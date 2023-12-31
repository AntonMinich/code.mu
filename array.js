// Создайте массив с числами. Выведите его в консоль с помощью console.log.

let arrNum = [1,2,3,4,5,6];
console.log(arrNum);

// Создайте массив со строками. Выведите его  в консоль с помощью console.log.

let arrStr = ['Hi', 'what', 'are', 'you', 'doing'];
console.log(arrStr);

// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

arrNum = [1,2,3,4,5,6];
console.log(arrNum[0]);
console.log(arrNum[1]);
console.log(arrNum[2]);

// Выведите на экран сумму элементов этого массива.

arrNum = [1,2,3,4,5,6];
console.log (arrNum[0] + arrNum[1] + arrNum[2] + arrNum[3] + arrNum[4] + arrNum[5]);

// Выведите на экран строку элементов этого массива

arrStr = ['Hi', 'what', 'are', 'you', 'doing'];
console.log (arrStr[0] + ', ' + arrStr[1] + ' ' + arrStr[2] + ' ' + arrStr[3] + ' ' + arrStr[4] + '?');

// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

arrNum = [1,2,3,4,5,6];
console.log(arrNum.length);

// Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

arrNum = [1,2,3,4,5,6];
console.log(arrNum[arrNum.length-1]);

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

let arrCorrected = ['a', 'b', 'c'];
arrCorrected[0] = 1;
arrCorrected[1] = 2;
arrCorrected[2] = 3;
console.log(arrCorrected);


// Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.

let arrAddElement = ['a', 'b', 'c'];
arrAddElement[0] += 3;
arrAddElement[1] += 3;
arrAddElement[2] += 3;
console.log(arrAddElement);


// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
let arrIncrement = [1, 2, 3];
arrIncrement[0]++;
arrIncrement[1]++;
arrIncrement[2]++;
console.log(arrIncrement);

// создайте массив с элементами 1, 2 и 3.
let newArr = [];
let newArrPush = [];
newArr[0] = 1;
newArr[1] = 2;
newArr[3] = 4;
newArrPush.push(1);
newArrPush.push(2);
newArrPush.push(4);
console.log(newArr);
console.log(newArr.length);
console.log(newArrPush);
console.log(newArrPush.length);


// Ключи массивов из переменных 

arrNum = [1,2,3,4,5,6];
let key = 2;
console.log(arrNum[key]);
console.log(arrNum[2]);
console.log(arrNum[key] + arrNum[2]);


// Оператор delete в массивах

arrNum = [1,2,3,4,5,6];
delete arrNum[2];
delete arrNum[5];
console.log(arrNum);
console.log(arrNum.length);
console.log(arrNum[arrNum.length-1]);
console.log(arrNum[arrNum.length-2]);