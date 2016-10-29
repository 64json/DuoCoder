module.exports = (index, desc) => {
  const $panel = $(`.panel:eq(${index})`);
  const $desc = $panel.find('.desc');
  $desc.html(markdown.toHTML(desc));
};