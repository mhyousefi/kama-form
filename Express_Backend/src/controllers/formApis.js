const router = require('express').Router()

router.post('/addEntry', async (req, res) => {
  try {
    res.send('YOU HAVE ADDED AN ENTRY')
  } catch (e) {}
})

module.exports = router