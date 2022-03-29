const totalWorkingDays = 20, partTimeHour = 4, fullTimeHour = 8, wagePerHour = 20, isAbsent = 0; isFullTime = 1, isPartTime = 2;
let empWage = 0, i = 0;
while (i <= totalWorkingDays) {
    let random = Math.floor(Math.random() * 10) % 3;
    switch (random) {
        case 0:
            empWage += 0;
            break;
        case 1:
            empWage += wagePerHour * fullTimeHour;
            break;
        case 2:
            empWage += wagePerHour * partTimeHour;
            break;
    }
    i++;
}
console.log("Total Employee Wage: " + empWage);