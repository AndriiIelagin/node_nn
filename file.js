const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/copy.txt')

// readStream.on('data', chunk => {
//   console.log('----- CHUNK ------')
//   console.log(chunk)
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)