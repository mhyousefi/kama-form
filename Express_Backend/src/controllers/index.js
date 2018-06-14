const router = require('express').Router()

router.use('/api', require('./formApis'))

module.exports = router