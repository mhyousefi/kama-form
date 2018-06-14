import { checkStatus, parseJSON, apiUrls } from '../utils/ApiUtils'

export const addFormEntryApi = async (newEntry) => {
  return fetch (apiUrls['addEntry'], {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: newEntry.firstName,
      lastName: newEntry.lastName,
      nationalId: newEntry.nationalId,
      phoneNumber: newEntry.phoneNumber,
      email: newEntry.email,

      isUtStudent: newEntry.isUtStudent,
      bachelorsId: newEntry.bachelorsId,
      bachelorsClass: newEntry.bachelorsClass,
      masterId: newEntry.masterId,
      masterClass: newEntry.masterClass,
      masterInfo: newEntry.masterInfo,
      phdId: newEntry.phdId,
      phdClass: newEntry.phdClass,
      phdInfo: newEntry.phdInfo,

      areasOfInterest: JSON.stringify(newEntry.areasOfInterest),
      areasOfInterestMoreInfo: newEntry.areasOfInterestMoreInfo,

      isWeekly: newEntry.isWeekly,
      weeklyHours: JSON.stringify(newEntry.weeklyHours),
      isWorkshop: newEntry.isWorkshop,
      workshopDuration: newEntry.workshopDuration,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(function (response) {
      console.log(`response = ${JSON.stringify(response)}`)
      return response.status === 'OK';
    }).catch(function (error) {
      console.log("Fetch error ==> " + error.message)
      return false
    })
}

export const uploadFile = (file) => {
  return fetch (apiUrls['uploadFile'], {
    method: 'POST',
    headers: {
      "Content-Type": "application/pdf"
    },
    body: file
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(function (response) {
      console.log(`response = ${JSON.stringify(response)}`)
      return response.status === 'OK';
    }).catch(function (error) {
    console.log("Fetch error ==> " + error.message)
    return false
  })
}
