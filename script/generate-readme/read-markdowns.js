const fs = require('fs');
const path = require('path');

/**
 * @param {string} metaPart 
 */
function parseMeta (metaPart) {
  return JSON.parse(metaPart)
}

/**
 * @param {string} content 
 */
function parseMarkdown (content) {
  const metaExec = /<!--([\s\S]*?)-->/.exec(content);
  const titleExec = /###([\s\S]*?)\n/.exec(content);
  const [, metaPart] = metaExec || [];
  const [, title] = titleExec || [];
  if (metaPart && title) {
    return {
      meta: parseMeta(metaPart),
      link: title.trim(),
      content,
    }
  }
  return null;
}

/**
 * @param {string} rootPath 
 */
module.exports = function readMarkdowns (
  rootPath
) {
  const files = fs
    .readdirSync(rootPath)
    .map(p => path.join(rootPath, p));
  const results = [];
  const dirs = files.filter(file => fs.lstatSync(file).isDirectory());
  const mds = files.filter(file => path.extname(file) === '.md');
  
  dirs.forEach(dir => {
    results.push(...readMarkdowns(dir));
  })

  results.push(
    ...mds
      .map(md => parseMarkdown(fs.readFileSync(md).toString()))
      .filter(md => !!md)
  );

  return results;
}