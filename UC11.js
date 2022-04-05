const maxWorkingHours = 160, maxWorkingDays = 20, fullTimeHour = 8, partTimeHour = 4, wagePerHour = 20;
let totalEmpHrs = 0, totalWorkingDays = 0, empDailyHoursAndWageArray = new Array();
while (totalEmpHrs < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    totalWorkingDays++;
    let random = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHr(random);
    totalEmpHrs += empHrs;
    empDailyHoursAndWageArray.push({
        dayNum: totalWorkingDays,
        dailyHrs: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working hours ' + this.dailyHrs + ' And wage ' + this.dailyWage
        }
    });
}

function getWorkingHr(random) {
    switch (random) {
        case 0:
            return 0;
            break;
        case 1:
            return fullTimeHour;
            break;
        case 2:
            return partTimeHour;
            break;
    }
}

function calcDailyWage(maxHours) {
    return maxHours * wagePerHour;
}

let totalWages = empDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHrs, 0);
// console.log("Total hours: " + totalHours + " and total wages: " + totalWages);

// process.stdout.write("Logging full working days:-")
// empDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 8)
//     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArray = empDailyHoursAndWageArray
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
// console.log("Part time working day strings: " + partWorkingDayStrArray);

let noneWorkingDaysNums = empDailyHoursAndWageArray
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non working days: " + noneWorkingDaysNums);