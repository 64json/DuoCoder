const app = require('../app');

module.exports = (index, language, code) => {
  const matchings = [];
  app.setMatchings(index, matchings);
  code = code.replace(/#(\d+){\[([^(\]})]*)\]}/g, (match, num, content) => {
    matchings.push([content, num]);
    return content;
  });
  matchings.push(['', '']);
  app.getEditor(index).setValue(code, -1);
};