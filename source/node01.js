const fs=require('fs')

// 打印 当前目录结构
fs.readdir('./', (err, data) => {
  console.log(err)
  console.log(data)
})