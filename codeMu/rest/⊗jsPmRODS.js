// #1
function func(...numbers) {
    let sum = numbers.reduce((sum,elem) => sum += elem, 0);
    return sum;
}
let res = func(1,2,3,4,5);
console.log(res);