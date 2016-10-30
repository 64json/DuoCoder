const app = require('../app');

const from = 0, to = 1;

module.exports = {
  enter: () => {
    $('.desc-container .blur').css('display', 'block');
    app.disableComparison();
    const editor = app.getEditor(to);
    editor.setValue();
  },
  exit: () => {
    $('.desc-container .blur').css('display', '');
    app.enableComparison();
    const editor = app.getEditor(to);
    editor.setValue(app.getCode(to));
  }
};