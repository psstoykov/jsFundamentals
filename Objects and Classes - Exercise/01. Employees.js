function solve(array) {

    class Employees {
        constructor(name, number) {
            this.employeeName = name;
            this.personalNum = number;
        }
    }

    for (let employee of array) {
        let num = employee.length;
        let name = employee;
        let emp = new Employees(name, num);
        console.log(`Name: ${emp.employeeName} -- Personal Number: ${emp.personalNum}`)
    }
};

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);

// solve([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);