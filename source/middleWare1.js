const express = require('express')
const app = express()

// 中间件 MiddleWare (全局拦截器) - 全局的中间件
// app.use('/', (req, res, next) => {
app.use((req, res, next) => {  
  console.log('中间件 MiddleWare')
  let {token} = req.query
  if(token) {    
    next() // 在合适的地方，继续往下执行 next()
  }else{
    res.send('Token Not OK')  // 不会 继续往下执行
  }
})

app.get('/test1', (req, res) => {
  console.log('test1')
  res.send('test1 - Token OK')
})

app.get('/test2', (req, res) => {
  console.log('test2')
  res.send('test2 - Token OK')
})

app.listen(3000, () => {
  console.log('Server Start ...')
})