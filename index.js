// Your code here
const createEmployeeRecord = (recArray) => {
  return{
    firstName: recArray[0],
    familyName: recArray[1],
    title: recArray[2],
    payPerHour: recArray[3],
    timeInEvents:[],
    timeOutEvents:[]
  }  
}

// const createEmployeeRecords = (recordsArray) => {
//   return recordsArray.map(rec => createEmployeeRecord(rec))
// }

const createEmployeeRecords = function(recordsArray){
  return recordsArray.map(function(rec){
    return createEmployeeRecord(rec)
  })
}

const createTimeInEvent = function (createEmployeeRecord, dateStamp) {
  // createEmployeeRecord 
  const [date, hour] = dateStamp.split(" ")
  
  // const arrFromDate = dateStamp.split(' ')
  // const date = arrFromDate[0]
  // const hour = arrFromDate[1]

  const inEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  }
  createTimeInEvent.timeInEvents.push(inEvent)
  return createTimeInEvent
}

const createTimeOutEvent = function (createEmployeeRecord, dateStamp) {
  // createEmployeeRecord 
  const [date, hour] = dateStamp.split(" ")

  const outEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  }
  createTimeOutEvent.timeOutEvents.push(outEvent)
  return createTimeOutEvent
}
