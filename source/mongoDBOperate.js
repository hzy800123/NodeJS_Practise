const userModel = require('./mongoDBConnect')

// 操作数据库
// 插入
userModel.insertMany({user: 'wantyi', password: '123', age:16})
.then((data) => {
  console.log(data)
  console.log('--- 插入成功 ---')
})
.catch((err) => {
  console.log('--- 插入失败 ---')
})

// 查询
userModel.find({age:17})
.then((data) => {
  console.log(data)
  console.log('--- 查询成功 ---')
})
.catch((err) => {
  console.log('--- 查询失败 ---')
})

// 删除
userModel.deleteMany({age:17})
.then((data) => {
  console.log(data)
  console.log('--- 删除成功 ---')
})
.catch((err) => {
  console.log('--- 删除失败 ---')
})

// 更新
userModel.updateMany({age: {$gte:17}}, {password: '456'})
.then((data) => {
  console.log(data)
  console.log('--- 更新成功 ---')
})
.catch((err) => {
  console.log('--- 更新失败 ---')
})
