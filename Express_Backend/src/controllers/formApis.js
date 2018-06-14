const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')

router.post('/addEntry', async (req, res) => {
  try {
    const newEntry = {
      id: 'newFormEntry.id',
      firstName: 'newFormEntry.firstName',
      lastName: 'newFormEntry.lastName',
      nationalId: 'newFormEntry.nationalId',
      phoneNumber: 'newFormEntry.phoneNumber',
      email: 'newFormEntry.email',

      isUtStudent: true,
      bachelorsId: 'newFormEntry.bachelorsId',
      bachelorsClass: 'newFormEntry.bachelorsClass',
      masterId: 'newFormEntry.masterId',
      masterClass: 'newFormEntry.masterClass',
      masterInfo: 'newFormEntry.masterInfo',
      phdId: 'newFormEntry.phdId',
      phdClass: 'newFormEntry.phdClass',
      phdInfo: 'newFormEntry.phdInfo',

      areasOfInterest: JSON.stringify(['A', 'B']),
      areasOfInterestMoreInfo: 'newFormEntry.areasOfInterestMoreInfo',

      isWeekly: true,
      weeklyHours: JSON.stringify(['11', '22']),
      isWorkshop: true,
      workshopDuration: 10,
    }
    await formEntryRepo.addFormEntry(newEntry)
    res.send('YOU HAVE ADDED AN ENTRY')
  } catch (e) {}
})

router.get('/getFormEntryById', async (req, res) => {
  let formEntry = await formEntryRepo.getFormEntryByID('newFormEntry.id')
  res.send(JSON.stringify(formEntry))
})

module.exports = router