var button = document.querySelector('.addEmployee');
var set = document.querySelector('.setLimit');
var defaultLimit = 10;
var newLimit = null;
var firstNameDb = [];
var lastNameDb = [];

class Employee {
    constructor(employeeFirstName, employeeLastName, employeeSalary, employeePosition) {
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.employeeSalary = employeeSalary;
        this.employeePosition = employeePosition;
    }

    db() {
        firstNameDb.push(this.employeeFirstName);
        lastNameDb.push(this.employeeLastName);
    }

    addHtmlEmployee() {
        var newEmployee = document.querySelector('.employeeList');
        var newLi = document.createElement('li');
        newEmployee.appendChild(newLi);

        var newFirstName = document.createElement('span');
        newFirstName.className = 'employeeFirstName';
        newLi.appendChild(newFirstName);
        newFirstName.innerHTML = this.employeeFirstName;

        var newLastName = document.createElement('span');
        newFirstName.className = 'employeeLastName';
        newLi.appendChild(newLastName);
        newLastName.innerHTML = this.employeeLastName;

        var newSalaryName = document.createElement('span');
        newFirstName.className = 'employeeSalary';
        newLi.appendChild(newSalaryName);
        newSalaryName.innerHTML = '$ ' + this.employeeSalary;

        var newPositionName = document.createElement('span');
        newFirstName.className = 'employeePosition';
        newLi.appendChild(newPositionName);
        newPositionName.innerHTML = this.employeePosition;

        var totalNumber = document.querySelector('#totalNumber');
        totalNumber.innerHTML = +totalNumber.innerHTML + 1;

        var totalSalary = document.querySelector('#totalSalary');
        totalSalary.innerHTML = +totalSalary.innerHTML + +this.employeeSalary;

        var avSal = +totalSalary.innerHTML /  +totalNumber.innerHTML;
        var averageSalary = document.querySelector('#averageSalary');
        averageSalary.innerHTML = avSal;
    }
}

set.addEventListener('click', function getLimit() {
    return newLimit = document.getElementById('limit').value;
});

button.addEventListener('click', function getTarget() {
    if (typeof document.getElementById('firstname').value === 'string') {
        var jsFirstNameInput = document.getElementById('firstname').value;
    }
    if (typeof document.getElementById('lastname').value === 'string') {
        var jsLastNameInput = document.getElementById('lastname').value;
    }
    if (typeof document.getElementById('salary').value === 'string') {
        var jsSalaryInput = document.getElementById('salary').value;
    }
    if (typeof document.getElementById('position').value === 'string') {
        var jsPositionInput = document.getElementById('position').value;
    }
    var limit = +totalNumber.innerHTML;
    var averageSalary = +(document.querySelector('#averageSalary').innerHTML);
    var averageSalaryLimit = 2000;

    if (firstNameDb.includes(document.getElementById('firstname').value) && lastNameDb.includes(document.getElementById('lastname').value)){
        alert ('This user exists');
    } else {
        if (document.getElementById('firstname').value === '' &&
            document.getElementById('lastname').value === '' &&
            document.getElementById('salary').value === '' &&
            document.getElementById('position').value === '') {
            alert("Please, fill in all fields");
        } else {
            if (averageSalary < averageSalaryLimit) {
                if (newLimit !== null) {
                    if (limit < newLimit){
                        new Employee(jsFirstNameInput, jsLastNameInput, jsSalaryInput, jsPositionInput).addHtmlEmployee();
                        new Employee(jsFirstNameInput, jsLastNameInput, jsSalaryInput, jsPositionInput).db();
                    } else alert('Limit number of employees exceeded');
                } else {
                    if (limit < defaultLimit){
                        new Employee(jsFirstNameInput, jsLastNameInput, jsSalaryInput, jsPositionInput).addHtmlEmployee();
                        new Employee(jsFirstNameInput, jsLastNameInput, jsSalaryInput, jsPositionInput).db();
                    } else alert('Limit number of employees exceeded');
                }
            } else alert('Limit average salary exceeded');
        }

    }
    document.getElementById("form").reset();
});



