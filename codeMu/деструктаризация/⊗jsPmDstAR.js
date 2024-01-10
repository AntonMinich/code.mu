// #1
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...otherInfo] = arr;
console.log(name + ' ' + surname);
console.log(otherInfo);