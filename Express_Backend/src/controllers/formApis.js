const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')
const XLSX = require('xlsx')

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

  try {
    let data = [
      ['id', 'name', 'value'],
      [1, 'sheetjs', 7262],
      [2, 'js-xlsx', 6969],
    ]

    const entries = await formEntryRepo.getAllEntries()
    console.log(`entries[0] = ${JSON.stringify(entries[0])}`)


    // let workbook = XLSX.utils.book_new()
    // workbook.Props = {
    //   Title: 'Form Data',
    // }
    // workbook.SheetNames.push('form entries')
    // workbook.Sheets['Form sheet'] = XLSX.utils.aoa_to_sheet(data.data)

    let fileName = 'form_data.xlsx'
    // res.setHeader('Content-disposition', 'attachment; filename=' + fileName)
    // res.setHeader('Content-type', 'application/xlsx')
    res.send('workbook')
  } catch (e) {}
})

module.exports = router