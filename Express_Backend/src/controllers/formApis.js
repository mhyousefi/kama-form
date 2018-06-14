const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')
var json2xls = require('json2xls');
var path = require('path')
var multer = require('multer');
var os = require('os');
var uploadsDir = os.homedir() + '/uploads';
var zipFolder = require('zip-folder');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + Math.round(Math.random()*1000) + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

zipFolderPromise = function (x, y) {
  return new Promise((resolve, reject)=> {
    zipFolder(x, y, resolve)
  })
}
router.get('/getUploads', async (req, res) => {
  let result = `/tmp/uploads ${Date.now()}.zip`
  await zipFolderPromise(uploadsDir, result)
  res.contentType('application/zip')
  res.sendFile(result)
})

router.post('/addEntry',upload.single('file'), async (req, res) => {
  try {
    let params = await req.body
    params = JSON.parse(params.formData)
    const fileName = req.file.filename()
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
