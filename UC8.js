const totalWorkingDays = 20, totalWorkingHours = 160, partTimeHour = 4, fullTimeHour = 8, wagePerHour = 20, isAbsent = 0; isFullTime = 1, isPartTime = 2;
let empWage = 0, maxDays = 0; maxHours = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
function getWorkingHr(random) {
    switch (random) {
        case 0:
            return 0;
        case 1:
            return fullTimeHour;
        case 2:
            return partTimeHour;
    }
}
function calcDailyWage(maxHours) {
    return maxHours * wagePerHour;
}

while (maxDays < totalWorkingDays && maxHours < totalWorkingHours) {
    maxDays++;
    let random = Math.floor(Math.random() * 10) % 3;
    let totalHrs = getWorkingHr(random);
    empDailyWageArray.push(calcDailyWage(totalHrs));
    empDailyWageMap.set(maxDays,calcDailyWage(totalHrs));
    maxHours += totalHrs;
}

console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;
}
console.log("Employee Wage map total hours: "+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));