const app = require('../app');
const exam = require('./exam');

const from = 0, to = 1;

const zip = (code) => {
  return code.trim().replace(/^\s*[\r\n]/gm, '').replace(/\b\s+\B/g, '').replace(/\B\s+\b/g, '').replace(/\B\s+\B/g, '');
};

const calculateProgress = (code_answer, code_user) => {
  return similarity(zip(code_answer), zip(code_user));
};

module.exports = () => {
  const editor = app.getEditor(to);
  editor.on('change', e => {
    if (!app.isExamMode()) return;
    const progress = calculateProgress(app.getCode(to, true), editor.getValue());
    $('.progress').css('width', `${progress * 100}%`);
    if (progress == 1) {
      exam.exit(true);
      $('#next').addClass('next');
      $('.progress').css('width', '');
    }
  });
};


/**
 * http://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
 */

const similarity = (s1, s2) => {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
};

const editDistance = (s1, s2) => {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};