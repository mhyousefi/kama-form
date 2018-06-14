const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')
var json2xls = require('json2xls');

router.post('/addEntry', async (req, res) => {
  try {
    const params = req.body
    const entryCount = await formEntryRepo.getEntryCount()
    const newEntry = {
      id: entryCount.toString(),
      firstName: params.firstName,
      lastName: params.lastName,
      nationalId: params.nationalId,
      phoneNumber: params.phoneNumber,
      email: params.email,

      isUtStudent: params.isUtStudent,
      bachelorsId: params.bachelorsId,
      bachelorsClass: params.bachelorsClass,
      masterId: params.masterId,
      masterClass: params.masterClass,
      masterInfo: params.masterInfo,
      phdId: params.phdId,
      phdClass: params.phdClass,
      phdInfo: params.phdInfo,

      areasOfInterest: JSON.stringify(params.areasOfInterest),
      areasOfInterestMoreInfo: params.areasOfInterestMoreInfo,

      isWeekly: params.isWeekly,
      weeklyHours: JSON.stringify(params.weeklyHours),
      isWorkshop: params.isWorkshop,
      workshopDuration: params.workshopDuration,
    }
    await formEntryRepo.addFormEntry(newEntry)
    res.send(JSON.stringify({status: 'OK'}))
  } catch (e) {
    res.send(JSON.stringify({status: 'ERROR'}))
  }
})

router.get('/getEntryById', async (req, res) => {
  try {
    const id = req.body.id
    console.log(`id = ${id}`)
    const formEntry = await formEntryRepo.getFormEntryByID(id)
    if (formEntry) {
      res.send(JSON.stringify(formEntry))
    } else {}
  } catch (e) {}
})

router.get('/getAllEntries', async (req, res) => {
  try {
    const entries = await formEntryRepo.getAllEntries()
    if (entries) {
      res.send(JSON.stringify(entries))
    } else {}
  } catch (e) {}
})

router.post('/uploadFile', async (req, res) => {
  try {
    const rrr = req
    console.log(`REQUEST BODY IS =====> ${JSON.stringify(rrr)}`)
    res.send(JSON.stringify({status: 'OK'}))
  } catch (e) {}
})

router.get('/', async (req, res) => {
  let excelData = []
  const entries = await formEntryRepo.getAllEntries()
  entries.forEach((item) => {
    let excelRow = {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      nationalId: item.nationalId,
      email: item.email,
      phoneNumber: item.phoneNumber,
      isUtStudent: item.isUtStudent,
      bachelorsId: item.bachelorsId,
      bachelorsClass: item.bachelorsClass,
      masterId: item.masterId,
      masterClass: item.masterClass,
      masterInfo: item.masterInfo,
      phdId: item.phdId,
      phdClass: item.phdClass,
      phdInfo: item.phdInfo,
      otherUnivInfo: item.otherUnivInfo,
      areasOfInterest: item.areasOfInterest,
      areasOfInterestMoreInfo: item.areasOfInterestMoreInfo,
      isWeekly: item.isWeekly,
      weeklyHours: item.weeklyHours,
      isWorkshop: item.isWorkshop,
      workshopDuration: item.workshopDuration,
      hasExperience: item.hasExperience,
      experienceDetail: item.experienceDetail,
    }
    excelData.push(excelRow)
  })
  res.xls('KAMA-form.xlsx', excelData)
})

module.exports = router
