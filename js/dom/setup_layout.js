const app = require('../app');
const exam = require('./exam');

module.exports = () => {
  $('#next').click(() => {
    if (app.isExamMode()) {
      exam.exit();
    } else {
      exam.enter();
    }
  });
};