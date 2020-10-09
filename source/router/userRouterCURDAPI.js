const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
// 特定路由下的中间件用法：这种用法是针对特定路由下的特定请求的，
// 只有请求该路由时，中间件才会拦截和解析该请求；
// 也即这种用法是 局部的；也是最常用的一个方式。(推荐用法)
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const jsonParser = bodyParser.json()

// 底层中间件用法：这将拦截和解析所有的请求；也即这种用法是 全局的。
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// 连接数据库
const userModel = require('../mongoDBConnect')

// user 的查询
router.post('/getUserInfoByUserName', urlencodedParser, (req, res) => {
  const {user} = req.body
  console.log('req.body - user: ' + user)

  userModel.find({user})
  .then((data) => {    
    res.send({err:0, msg:'查询成功', data})
  })
  .catch((err) => {
    res.send({err:-1, msg:'查询失败'})
  })
})

// user 的模糊查询
router.post('/getUserInfoByUserNamePattern', urlencodedParser, (req, res) => {
  const {name} = req.body
  console.log('req.body - name: ' + name)

  // 创建一个 正则表达式，比配 关键字
  const reg = new RegExp(name)

  // 模糊查询
  userModel.find({user: {$regex: reg}})
  .then((data) => {
    res.send({err:0, msg:'查询成功', data})
  })
  .catch((err) => {
    res.send({err:-1, msg:'查询失败'})
  })
})

module.exports = router
