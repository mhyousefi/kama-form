const router = require('express').Router()
const formEntryRepo = require('../domain/formEntryRepo')
var json2xls = require('json2xls');
var path = require('path')
var multer = require('multer');
var os = require('os');
var home = os.homedir();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, home+'/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + Math.round(Math.random()*1000) + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

router.post('/addEntry',upload.single('file'), async (req, res) => {
  try {
    let params = await req.body
    params = JSON.parse(params.formData)
    // const fileName = req.file.filename()
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
