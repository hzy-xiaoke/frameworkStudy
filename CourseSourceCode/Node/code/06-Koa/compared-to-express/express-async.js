const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('111111')
  next()
  // console.log('444444')
  // res.send('express-async')
})

app.use(async (req, res, next) => {
  console.log('222222')

  await delay(2000)

  console.log('333333')

  console.log('444444')
  res.send('express-async')
})

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

app.listen(3000)