// #1
function func() {
    return ['Jonh', 'Smit', 'development', 'programmer', 2000];
}
let [name, surname, department, position, salary] = func();
console.log(name + ' ' + surname);