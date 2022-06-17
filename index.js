const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

module.exports = (file , options) => {
  return new Promise((resolve, reject) => {
    //const extFile = path.extname(file)
    fs.readFile(file, 'utf-8', function (err, data) {
      if (err) {
        reject(console.log('erro reject', err));
      } else{
        const regEx = /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
        const result = data.match(regEx)
        result.map((item) => {
          const removeSquareBracket = item.replace(/^./, "")
          const separateString = removeSquareBracket.split('](')
          const resultObj = {
            href: separateString[1],
            text: separateString[0],
            file: path.parse(file),
          }
          if(options.validate){
            const statusCode = https.get(resultObj.href, (res) => {
              return res
            })
            resultObj.status = statusCode
          }
          resolve(console.log('resolve', resultObj.status))
        })
      }
    })
  })
}  


//md-links README.md --validate
//md-links readmetest.md --validate

//console.log(path.basename('C:/cmder/Laboratoria/learnyounode/baby-steps.js'));

//console.log(path.parse('C:/cmder/Laboratoria/learnyounode/baby-steps.js'))


// const myWarning = new Error('Something happened!');
// myWarning.name = 'CustomWarning';
// myWarning.code = 'WARN001';
// process.emitWarning(myWarning);
// process.on('warning', (warning) => {
//   console.log(warning.name);
//   console.log(warning.message);
//   console.log(warning.code);
// });



// teste();



