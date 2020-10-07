const express = require('express')
const app = express()
const appRouter = express.Router()

const bodyParser = require('body-parser')
// 使用 GET 方法，并且在Body内 使用form-urlencoded格式的数据作为参数
app.use(bodyParser.urlencoded({ extended: false }))
// 使用 POST 方法，并且在Body内 使用JSON格式的数据作为参数
app.use(bodyParser.json())

// Express GET 方法
app.get('/user/login', (req, res) => {
  console.log('Hello Express - get ! ! !')
  console.log(req.query)

  let {user, password} = req.query  

  if (user === 'wangyi' && password === '123') {
    res.send({
        err: 0,
        msg: 'regist OK'
    })  
  } else {
    res.send({
        err: -1,
        msg: 'regist Not OK'
    })  
  }
})

// Express POST 方法
app.post('/user/register', (req, res) => {
  console.log('Hello Express - post ! ! !')
  console.log(req.body)

  let {user, password} = req.body

  if (user === 'wangyi' && password === '123') {
    res.send({
      err: 0,
      msg: 'register OK'
    })
  } else {
    res.send({
      err: -1,
      msg: 'register Not OK'
    })
  }
})

// 启动 Express 服务器
app.listen(3000, () => {
  console.log('Sever Start ...')
})

