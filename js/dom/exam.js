const app = require('../app');
const viewCode = require('./view_code');

const from = 0, to = 1;

module.exports = {
  enter: () => {
    app.enterExamMode();
    $('#next').addClass('selected');
    $('.desc-container .blur').css('display', 'block');
    const editor = app.getEditor(to);
    editor.setReadOnly(false);
    editor.setValue('');
  },
  exit: (keep_code) => {
    app.exitExamMode();
    $('#next').removeClass('selected next');
    $('.desc-container .blur').css('display', '');
    const editor = app.getEditor(to);
    editor.setReadOnly(true);
    if (!keep_code) viewCode(to, app.getCode(to));
  }
};