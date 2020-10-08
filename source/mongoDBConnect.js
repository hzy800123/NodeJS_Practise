const mongoose = require('mongoose')


// (1) 连接数据库 MongoDB
mongoose.connect('mongodb://localhost/dataTest', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection; // 数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => { console.log('MongoDB connect OK !!!') })


// (2) schema 对象
// 每个schema都会映射到一个 MongoDB collection，
// 并定义这个collection里的文档的构成。

// 创建 一个和集合相关的 schema对象，类似“表头”（字段名列表）
const Schema = mongoose.Schema

// 注意：需要操作几个“表”(collection)，就需要创建几个schema对象(e.g.userSchema)
// 获取schema对象
const userSchema = new Schema({
  user : {type:String, required:true},
  password : {type:String, required:true},
  age : Number,
  sex : {type:Number, default:0}
})

// (3) 将 schema对象 转换为 数据模型
// 该 schema数据对象 和 集合关联collection ('集合名', schema对象)
const user = mongoose.model('User', userSchema)


// (4) 操作数据库

// 插入
user.insertMany({user: 'wantyi', password: '123', age:16})
.then((data) => {
  console.log(data)
  console.log('--- 插入成功 ---')
})
.catch((err) => {
  console.log('--- 插入失败 ---')
})

// 查询
user.find({age:17})
.then((data) => {
  console.log(data)
  console.log('--- 查询成功 ---')
})
.catch((err) => {
  console.log('--- 查询失败 ---')
})

// 删除
user.deleteMany({age:17})
.then((data) => {
  console.log(data)
  console.log('--- 删除成功 ---')
})
.catch((err) => {
  console.log('--- 删除失败 ---')
})

// 更新
user.updateMany({age: {$gte:17}}, {password: '456'})
.then((data) => {
  console.log(data)
  console.log('--- 更新成功 ---')
})
.catch((err) => {
  console.log('--- 更新失败 ---')
})
