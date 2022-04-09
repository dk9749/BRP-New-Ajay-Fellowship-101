class EmployeePayRollData {
    id;
    salary;
    name;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.salary = params[1];
        this.name = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            this.name = name;
        }
        else {
            throw 'Name is incorrect !!';
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " +
            this.gender + ", startDate = " + empDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1, "mark", 30000);
console.log(employeePayRollData.toString());

try {
    employeePayRollData.setName = "john";
    console.log(employeePayRollData.getName);
} catch (e) {
    console.error(e);
}

let newEmployeePayRollData = new EmployeePayRollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayRollData.toString());
