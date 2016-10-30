const exam = require('./exam');

module.exports = () => {
  $('#next').click(() => {
    exam.enter();
  });
};