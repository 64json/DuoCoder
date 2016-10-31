const app = require('../app');

module.exports = (index, language, afterRender) => {
  const $panel = $(`.panel:eq(${index})`);
  const $code = $panel.find('.code');
  let editor = ace.edit($code.attr('id'));
  editor.setTheme('ace/theme/monokai');
  if (index == 0) $panel.find('.desc').addClass('ace-monokai');
  editor.getSession().setMode(`ace/mode/${language.ace}`);
  editor.getSession().setUseWrapMode(true);
  editor.setShowFoldWidgets(false);
  editor.setReadOnly(true);

  editor.renderer.on('afterRender', () => {
    if (app.isExamMode()) return;

    if (afterRender) afterRender();
  });
  return editor;
};