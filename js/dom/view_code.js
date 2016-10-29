module.exports = (index, language, code) => {
  const $panel = $(`.panel:eq(${index})`);
  const $code = $panel.find('.code');
  const matchings = [];
  code = code.replace(/#(\d+){\[([^(\]})]*)\]}/g, (match, num, content) => {
    matchings.push([content, num]);
    return content;
  });
  matchings.push(['', '']);
  $code.html(code);

  var editor = ace.edit($code.attr('id'));
  editor.setTheme('ace/theme/monokai');
  editor.getSession().setMode(`ace/mode/${language.ace}`);

  editor.renderer.on('afterRender', () => {
    var i = 0;
    var matching = matchings[i].slice(0);
    var $spans = $code.find('span');
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
  });
};