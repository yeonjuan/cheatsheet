const fs = require('fs');
const readMarkdowns = require('./read-markdowns');

/**
 * @param {string[]} sections
 * @returns {string}
 */
function generateContents (sections, markdowns) {
  return sections.reduce((prevContents, section) => {
    const mds = markdowns
      .filter(md => md.meta.section === section);
    const contents = mds.map(md => md.content);
    const links = mds.map(md => `- [${md.link}](#${md.link.trim().replace(/\s/gi, '-').toLowerCase()})`);

    return `${prevContents}# ${section}\n${
      [links.join('\n'),
      contents.join('\n')
    ].join('\n')
    }`
  }, '');
}

/**
 * @param {string[]} sections 
 * @returns {string}
 */
function generateToc (sections) {
  return sections.reduce((content, section) => {
    return `${content}  1. [${section}](#${section})\n`
  }, '');
}

/**
 * @param {string} readmePath 
 * @param {object} meta
 * @returns {void}
 */
function generateReadme (
  readmePath,
  srcPath,
  meta
) {
  const toc = generateToc(meta.sections);
  const markdowns = readMarkdowns(srcPath);
  const contents = generateContents(meta.sections, markdowns);
  fs.writeFileSync(
    readmePath,
`# Cheatsheet

## Table of Contents
${toc}
${contents}`
);
}

module.exports = {
  generateReadme
}