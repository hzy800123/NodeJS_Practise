const express = require('express')
const router = express.Router()
// const router = express()

router.get('/add', (req, res) => {
  console.log('user add here')
  res.send('user add !!!')
})

router.get('/del', (req, res) => {
  console.log('user del here')
  res.send('user del !!!')
})

module.exports = router
