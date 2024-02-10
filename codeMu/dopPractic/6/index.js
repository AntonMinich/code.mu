let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table = document.querySelector('#table');
let keys = Object.keys(employees[0]);

let trTitle = document.createElement('tr');

let tdName = document.createElement('td');
tdName.textContent = keys[0];
trTitle.appendChild(tdName);

let tdAge = document.createElement('td');
tdAge.textContent = keys[1];
trTitle.appendChild(tdAge);

let tdSalary = document.createElement('td');
tdSalary.textContent = keys[2];
trTitle.appendChild(tdSalary);

table.appendChild(trTitle);
trTitle.style.fontWeight = '900';


for (let employee of employees) {
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    tr.appendChild(td3);

    table.appendChild(tr);

    td2.addEventListener('click', function(){
        td2.textContent = +td2.textContent + 1;
    })

    td3.addEventListener('click', function(){
        td3.textContent = +td3.textContent + td3.textContent * 0.1;
    })
}

