const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.use('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/500/index.pug'))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})