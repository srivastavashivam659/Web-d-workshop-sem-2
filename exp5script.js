let employees = [];
function addDetail() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("sal").value);
    let department = document.getElementById("dept").value;

    if (name === "" || id === "" || isNaN(salary) || department === "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("sal").value = "";
    document.getElementById("dept").value = "";
}

function DisplayEmp() {
    let output = "<h3>All Employees</h3>";
    if (employees.length === 0) {
        output += "No employees added yet.";
    }
    employees.forEach(emp => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ₹${emp.salary} |
        Department: ${emp.department} <br>
        `;
    });

    document.getElementById("result").innerHTML = output;
}

function Salary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "<h3>Employees with Salary > ₹50,000</h3>";

    if (filtered.length === 0) {
        output += "No employees found.";
    }

    filtered.forEach(emp => {
        output += `
        Name: ${emp.name} |
        Salary: ₹${emp.salary} <br>
        `;
    });

    document.getElementById("result").innerHTML = output;
}

function totalsal() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("result").innerHTML =
        "<h3>Total Salary: ₹" + total + "</h3>";
}

function avgsal() {
    if (employees.length === 0) {
        document.getElementById("result").innerHTML =
            "<h3>No employee records available</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("result").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

function countdep() {
    let count = {};

    employees.forEach(emp => {
        count[emp.department] = (count[emp.department] || 0) + 1;
    });

    let output = "<h3>Employee Count by Department</h3>";

    for (let dept in count) {
        output += `${dept}: ${count[dept]} <br>`;
    }

    document.getElementById("result").innerHTML = output;
}