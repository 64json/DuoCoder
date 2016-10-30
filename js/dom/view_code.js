const app = require('../app');

module.exports = (index, code) => {
  const matchings = [];
  app.setMatchings(index, matchings);
  const lines = code.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].replace(/#(\d+){\[([^(\]})]*)\]}/g, (match, num, content) => {
      matchings.push([content, parseInt(num), i]);
      return content;
    });
  }
  code = lines.join('\n');
  matchings.push(['', -1]);
  app.getEditor(index).setValue(code, -1);
};