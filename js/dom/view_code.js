const app = require('../app');

module.exports = (index, code) => {
  const matchings = [];
  app.setMatchings(index, matchings);
  const lines = code.split(/\r?\n/);
  const omit_num = 99999;
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].replace(/(^|\]\})(((?!#\d+\{\[).)+)/gm, `$1#${omit_num}{[$2]}`);
    lines[i] = lines[i].replace(/#(\d+)\{\[(((?!\]\}).)*)\]\}/g, (match, num, content) => {
      num = parseInt(num);
      if (num == omit_num) num = -1;
      matchings.push([content, num, i]);
      return content;
    });
  }
  code = lines.join('\n');
  app.getEditor(index).setValue(code, -1);
};