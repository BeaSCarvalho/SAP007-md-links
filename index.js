const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

function readDirectory(directory, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, function (err, data) {
      const mdFiles = data.filter((file) => {
        return path.extname(file) === '.md'
      })
      
      if (mdFiles.length === 0){
        reject(err = 'Sem arquivos Markdown nesse diretório')
      } else {
          mdFiles.forEach(element => {
            const joinPaths = path.join(directory, element)
            console.log(options)
            resolve(readFile(joinPaths)) 
          });
      }  
    })  
  })  
}
       
function readFile(file,options) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', function (err, data) {
      if(err) {
        reject(err);
      } else {
        const regEx = /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
        const result = data.match(regEx)

        result.map((item) => {
          const removeSquareBracket = item.replace(/^./, "").replace('\n', '');
          const separateString = removeSquareBracket.split('](')
          const rmvLastParentheses = separateString[1].replace(')', "")

          const resultObj = {
            href: rmvLastParentheses,
            text: separateString[0],
            file: path.parse(file),
          }

          if(options.validate){
            return new Promise((resolve, reject) => {
              const url = new URL(resultObj.href)
              console.log(url.protocol)
              let whichProtocol; 

              (url.protocol === 'https:') ? whichProtocol = https : whichProtocol = http
              whichProtocol.get(resultObj.href, function (res) {
                resultObj['status'] = res.statusCode;
                resultObj['msg'] = res.statusMessage;
                resolve(console.log(resultObj))
              }).on('error', (err) => {
                reject(err);  
              })
            })  
          } 

          return console.log(resultObj);
        })
      }
    })    
  })
}

module.exports = (dataToBeRead , options) => {
  return new Promise((resolve) => {
    const extension = path.extname(dataToBeRead);
    if (extension === '.md') {
      resolve(readFile(dataToBeRead, options))
    } else {
      resolve(readDirectory(dataToBeRead))
    }    
  })
}  

//md-links README.md --validate





