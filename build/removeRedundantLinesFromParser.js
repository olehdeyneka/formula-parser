const path = require('path');
const fs = require('fs');
const filepath = path.join(__dirname, '../src/grammar-parser/grammar-parser.js');
const fileContent = fs.readFileSync(filepath);
const lines = fileContent.toString().split('\n');
const startOfRedundantLine = lines.find((l)=>l.includes(`require('fs')`));
const redundantIndex = lines.indexOf(startOfRedundantLine);
lines.splice(redundantIndex,1)
fs.writeFileSync(filepath, lines.join('\n'))
