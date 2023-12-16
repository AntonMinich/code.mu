// Перебор массива циклом for-of

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    console.log(elem);
}

// Перебор объекта циклом for-in

let obj = {
    name: 'Ivan',
    surname: 'Kulibin',
    age: 103,
    location: 'USSR'
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}


// Цикл while

let i = 0;
while (i <= 15) {
    console.log (i)
    i++
}

let r = 0;
while (r <= 3) {
    console.log ('Wow')
    r++
}

// Цикл for

for (let i = 0; i <= 10; i++) {
    console.log(i);
}