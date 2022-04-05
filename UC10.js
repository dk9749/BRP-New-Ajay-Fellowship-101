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
console.log("Daily hours worked and wage: "+empDailyHoursAndWageArray)


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