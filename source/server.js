const express = require('express')
const app = express()

let userRouter = require('./router/userRouter')
let foodRouter = require('./router/foodRouter')

// 引用 外部的JS文件作为 路由的中间件
app.use('/user', userRouter)
app.use('/food', foodRouter)

app.listen(3000, () => {
  console.log('Server Start ...')
})
