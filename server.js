const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'text/html')

  let path = './views/'

  switch(req.url) {
    case '/':
      path += 'index.html'
      res.statusCode(200)
      break
    case '/about':
      path += 'about.html'
      res.statusCode(200)
      break
    case '/about-us':
      res.statusCode(301)
      res.setHeader('Location', '/about')
      res.end()
      break

    default:
      path += '404.html'
      break
  }
  
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3004, 'localhost', () => {
  console.log('Server is running on port 3004')
})