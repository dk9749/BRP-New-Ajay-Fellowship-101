const totalWorkingDays = 20, totalWorkingHours = 160, partTimeHour = 4, fullTimeHour = 8, wagePerHour = 20, isAbsent = 0; isFullTime = 1, isPartTime = 2;
let empWage = 0, maxDays = 0; maxHours = 0;
while (maxDays < totalWorkingDays && maxHours < totalWorkingHours) {
    let random = Math.floor(Math.random() * 10) % 3;
    switch (random) {
        case 0:
            empWage += 0;
            break;
        case 1:
            empWage += wagePerHour * fullTimeHour;
            maxDays++;
            maxHours += fullTimeHour;
            break;
        case 2:
            empWage += wagePerHour * partTimeHour;
            maxDays++;
            maxHours += partTimeHour;
            break;
    }

}
console.log("Total Working Days: " + maxDays + ", Total Working Hours: " + maxHours + " & Employee Total Wage: " + empWage);