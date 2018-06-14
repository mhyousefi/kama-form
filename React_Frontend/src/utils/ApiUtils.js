export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const parseJSON = (response) => {
  return response.json()
}

export const apiUrls = {
  'addEntry': 'http://localhost:3001/api/addEntry',
  'getEntryById': 'http://localhost:3001/api/getEntryById',
  'getAllEntries': 'http://localhost:3001/api/getAllEntries',
  'uploadFile': 'http://localhost:3001/api/uploadFile'
}