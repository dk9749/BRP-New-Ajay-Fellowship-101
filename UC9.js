const totalWorkingDays = 20, totalWorkingHours = 160, partTimeHour = 4, fullTimeHour = 8, wagePerHour = 20, isAbsent = 0; isFullTime = 1, isPartTime = 2;
let empWage = 0, maxDays = 0; maxHours = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
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
    empDailyWageMap.set(maxDays, calcDailyWage(totalHrs));
    empDailyHrsMap.set(maxDays, totalHrs);
    maxHours += totalHrs;
}

const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee wage with arrow:- " + " Total hours: " + totalHours + ", total wage: " + totalSalary);

let noneWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else noneWorkingDays.push(key);
});
console.log("Full working days: "+ fullWorkingDays);
console.log("Part Working days: "+ partWorkingDays);
console.log("None working days: "+ noneWorkingDays);