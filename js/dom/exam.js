const app = require('../app');
const viewCode = require('./view_code');

const from = 0, to = 1;

module.exports = {
  enter: () => {
    app.enterExamMode();
    $('#next').addClass('selected');
    $('.desc-container .blur').css('display', 'block');
    app.disableComparison();
    const editor = app.getEditor(to);
    editor.setValue('');
  },
  exit: () => {
    app.exitExamMode();
    $('#next').removeClass('selected');
    $('.desc-container .blur').css('display', '');
    app.enableComparison();
    viewCode(to, app.getCode(to));
  }
};