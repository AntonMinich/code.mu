// Извлечь значения из массива с использованием деструктуризации.
let array = [1, 2, 3];
let [one, two, three] = array;
console.log(one, two, three);


// Извлечь значения из объекта с использованием деструктуризации.
let person = { name: 'John', age: 25 };
let {name, age} = person;
console.log(name, age);



// Передать массив в функцию и деструктурировать его внутри.
function processArray([a, b, c]) {
  console.log(a, b, c);
}
array = [4, 5, 6];
processArray(array)

  
  // Передать объект в функцию и деструктурировать его внутри.
function printInfo({ name, age }) {
    console.log(name, age);
  }
  person = { name: 'Alice', age: 30 };
  printInfo(person);

  


  // Извлечь первый элемент из массива, а остальные поместить в новый массив.
array = [1, 2, 3, 4, 5];
let [a, ...rest] = array;
console.log(a);
console.log(rest);



// Извлечь одно свойство из объекта, а остальные поместить в новый объект.
person = { name: 'Bob', age: 28, city: 'London' };
let {name, ...obj} = person;
console.log(name);
console.log(obj);



// Извлечь значения из массива, присваивая переменным значения по умолчанию.
array = [1, 2];
let [a = 3, b = 4, c = 5] = array;
console.log(a, b, c);




// Извлечь значения из объекта, присваивая переменным значения по умолчанию.
person = { name: 'Charlie', age: 35, city: 'Paris' };
let {name = 'Anton', age = 31, city = 'Minsk', country = 'Belarus'} = person;
console.log(name, age, city, country);



// Пройти по элементам массива с использованием деструктуризации в цикле.
array = [[1, 2], [3, 4], [5, 6]];





// Пройти по свойствам объекта с использованием деструктуризации в цикле.
person = { name: 'David', age: 42, city: 'Berlin' };




// Передать массив в функцию и деструктурировать его в параметрах.
function processNumbers([x, y, z]) {
    // ...
  }
  let numbers = [7, 8, 9];

  

  // Передать объект в функцию и деструктурировать его в параметрах.
function displayDetails({ title, author, year }) {
    console.log(title, author, year);
  }
  let book = { title: 'JavaScript Basics', author: 'Jane Doe', year: 2022 };
  displayDetails(book);
  

  // Извлечь значения из массива с использованием деструктуризации и динамическими ключами.
array = { '1': 'one', '2': 'two', '3': 'three' };
let {'1':first, '2':second, '3':third} = array;
console.log(first, second, third);



// Извлечь значения из объекта с использованием деструктуризации и динамическими свойствами.
let data = { key1: 'value1', key2: 'value2', key3: 'value3' };
let { key1: first, key2: second, key3: third } = data;
console.log(first, second, third);




// Извлечь значения из массива с вложенными массивами, используя деструктуризацию.
let nestedArray = [1, [2, 3], [4, 5, 6]];
let [one, [two, three], [four, five, six]] = nestedArray;
console.log(one, two, three, four, five, six);



// Извлечь значения из объекта с вложенными объектами, используя деструктуризацию.
let nestedObject = { prop1: 'value1', prop2: { nestedProp1: 'value2', nestedProp2: 'value3' } };
let {prop1: val1, prop2:{nestedProp1: val2, nestedProp2: val3}} = nestedObject;
console.log(val1, val2, val3);



// Извлечь значения из массива с использованием деструктуризации и условия.
array = [1, 2, 3];
let [one, two, three] = array;
console.log(one, two, three);



// Извлечь значения из объекта с использованием деструктуризации и условия.
person = { name: 'Eva', age: 27, city: 'Madrid' };
let {name: name, age: age, city: city} = person;
console.log(name, age, city);


