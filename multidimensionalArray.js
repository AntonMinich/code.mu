// Дан следующий массив: Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);


arr = [[1, 2], [3, 4], [5, 6]];
sum = 0;
for (let elem of arr) {
    for (let subElem of elem) {
        sum += subElem;
    }
}
console.log(sum);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
sum = 0;
for (let elem of arr) {
    for (let subElem of elem) {
        for (let subSubElem of subElem) {
            sum += subSubElem;
        }
    }
}
console.log(sum);

arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);


// Вручную, без цикла, найдите сумму элементов этого массива.
arr = [
	[1, 2, 3, 
		[4, 5, 
			[6, 7]
		]
	],
	[8,
		[9, 10]
	]
];
sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
console.log(sum);

// С помощью вложенных циклов найдите сумму элементов этого массива.
arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;
for (let elem of arr) {
	for (let subElem of elem) {
		sum += subElem;
	}
}
console.log(sum);

arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);

// С помощью вложенных циклов найдите сумму элементов этого массива.
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let elem of arr) {
	for (let subElem of elem) {
		for (let subSubElem of subElem) {
			sum += subSubElem;
		}
	}
}
console.log(sum);

arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		for (let k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
		}
	}
}
console.log(sum);


// Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1);
	}
}
console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив: [	['x', 'x', 'x', 'x'],	['x', 'x', 'x', 'x'], 	['x', 'x', 'x', 'x'] ]
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 5; j++) {
		arr[i].push('x');
	}
}
console.log(arr);


// Сформируйте с помощью трех вложенных циклов следующий массив: [	[		[1, 2, 3, 4, 5],		[1, 2, 3, 4, 5],	],	[		[1, 2, 3, 4, 5],		[1, 2, 3, 4, 5],	],	[	[1, 2, 3, 4, 5], [1, 2, 3, 4, 5],]]
arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for(let j = 0; j < 2; j++) {
		arr[i][j] = [];
		for (let k = 0; k < 5; k++) {
			arr[i][j].push(k + 1);
		}
	}
}
console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив [[1, 2], [3, 4], [5, 6], [7, 8]]
arr = [];
let counter = 1;
for (let i = 0; i < 4; i++) {
	arr[i] = [];
	for (let j = 0; j < 2; j++) {
		arr[i].push(counter);
		counter++;
	}
}
console.log(arr);


// Сформируйте с помощью двух вложенных циклов следующий массив [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
arr = [];
counter = 2;
for (let i = 0; i < 4; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i].push(counter);
		counter +=2;
	}
}
console.log(arr);


// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

arr = [];
counter = 1;
for (let i = 0; i < 2; i++) {
	arr[i] = [];
	for (let j = 0; j < 2; j++) {
		arr[i][j] = [];
		for (let k = 0; k < 2; k++) {
			arr[i][j].push(counter);
			counter++;
		}
	}
}
console.log(arr);


// Найдите сумму элементов приведенного объекта.
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
};
sum = obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 + obj.key3.key2 + obj.key3.key3;

console.log(sum);

// Выведите на экран элемент 'b2' и элемент 'c1'.
obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj[2][2]);
console.log(obj[3][1]);

// Вручную, без цикла, найдите сумму всех элементов-чисел.
obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h;
console.log(sum);
