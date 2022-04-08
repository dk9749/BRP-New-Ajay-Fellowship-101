class EmployeePayRollData {
    id;
    salary;
    name;
    constructor(id, name, salary) {
        this.id = id;
        this.salary = salary;
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    toString() {
        return "Id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
    }
}

let employeePayRollData = new EmployeePayRollData(1, "mark", 30000);
console.log(employeePayRollData.toString());
employeePayRollData.setName="john";
console.log(employeePayRollData.getName);
