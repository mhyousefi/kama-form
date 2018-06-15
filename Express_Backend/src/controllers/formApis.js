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

router.post('/addEntry',upload.single('file'), async (req, res) => {
  try {
    let params = await req.body
    console.log(params)
    console.log(params.formData)
    // params = JSON.parse(params.formData)
    // const fileName = req.file.filename
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
      // resumeFilename: fileName,
    }
    await formEntryRepo.addFormEntry(newEntry)
    res.send(JSON.stringify({status: 'OK'}))
  } catch (e) {
    console.log(`Error: ${e.message}`)
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
      // entries.forEach((item) => {
      //   item.areasOfInterest = JSON.parse(item.areasOfInterest)
      //   item.weeklyHours = JSON.parse(item.weeklyHours)
      // })
      res.send(JSON.stringify(entries))
    } else {}
  } catch (e) {}
})

router.get('/kama-93-summer-private/getResumes', async (req, res) => {
  let result = `/tmp/uploads ${Date.now()}.zip`
  await zipFolderPromise(uploadsDir, result)
  res.contentType('application/zip')
  res.sendFile(result)
})

router.get('/kama-93-summer-private/getAllResults', async (req, res) => {
  let excelData = []
  const entries = await formEntryRepo.getAllEntries()
  entries.forEach((item) => {
    let excelRow = {
      id: item.id,
      'نام': item.firstName,
      'نام خانوادگی': item.lastName,
      'کد ملی': item.nationalId,
      'ایمیل': item.email,
      'شماره تلفن': item.phoneNumber,

      'دانشجوی دانشگاه تهران؟': item.isUtStudent,
      'شماره دانشجویی کارشناسی': item.bachelorsId,
      'سال ورودی کارشناسی': item.bachelorsClass,
      'شماره دانشجویی کارشناسی ارشد': item.masterId,
      'سال ورودی کارشناسی ارشد': item.masterClass,
      'جزئیات کارشناسی ارشد': item.masterInfo,
      'شماره دانشجویی دکتری': item.phdId,
      'سال ورودی دکتری': item.phdClass,
      'جزئیات دکتری': item.phdInfo,
      'اطلاعات دانشگاه دیگر': item.otherUnivInfo,
      'حوزه های مورد علاقه': item.areasOfInterest,
      'جزئیات': item.areasOfInterestMoreInfo,
      'کلاس های هفتگی': item.isWeekly,
      'شنبه': item.weeklyHours[0],
      'یک شنبه': item.weeklyHours[1],
      'دو شنبه': item.weeklyHours[2],
      'سه شنبه': item.weeklyHours[3],
      'چهار شنبه': item.weeklyHours[4],
      'پنج شنبه': item.weeklyHours[5],
      'فشرده - کارگاهی': item.isWorkshop,
      'مدت کارگاه': item.workshopDuration,
      'تجربه تدریس؟': item.hasExperience,
      'جزئیات تدریس': item.experienceDetail,
    }
    excelData.push(excelRow)
  })
  res.xls('KAMA-form.xlsx', excelData)
})

module.exports = router
