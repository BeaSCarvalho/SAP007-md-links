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

if(process.argv[3] === '--stats'){
  options.stats = true;
}

mdLinks(path, options)
  .then((links) => {
    console.log(links)
  })
  .catch((err) =>{
    console.log('Erro', err)
  });
