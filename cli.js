#!/usr/bin/env node

const mdLinks = require('./index.js')
const path = process.argv[2]

const options = {
  validate: false,
  stats: false
}

if(process.argv[3] === '--validate'){
  options.validate = true;
}

console.log(options.validate)

if(process.argv[3] === '--stats'){
  options.stats = true;
}

mdLinks(path, options)
  .then(links =>{
    console.log('then', links)
  })
  .catch(() =>{
    console.log('catch')
  });

// async function verifyFile(file){
//   try {
//     if(command === 'verify'){
//       return await mdLinks(file)  
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// verifyFile(file)

