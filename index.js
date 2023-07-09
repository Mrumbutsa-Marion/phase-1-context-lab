/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// Your code here
function createEmployeeRecord (firstName, familyName, title, payPerHour){
    return{
        firstName: firstName, 
        familyName: familyName, 
        title: title, 
        payPerHour: PerHour, 
        timeInEvents:[],
        timeOutEvents:[]
    };
}
//createEmployeeRecords
function createEmployeeRecords(employeeData){
    return employeeData.map(function(data){
        return createEmployeeRecords(...data);
    })
}

//createTimeOutEvent

function createTimeOutEvent(employeeRecord, dataStamp){
    const [date, hour] = dataStamp.split("");
    employeeRecord.timeInEvents.push({
        type: "Timein",
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord
}

//hoursWorkedOnDate
function hoursWorkedOnDate(employeeRecord, date){
    const timeIn = employeeRecord.employeeRecord.timeInEvents.find(
        events => event.date === date
    );
    const timeOut = employeeRecord.createTimeOutEvent.find(
         events => event.date === date
    );
    return (timeOut.hour - timeIn.hour)/100;
}

//wagesEarnedOnDate
function wagesEarnedOnDate(employeeRecord, date){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;

    return hoursWorked * payRate;
}

//allWagesFor

//calculatePayroll
function calculatePayroll(employeeRecord){
    let totalPayRoll =  0;
    for(const employeeRecord of employeeRecord){
        totalPayRoll += allWagesFor(employeeRecord);
    }
    return totalPayRoll
}
