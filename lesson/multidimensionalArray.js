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


// Используя циклы, найдите сумму элементов этого объекта.
obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};
sum = 0;
for (let key in obj) {
	let subObj = obj[key];
	for (let subKey in subObj) {
		sum += subObj[subKey];
	}
}
console.log(sum);


// Используя циклы, найдите сумму элементов этого объекта.
obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
};
sum = 0;
for (let key in obj) {
	let subObj = obj[key];
	for (let subKey in subObj) {
		let subSubObj = subObj[subKey];
		for (let subSubKey in subSubObj) {
			sum += subSubObj[subSubKey];
		}
	}
}
console.log(sum);


// Выведите на экран первого студента из третьей группы.
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);

// Выведите поочередно на экран все студентов
students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
for (let key in students) {
	for (let i = 0; i < students[key].length; i++)
	console.log(students[key][i]);
}

students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
for (let key in students) {
		for (let name of students[key])
	console.log(name);
}

// С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

for (let key in data) {
	for (let date of data[key]) {
		console.log(date);
	}
}

// С помощью вложенных циклов выведите на экран все строки с данными.
data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let elem of data) {
	for (let key in elem) {
		console.log(elem[key]);
	}
}

// С помощью вложенных циклов выведите на экран все строки с данными.
data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let elem of data) {
	for (let key in elem) {
		for (let subElem of elem[key]) {
			console.log(subElem)
		}
	}
};


// Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let elem of employees) {
	console.log( elem.name + ' ' + elem.salary);
}

// Выведите на экран сумму зарплат всех работников.
employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

sum = 0;
for (let elem of employees) {
	sum += elem.salary;
}
console.log(sum);


// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

sum = 0;
for (let elem of employees) {
	if (elem.age >= 30) {
		sum += elem.salary;
	}
}
console.log(sum);

// Выведите на экран название месяца, соответствующее значениям переменных lang и month.
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'
let month = 5;

console.log(months[lang][month]);

// Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
};
let years = '2018';
month = 12;
let day = 30;
console.log(affairs[years][month][day]);


// Добавьте в следующий массив еще одного работника:
employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees.push({
	name: 'name4',
		salary: 400,
		age: 44,
});
console.log(employees);

// Добавьте еще одно дело в дату '2019-12-29', Добавьте еще два дела в дату '2019-12-31'
affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
};
affairs['2019-12-29'].push('data24');
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41', 'data42');

console.log(affairs);


// Добавьте нового студента в подгруппу 'subgroup11', .
students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
students.group1.subgroup11.push('student144');
// Добавьте в первую группу еще одну подгруппу
students.group1.subgroup13 = [];

// Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
students['group4'] = {};
students['group4'].subgroup41 = [];
students['group4'].subgroup41.push('student411', 'student422');

console.log(students);



// Напишите код, который выведет сумму всех элементов этой матрицы.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum = 0;
for (let elem of matrix) {
	for (let subElem of elem) {
		sum += subElem;
	}
}
console.log(sum);


// Напишите код, который выведет все дела на среду (Wednesday).
let schedule = {
    'Monday': ['Meeting', 'Lunch'],
    'Tuesday': ['Workout', 'Dinner'],
    'Wednesday': ['Coding', 'Break'],
};

for (let key in schedule) {
	if (key == 'Wednesday') {
		for (let elem of schedule[key]) {
			console.log(elem);
		}
	}
}



// Напишите код, который выведет все хобби каждого человека.
data = [
    {
        name: 'John',
        age: 25,
        hobbies: ['Reading', 'Swimming']
    },
    {
        name: 'Alice',
        age: 30,
        hobbies: ['Gardening', 'Painting']
    },
];
for (let elem of data) {
	for (let key in elem) {
		if (key == 'hobbies') {
			console.log(elem['name'] + ' ' + elem[key]);
		}
	}
}

// 

data = [
    {
        name: 'John',
        age: 25,
        hobbies: ['Reading', 'Swimming']
    },
    {
        name: 'Alice',
        age: 30,
        hobbies: ['Gardening', 'Painting']
    },
];
for (let elem of data) {
	console.log(elem.name + ' hobbies: ' + elem.hobbies.join(', '));
}


// Напишите код, который выведет всех сотрудников в отделе "development".
let organization = {
    name: 'ABC Corp',
    departments: {
        sales: ['John', 'Alice', 'Bob'],
        marketing: ['Charlie', 'David'],
        development: ['Eva', 'Frank', 'Grace']
    }
};
let developmentEmployees = organization.departments.development;
console.log(developmentEmployees);




// Напишите код, который выведет сумму всех элементов в нечетных строках 
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
	[10, 11, 12]
];
sum = 0;
for (let i = 0; i < grid.length; i++) {
	if (i % 2 != 0) {
		for (let elem of grid[i]) {
			sum += elem;
		}
	}
}
console.log(sum);