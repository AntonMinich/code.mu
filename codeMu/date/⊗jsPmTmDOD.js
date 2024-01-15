// #1
let firstDate = new Date(2000, 8, 1);
let secondDate = new Date(2010, 1, 15);
let diff = secondDate - firstDate;
console.log(diff);

// #2
firstDate = new Date(2000, 8, 1);
secondDate = new Date(2010, 1, 15);
diff = (secondDate - firstDate) / (1000 * 60 * 60 * 24);
console.log(diff);

// #3
firstDate = new Date(2000, 8, 1);
secondDate = new Date(2010, 1, 15);
diff = ((secondDate - firstDate) / (1000 * 60 * 60 * 24 * 30)) - firstDate.getMonth() + secondDate.getMonth();
console.log(Math.floor(diff));

// #4
firstDate = new Date(2000, 8, 1);
secondDate = new Date(2010, 1, 15);
diff = ((secondDate - firstDate) / (1000 * 60 * 60 * 24 * 30 * 12));
console.log(Math.round(diff));