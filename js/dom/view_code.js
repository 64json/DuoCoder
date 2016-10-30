const app = require('../app');

module.exports = (index, code) => {
  const matchings = [];
  app.setMatchings(index, matchings);
  code = code.replace(/#(\d+){\[([^(\]})]*)\]}/g, (match, num, content) => {
    matchings.push([content, parseInt(num)]);
    return content;
  });
  matchings.push(['', -1]);
  app.getEditor(index).setValue(code, -1);
};