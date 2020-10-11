const fs = require('fs');
const path = require('path');

const fileContents = fs.readFileSync(path.join(__dirname, 'test.spec.template.js'), { encoding: 'utf-8' });
const updatedFileContents = fileContents.replace('/**TEST_NAME**/', process.argv[2]);
fs.writeFileSync(path.join(__dirname, 'test.spec.js'), updatedFileContents);