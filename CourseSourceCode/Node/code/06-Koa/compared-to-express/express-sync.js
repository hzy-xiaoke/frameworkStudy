const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('111111')
  next()
})

app.use((req, res, next) => {
  console.log('222222')
  console.log('333333')
  res.send('express-sync')
})

app.listen(3000)