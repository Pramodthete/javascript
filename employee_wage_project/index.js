//UC1
//Ability to Check Employee is
// present or Absent - Use Math.Random to check

function isPresent() {
    let p = Math.floor(Math.random() * 2);
    if (p == 0) {
        return false;
    } else {
        return true;
    }
}


//UC2 and UC3
//Ability to Calculate Daily Employee Wage based on
// part time or full time work
function isPartTime() {
    let t = Math.floor(Math.random() * 2);
    if (t == 0) {
        return 0;
    } else {
        return 1;
    }
}

function dailyWage(x) {
    let perHourWage = 20;
    let partTime = 4; // 4 hours
    let fullTime = 8; // 8 hours

    console.log("Per Hour Wage : " + perHourWage + " $");

    switch (x) {
        case 0://full time
            return perHourWage * fullTime;
        case 1: // part time
            return perHourWage * partTime;
    }
}



//UC4 + UC5
//Calculating Wages for
// a Month assuming 20 Working Days in a Month
let monthWage = 0;

function monthlyWage() {
    let days = 0;
    let d = 0;
    if (isPartTime() == 0) {
        for (let i = 0; i < 20; i++) {
            if (isPresent() == true) {
                days++;
            }
        }
        console.log("\nThis is a Full Time Employer (8 hours)");
        d = dailyWage(0);
    } else {
        for (let i = 0; i < 20; i++) {
            if (isPresent() == true) {
                days++;
            }
        }
        console.log("\nThis is a Part Time Employer (4 hours)");
        d = dailyWage(1);
    }
    console.log(`Total days Present in One Month : ${days} days`);
    console.log(`Total days Absent in One Month : ${20 - days} days`);
    return days * d;
}

console.log(`Net Monthly Salary : ${monthlyWage()} $\n`);