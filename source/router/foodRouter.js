const express = require('express')
const router = express.Router()

router.get('/add', (req, res) => {
  console.log('food add here')
  res.send('food add ! ! !')
})

router.get('/del', (req, res) => {
  console.log('food del here')
  res.send('food del ! ! !')
})

module.exports = router
