const absent = 0, isFullTime = 1, isPartTime = 2, wagePerHour = 20;
let random = Math.floor(Math.random() * 10) % 3;
switch (random) {
    case 0:
        console.log("Employee is absent, Employeee wage: 0");
        break;
    case 1:
        console.log("Full time Employeee wage: " + wagePerHour * 8);
        break;
    case 2:
        console.log("Part time Employeee wage: " + wagePerHour * 4);
        break;
}
