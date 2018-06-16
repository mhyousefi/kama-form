import { checkStatus, parseJSON, apiUrls } from '../utils/ApiUtils'

export const addFormEntryApi = async (newEntry, file) => {
  let body = new FormData();
  body.append('file', file)
  body.append('formData', JSON.stringify({
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
    otherUnivInfo: newEntry.otherUnivInfo,

    areasOfInterest: JSON.stringify(newEntry.areasOfInterest),
    areasOfInterestMoreInfo: newEntry.areasOfInterestMoreInfo,

    isWeekly: newEntry.isWeekly,
    weeklyHours: JSON.stringify(newEntry.weeklyHours),
    isWorkshop: newEntry.isWorkshop,
    workshopDuration: newEntry.workshopDuration,
  }))

  let requestUrl = apiUrls['addEntry_http']

  if (window.location.protocol === 'https:') {
    requestUrl = apiUrls['addEntry_https']
  }

  return fetch (requestUrl, {
    method: 'POST',
    mode: 'cors',
    body: body,
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
