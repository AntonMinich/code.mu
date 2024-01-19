// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let result = (now - date) / (1000);
console.log(Math.round(result));

// #2
now = new Date();
date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
result = (date - now) / 1000;
console.log(Math.round(result));

// #3
now = new Date();
date = new Date(now.getFullYear() + 1, 0, 1);
result = (date - now) / (1000 * 60 * 60 * 24);
console.log(Math.round(result));

// #4
now = new Date();
let count = 0;
for (let month = 0; month <= 11; month++){
    let dayFriday = new Date(now.getFullYear(), month, 13);
    if (dayFriday.getDay() == 5) {
        count++;
    }
}
console.log(count);

// №5
now = new Date();
let year = new Date(now.getFullYear(), now.getMonth() - 3);
console.log(year.getFullYear());


// #6
now = new Date();
date = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log(date.getDay());
console.log(date);


// #7
now = new Date();
year = new Date(now.getFullYear())
if (year % 4 == 0 && year % 100 !== 0 )  {
    console.log('Високосный год');
} else {
    console.log('Обычный год');
}

// #8
now = new Date();
year = new Date(now.getFullYear() - 1);
for (let i = Number(year); i >= Number(year) - 4; i--) {
    if(i % 4 == 0 && i % 100 != 0) {
        console.log(i + '- предыдущий Високосный год');
        break;
    }
}

// #9
now = new Date();
year = new Date(now.getFullYear() + 1);
for (let i = Number(year); i <= Number(year) + 4; i++) {
    if (i % 4 == 0 && i % 100 != 0) {
        console.log(i + ' - следующий високосный год');
        break;
    }
}


