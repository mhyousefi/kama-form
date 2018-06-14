const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')

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
    res.send('House added successfully!')
  } catch (e) {}
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

module.exports = router