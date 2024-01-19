// #1
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
if (date < now) {
    console.log('Полдень уже был');
} else {
    console.log('Полдень еще будет');
}

// #2
now = new Date();
date = new Date(now.getFullYear(), now.getMonth(), 15);
if (date > now) {
    console.log('Первая половина');
} else {
    console.log('Вторая половина');
}