// Создать копию массива, используя spread.
let originalArray = [1, 2, 3, 4, 5];
let copyArray = [...originalArray];
console.log(copyArray);

// Объединить два массива в один, используя spread.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3);



// Создать копию объекта, используя spread.
let originalObject = { a: 1, b: 2, c: 3 };

let copyObject = {...originalObject};
console.log(copyObject);


// Объединить два объекта в один, используя spread.
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let obj3 = {...object1, ...object2};
console.log(obj3);


// Создать копию массива и добавить новый элемент, используя spread.
originalArray = [1, 2, 3];
newElement = 4;
let result = [...originalArray, newElement];
console.log(result);




// Объединить массив и элемент в начале массива, используя spread.
let array = [2, 3, 4];
let newElement = 1;
result = [newElement, ...array];
console.log(result);


// Создать копию объекта и изменить значение свойства, используя spread.
originalObject = { name: 'John', age: 25 };
let newAge = 26;
copyObject = {...originalObject, age: newAge}
console.log(copyObject);



// Объединить объект с новым свойством, используя spread.
let person = { name: 'Alice' };
let additionalInfo = { age: 30, city: 'New York' };
result = {...person, ...additionalInfo};
console.log(result);



// Создать копию массива, исключив первый элемент, используя rest.
originalArray = [1, 2, 3, 4, 5];
copyArray = [...originalArray.slice(1)];
console.log(copyArray);



// Объединить массив и элементы в конце массива, используя spread.
array = [1, 2, 3];
let newElements = [4, 5, 6];
result = [...array, ...newElements];
console.log(result);


// Создать копию объекта, исключив указанные свойства, используя rest.
originalObject = { name: 'Bob', age: 28, city: 'London' };
let {age, ...res} = originalObject;
console.log(res);


// Объединить объект, изменив значение одного из свойств, используя spread.
person = { name: 'Charlie', age: 35, city: 'Paris' };
let updatedAge = 36;
result = {... person, age: updatedAge};
console.log(result)


// Создать копию массива, исключив последние элементы, используя rest.
originalArray = [10, 20, 30, 40, 50];
copyArray = [...originalArray.slice(0, originalArray.length-1)];
console.log(copyArray);



// Объединить массив и элемент в середине массива, используя spread.
array = [1, 2, 4, 5];
newElement = 3;
copyArray = [...array.slice(0, array.indexOf(4)), newElement, ...array.slice(array.indexOf(4))];
console.log(copyArray);

// Создать копию объекта, изменяя значения нескольких свойств, используя spread.
originalObject = { name: 'David', age: 42, city: 'Berlin' };
let updatedInfo = { age: 43, city: 'Munich' };
copyObject = {... originalObject, age: updatedInfo.age, city: updatedInfo.city};
console.log(copyObject);


// Объединить объект, исключив одно из свойств, используя spread.
person = { name: 'Eva', age: 27, city: 'Madrid' };
let propertyToRemove = 'city';
let {city, ...result1} = person;
console.log(result1); 




// Создать копию массива с изменением порядка элементов, используя spread.
originalArray = [5, 4, 3, 2, 1];
result = [...originalArray.reverse()];
console.log(result);



// Объединить массив и часть другого массива, используя spread.
array1 = [1, 2, 3];
array2 = [4, 5, 6, 7, 8];
array3 = [...array1, ...array2];
console.log(array3);



// Создать точную копию объекта без изменений, используя spread.
originalObject = { a: 1, b: 2, c: 3 };
copyObject = {...originalObject};
console.log(copyObject);



// Объединить объект, изменяя значения всех его свойств, используя spread.
person = { name: 'Frank', age: 50, city: 'Stockholm' };
updatedInfo = { name: 'Franklin', age: 51, city: 'Oslo' };
result = {...person, name: updatedInfo.name, age: updatedInfo.age, city: updatedInfo.city};
console.log(result);



