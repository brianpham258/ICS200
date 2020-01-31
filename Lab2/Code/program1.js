const fs = require('fs');
const process = require('process');

fs.writeFileSync('text-copy.txt', fs.readFileSync(process.argv[2]));