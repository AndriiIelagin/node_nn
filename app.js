const express = require('express')

const app = express()

app.listen(3004, () => {
  console.log('Server is running on port 3004')
})

// listen for requests
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname })
})

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname })
})