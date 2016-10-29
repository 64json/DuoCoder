module.exports = (index, language) => {
  const $panel = $(`.panel:eq(${index})`);
  const $title = $panel.find('.title');
  $title.text(language.name);
};