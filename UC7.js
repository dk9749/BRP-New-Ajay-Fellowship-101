const totalWorkingDays = 20, totalWorkingHours = 160, partTimeHour = 4, fullTimeHour = 8, wagePerHour = 20, isAbsent = 0; isFullTime = 1, isPartTime = 2;
let empWage = 0, maxDays = 0; maxHours = 0;
let empDailyWageArray = new Array();
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
    maxHours += totalHrs;

}
let totalWage = 0;
function totalEmpWage(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArray.forEach(totalEmpWage);
// console.log("Total employee wage: " + totalWage);

let count = 0;
function dayWithWageUsingMap(dailyWage) {
    count++;
    return count + " = " + dailyWage;
}
let dayWithWageMap = empDailyWageArray.map(dayWithWageUsingMap)
// console.log("Daily Wage using map: ")
// console.log(dayWithWageMap);

function fullTimeWageDay(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = dayWithWageMap.filter(fullTimeWageDay);
// console.log("Day of fullTime wage earned: ");
// console.log(fullDayWageArray);

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
// console.log("First time full time wage earned on the day: " + dayWithWageMap.find(findFullTimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
// console.log("Checking all element have fulltime wage: "+fullDayWageArray.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
// console.log("Checking if any part time wage: "+ dayWithWageMap.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1
    return numOfDays;
}
console.log("Total number of days Employee worked: " + empDailyWageArray.reduce(totalDaysWorked, 0));