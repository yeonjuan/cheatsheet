const path = require('path');
const generator = require('./generator');
const meta = require('../../meta.json');

generator.generateReadme(
  path.join(process.cwd(), 'README.md'),
  path.join(process.cwd(), 'src'),
  meta
);
console.log('README.md updated');
