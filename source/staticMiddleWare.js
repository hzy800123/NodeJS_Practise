const express = require('express')
const app = express()

const path = require('path')
console.log(__dirname)
console.log(path.join(__dirname, '/img'))

// 在 Express 中提供静态文件
// 为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，
// 请使用 Express 中的 express.static 内置中间件函数。

// 访问 路径：
// http://localhost:3000/believeIsSeeing.jpg
app.use(express.static(path.join(__dirname, './img')))

// 访问 路径：
// http://localhost:3000/public/BelieveIsSeeing.jpg
app.use('/public', express.static('img'))

// 然而，向 express.static 函数提供的路径相对于您在其中启动 node 进程的目录。
// 如果从另一个目录运行 Express 应用程序，那么对于提供资源的目录使用 绝对路径 会更安全：
app.use('/public', express.static(path.join(__dirname, '/img')))


app.listen(3000, () => {
  console.log('Server Start...')
})
