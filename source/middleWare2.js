const express = require('express')
const app = express()

// 局部拦截器 - 局部中间件
// app.get('/pathname', func1, func2, func3...)
app.get(
  '/test1', 
  (req, res, next) => {
    console.log('func1')
    next()
  },
  (req, res, next) => {
    console.log('func2')
    res.send('func2 complete')
  }
)

app.listen(3000, () => {
  console.log('Server Start ...')
})