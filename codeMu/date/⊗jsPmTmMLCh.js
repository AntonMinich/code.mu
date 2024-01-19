let date = new Date(2000, 0, 1);
let now = new Date();
for(let year = date.getFullYear(); year <= now.getFullYear(); year+=1) {
    let month = 0;
    let date = new Date(year, month, 1);
        if (date.getDay() == 6 || date.getDay() == 0) {
            console.log(year + '-' + month + '-' + 1);
        }
}