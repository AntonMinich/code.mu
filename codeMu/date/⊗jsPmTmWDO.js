// #1
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date = new Date();
let monthNow = date.getMonth();
console.log('текущий месяц - ' + months[monthNow]);