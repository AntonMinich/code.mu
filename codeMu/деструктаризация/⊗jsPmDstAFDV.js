// #1
function funcDay() {
	return (new Date).getDate();
}
function funcYear() {
    return(new Date).getFullYear();
}
let arr = [, 12,];
let [year = funcYear(), month, day = funcDay()] = arr;
console.log(year + ' ' + month + ' ' + day);