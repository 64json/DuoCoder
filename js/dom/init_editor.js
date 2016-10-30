const app = require('../app');

module.exports = (index, language, afterRender) => {
  const $panel = $(`.panel:eq(${index})`);
  const $code = $panel.find('.code');
  let editor = ace.edit($code.attr('id'));
  editor.setTheme('ace/theme/monokai');
  if (index == 0) $panel.find('.desc').addClass('ace-monokai');
  editor.getSession().setMode(`ace/mode/${language.ace}`);
  editor.renderer.on('afterRender', () => {
    const matchings = app.getMatchings(index);
    if (!matchings || matchings.length == 0) return;
    let i = 0;
    let matching = matchings[i].slice(0);
    const $spans = $code.find('span');
    $spans.each(function () {
      const $span = $(this);
      const span = $span.text();
      if (span.indexOf(matching[0]) == 0) {
        matching[0] = matching[0].substring(span.length).trim();
        $span.addClass('match');
        $span.data('match', matching[1]);
        if (matching[0].length == 0) {
          matching = matchings[++i].slice(0);
        }
      } else {
        console.error('something wrong');
      }
    });
    if (afterRender) afterRender();
  });
  return editor;
};