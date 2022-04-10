class EmployeePayRollData {
    id;
    salary;
    name;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.salary = params[2];
        this.name = params[1];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get getDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        return this.startDate.toLocaleDateString("en-US", options);
    }

    set setDate(date) {


        this.startDate = date;
    }

    get getGender() {
        return this.gender;
    }

    set setGender(gender) {
        if (gender == "M" || gender == "F") {
            this.gender = gender;
        } else {
            throw 'Invalid gender !!';
        }
    }

    get getSalary() {
        return this.salary;
    }

    set setSalary(salary) {
        if (salary > 0) {
            this.salary = salary;
        } else {
            throw 'Invalid salary !!';
        }
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
    employeePayRollData.setName = "John";
    console.log(employeePayRollData.getName);


    employeePayRollData.setSalary = 10;
    console.log(employeePayRollData.getSalary);

    employeePayRollData.setGender = "M";
    console.log(employeePayRollData.getGender);

    employeePayRollData.setDate = new Date();
    console.log(employeePayRollData.getDate);
} catch (e) {
    console.error(e);
}

let newEmployeePayRollData = new EmployeePayRollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayRollData.toString());

